import {
  ThirdwebNftMedia,
  useContract,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS1,
} from "../const/contractAddresses";
import Skeleton from "../components/Skeleton/Skeleton";
import styles from "./NFT.module.css";

type Props = {
  nft: NFT;
};
import { Card, Col, Row, Text } from "@nextui-org/react";
import truncateEthAddress from "truncate-eth-address";

export default function NFTComponent1({ nft }: Props) {
  const { contract: marketplace, isLoading: loadingContract } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );
  // 1. Load if the NFT is for direct listing
  const { data: directListing, isLoading: loadingDirect } =
    useValidDirectListings(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS1,
      tokenId: nft.metadata.id,
    });
  useValidDirectListings(marketplace, {
    tokenContract: NFT_COLLECTION_ADDRESS1,
    tokenId: nft.metadata.id,
  });

  // 2. Load if the NFT is for auction
  const { data: auctionListing, isLoading: loadingAuction } =
    useValidEnglishAuctions(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS1,
      tokenId: nft.metadata.id,
    });

  const owner = nft.owner as string;
  const srcs = nft.metadata.image as string;

  return (
    <>
      <Card>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={8}
              weight="bold"
              transform="uppercase"
              css={{
                textGradient: "45deg, $yellow300 -20%, $blue50 90%",
              }}
            >
              NFT Rarity: #0
            </Text>
            <Text
              size={14}
              weight={"extrabold"}
              css={{
                padding: "2%",
                fontFamily: "monospace",
                textGradient: "45deg, $yellow300 -20%, $blue50 100%",
              }}
            >
              {nft.metadata.name} #{nft.metadata.id}
            </Text>
          </Col>
        </Card.Header>
        <Card.Image src={srcs} objectFit="cover" width="100%" alt="nft" />
      </Card>

      <p className={styles.nftName}>👤 Owner: {truncateEthAddress(owner)}</p>
      <div className={styles.priceContainer}>
        {loadingContract || loadingDirect || loadingAuction ? (
          <Skeleton width="100%" height="100%" />
        ) : directListing && directListing[0] ? (
          <div className={styles.nftPriceContainer}>
            <div>
              <p className={styles.nftPriceLabel}>Price💲</p>
              <hr></hr>
              <Text
                className={styles.nftPriceValue}
                css={{
                  textGradient: "45deg, $yellow900 -20%, $purple600 60%",
                }}
              >
                {`${directListing[0]?.currencyValuePerToken.displayValue}
            ${directListing[0]?.currencyValuePerToken.symbol}`}
                🔸
              </Text>
            </div>
          </div>
        ) : auctionListing && auctionListing[0] ? (
          <div className={styles.nftPriceContainer}>
            <div>
              <Text
                className={styles.nftPriceLabel}
                css={{
                  textGradient: "45deg, $yellow900 -20%, $blue500 90%",
                }}
              >
                Minimum Bid 🕷️
              </Text>
              <Text
                className={styles.nftPriceValue}
                css={{
                  textGradient: "45deg, $yellow800 -20%, $blue500 90%",
                }}
              >
                {`${auctionListing[0]?.minimumBidCurrencyValue.displayValue}
            ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}
              </Text>
            </div>
          </div>
        ) : (
          <div className={styles.nftPriceContainer}>
            <div>
              <p className={styles.nftPriceLabel}>Price💲</p>
              <hr></hr>
              <Text
                className={styles.nftPriceValue}
                css={{
                  textGradient: "45deg, $yellow900 -20%, $blue500 90%",
                }}
              >
                Priceless💎
              </Text>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
