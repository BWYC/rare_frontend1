import { BigNumber, utils } from "ethers";
import { useMemo} from "react";
import {
  ConnectWallet,
  useActiveClaimConditionForWallet,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useNFT,
  useUnclaimedNFTSupply,
  Web3Button,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent } from "react";
import Container from "@/components/Container/Container";
import ListingWrapper from "@/components/ListingWrapper";
import NFTGrid from "@/components/NFTGrid";
import Skeleton from "@/components/Skeleton/Skeleton";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
  NFT_COLLECTION_ADDRESS1,
} from "@/const/contractAddresses";
import styles from "@/styles/Profile1.module.css";
import randomColor from "@/util/randomColor";
import Sell from "../sell";
import Sell1 from "../sell1";
import {
  Spacer,
  Image,
  Text,
  Card,
  Col,
  Row,
  Button,
  Badge,
  Input,
  Grid,
} from "@nextui-org/react";
import Link from "next/link";
import { Modal, Checkbox } from "@nextui-org/react";
import { Upload } from "@web3uikit/core";
import { useStorageUpload, useAddress } from "@thirdweb-dev/react";
import { Blockie } from "web3uikit";
import { Counter } from "@/components/counter";
import { Slider } from "@web3uikit/core";
import truncateEthAddress from "truncate-eth-address";
import { Formik, Field, Form, FormikHelpers } from 'formik';


interface Values {
  quantity: number;
}


const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];

export default function ProfilePage() {
  const address = useAddress();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const router = useRouter();
  const [tab, setTab] = useState<"nfts" | "listings" | "auctions" | "Sell">(
    "nfts"
  );

  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);
  const { contract: nftCollection2 } = useContract(NFT_COLLECTION_ADDRESS1);
 const contractQuery = useContract(NFT_COLLECTION_ADDRESS);
  const contractMetadata = useContractMetadata(contractQuery.contract);
  const [quantity, setQuantity] = (1);
  const claimConditions = useClaimConditions(contractQuery.contract);
  const activeClaimCondition = useActiveClaimConditionForWallet(
    contractQuery.contract,
    address,
  );
  const claimerProofs = useClaimerProofs(contractQuery.contract, address || "");
  const claimIneligibilityReasons = useClaimIneligibilityReasons(
    contractQuery.contract,
    {
      quantity,
      walletAddress: address || "",
    },
  );
  const unclaimedSupply = useUnclaimedNFTSupply(contractQuery.contract);
  const claimedSupply = useClaimedNFTSupply(contractQuery.contract);
  const { data: firstNft, isLoading: firstNftLoading } = useNFT(
    contractQuery.contract,
    0,
  );

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString();
  }, [claimedSupply]);

  const numberTotal = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0)
      .add(BigNumber.from(unclaimedSupply.data || 0))
      .toString();
  }, [claimedSupply.data, unclaimedSupply.data]);

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0,
    );
    return `${utils.formatUnits(
      bnPrice.mul(quantity).toString(),
      activeClaimCondition.data?.currencyMetadata.decimals || 18,
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ]);

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable;
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0,
      );
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0,
      );
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;

    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
        // allowed unlimited for the snapshot
        bnMaxClaimable = BigNumber.from(1_000_000);
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable);
        } catch (e) {
          // fall back to default case
        }
      }
    }

    const maxAvailable = BigNumber.from(unclaimedSupply.data || 0);

    let max;
    if (maxAvailable.lt(bnMaxClaimable)) {
      max = maxAvailable;
    } else {
      max = bnMaxClaimable;
    }

    if (max.gte(1_000_000)) {
      return 1_000_000;
    }
    return max.toNumber();
  }, [
    claimerProofs.data?.maxClaimable,
    unclaimedSupply.data,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ]);

  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0,
          )) ||
        numberClaimed === numberTotal
      );
    } catch (e) {
      return false;
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ]);

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    );
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ]);

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading ||
      unclaimedSupply.isLoading ||
      claimedSupply.isLoading ||
      !contractQuery.contract
    );
  }, [
    activeClaimCondition.isLoading,
    contractQuery.contract,
    claimedSupply.isLoading,
    unclaimedSupply.isLoading,
  ]);

  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading],
  );

  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return "Sold Out";
    }

    if (canClaim) {
      const pricePerToken = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0,
      );
      if (pricePerToken.eq(0)) {
        return "Mint (Free)";
      }
      return `Mint (${priceToMint})`;
    }
    return "Minting not available";
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    buttonLoading,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ]);

  const dropNotReady = useMemo(
    () =>
      claimConditions.data?.length === 0 ||
      claimConditions.data?.every((cc) => cc.maxClaimableSupply === "0"),
    [claimConditions.data],
  );

  const dropStartingSoon = useMemo(
    () =>
      (claimConditions.data &&
        claimConditions.data.length > 0 &&
        activeClaimCondition.isError) ||
      (activeClaimCondition.data &&
        activeClaimCondition.data.startTime > new Date()),
    [
      activeClaimCondition.data,
      activeClaimCondition.isError,
      claimConditions.data,
    ],
  );

  if (!0xd9F40fE72Ebaa97c4A0E5d2c63B4B05218632242) {
    return (
      <div className="flex h-full items-center justify-center">
        No contract address provided
      </div>
    );
  }

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

 

  return (
    <Container maxWidth="lg">
      <Spacer />
      <Text
        className={styles.creatorTitle}
        h2
        size={50}
        css={{
          fontFamily: "PT Mono",
          textGradient: "45deg, $yellow600 -20%, $blue800 100%",
          textAlign: "center",
          position: "sticky",
        }}
        weight="bold"
      >
        {contractMetadata.data?.name}
        <Text
          size={20}
          weight="bold"
        >
          By <Blockie seed={"0xd9F40fE72Ebaa97c4A0E5d2c63B4B05218632242"} size={6} scale={4} />{" "}{truncateEthAddress("0xd9F40fE72Ebaa97c4A0E5d2c63B4B05218632242")}
        </Text>
      </Text>
      <Spacer />
      <div className={styles.profileHeader}>
        <div
          className={styles.coverImage}
          style={{
            backgroundImage:`url("https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Text
            className={styles.creatorTitle1}
            size={18}
            css={{
              padding: "5%",
              fontFamily: "PT Mono",
              textGradient: "45deg, $yellow500 -20%, $blue800 100%",
              textAlign: "left",
              position: "sticky",
            }}
            weight="bold"
          >
            Description: {contractMetadata.data?.description}
          </Text>
		  
        </div>
        <div
          className={styles.profilePicture}
          style={{
            backgroundImage:`url("https://ik.imagekit.io/bayc/assets/ape1.png")`,
			            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        />
      </div>
	  <Spacer />
	  <hr />
	  <Spacer />
	  <Grid.Container>
	  <Grid xs={1}></Grid>
	   <Grid xs={10}>
		
          <Card
            css={{
              backdropFilter: "blur(10px)",
              background: "transparent",
              borderStyle: "solid",
              borderWidth: "1px",
            }}
          >
            <Card.Header>
              <Col>
 <Counter />
                <Text
				className={styles.creatorTitle2}
				weight="extrabold"
                  css={{
                    fontFamily: "PT Mono",
                    textGradient: "45deg, $yellow800 -20%, $blue700 100%",
                    textAlign: "center",
                    position: "sticky",
					
                  }}
                >
				  <Text
                  css={{
                    fontFamily: "PT Mono",
                    textGradient: "45deg, $yellow800 -20%, $blue900 100%",
                    textAlign: "center",
                    position: "sticky",
                  }}
                >
				<Spacer />
                  TOTAL SUPPLY: {numberTotal} Items 💧
                </Text>
                  MINTED SUPPLY: {numberClaimed} Items 👾
                  <Text
                    css={{
                      fontFamily: "PT Mono",
                      textGradient: "45deg, $yellow500 -20%, $blue100 100%",
                      textAlign: "center",
                      position: "sticky"
                    }}
                  >
                    <Spacer />
                  </Text>
                </Text>
              </Col>
            </Card.Header>
            <Card.Body
				css={{
			alignItems: "center"
			}}
			
			>
			

			<Button.Group size="xl"
		color="transparent"
			>
		<Button
size="xs"
color="warning"
                        onClick={() => {
                          const value = quantity - 1;
                          if (value > maxClaimable) {
                            setQuantity(maxClaimable);
                          } else if (value < 1) {
                            setQuantity(1);
                          } else {
                            setQuantity(value);
                          }
                        }}
                        disabled={isSoldOut || quantity - 1 < 1}
                      >
                       ➖
                      </Button>
					  <Button ghost>
<Text
weight="extrabold"
 css={{
            fontFamily: "PT Mono",
            textGradient: "45deg, $yellow600 -20%, $green500 100%",
            textAlign: "center",
            position: "sticky",
			padding: "5%",
			borderWidth: "1px",
			borderRadius: "8px",
			width: "90px",
			marginLeft: "5%",
			marginRight: "5%"
          }}>
                        {!isLoading && isSoldOut ? "Sold Out" : quantity} {contractMetadata?.data?.symbol}

</Text>
</Button>
<Button
size="xs"
ghost
color="warning"
                        onClick={() => {
                          const value = quantity + 1;
                          if (value > maxClaimable) {
                            setQuantity(maxClaimable);
                          } else if (value < 1) {
                            setQuantity(1);
                          } else {
                            setQuantity(value);
                          }
                        }}
                        className={
                          "flex h-full items-center justify-center rounded-r-md px-2 text-center text-2xl disabled:cursor-not-allowed disabled:text-gray-500 dark:text-white dark:disabled:text-gray-600"
                        }
                        disabled={isSoldOut || quantity + 1 > maxClaimable}
                      >
                        ➕
                      </Button>
			</Button.Group>


            </Card.Body>
            <Card.Footer 
			 isBlurred
      css={{
        position: "inherit",
        bgBlur: "#0f224426",
        borderTop: "$borderWeights$light solid $gray800",
      }}
			>
			

  <Web3Button
                      contractAddress={"0xd9F40fE72Ebaa97c4A0E5d2c63B4B05218632242"}
                      style={{
                        backgroundColor: "orange",
                        height: "60px",
                         width: "60%",
                         fontFamily: "PT Mono",
						 marginLeft: "20%"
                      }}
                      action={(cntr) => cntr.erc721.claim(quantity)}
                      isDisabled={!canClaim || buttonLoading}
                      onError={(err) => {
                        console.error(err);
                        console.log({ err });
                      }}
                    >
                      {buttonLoading ? (
                        <div role="status"
						style={{
						width: "10px",
						height: "10px"
						}}
						>

                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        buttonText
                      )}
                    </Web3Button>
                   
            </Card.Footer>
          </Card>
        </Grid>
		<Grid xs={0.5}></Grid>
	  </Grid.Container>
       
      <Spacer />
      <hr></hr>
    </Container>
  );
}
