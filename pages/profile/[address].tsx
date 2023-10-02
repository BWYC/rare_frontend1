import {
  useContract,
  useOwnedNFTs,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent } from "react";
import Container from "../../components/Container/Container";
import ListingWrapper from "../../components/ListingWrapper";
import NFTGrid from "../../components/NFTGrid";
import NFTGrid2 from "./NFTGrid2";
import Skeleton from "@/components/Skeleton/Skeleton";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
 
 NFT_COLLECTION_ADDRESS1,
} from "../../const/contractAddresses";
import styles from "../../styles/Profile.module.css";
import randomColor from "../../util/randomColor";
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
} from "@nextui-org/react";
import Link from "next/link";
import { Modal, Checkbox } from "@nextui-org/react";
import { Upload } from "@web3uikit/core";
import { useStorageUpload, useAddress } from "@thirdweb-dev/react";
import { Blockie } from "web3uikit";
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'

const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];
 
 

export default function ProfilePage() {


  
 
 
 
 
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

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection,
    router.query.address as string
  );
  const { data: ownedNfts1, isLoading: loadingOwnedNfts1 } = useOwnedNFTs(
    nftCollection2,
    router.query.address as string
  );

  const { data: directListings, isLoading: loadingDirects } =
    useValidDirectListings(marketplace, {
      seller: router.query.address as string,
    });

  const { data: auctionListings, isLoading: loadingAuctions } =
    useValidEnglishAuctions(marketplace, {
      seller: router.query.address as string,
    });

  return (
    <Container maxWidth="lg">
      <Button.Group color="warning" light>
        <Button>
          <Link href="/">
            <Text
              css={{
                fontFamily: "$mono",
              }}
              color="white"
            >
              {" "}
              « Home 🏠
            </Text>
          </Link>
        </Button>
        <Button>
          <Link href="/buy">
            <Text
              css={{
                fontFamily: "$mono",
              }}
              color="white"
            >
              {" "}
              Listings ✨ »
            </Text>
          </Link>
        </Button>
      </Button.Group>
      <hr></hr>
      <Spacer />
      <div className={styles.profileHeader}>
        <div
          className={styles.coverImage}
          style={{
            backgroundImage: `linear-gradient(1deg, ${randomColor3}, ${randomColor4}, ${randomColor4}, ${randomColor2}, ${randomColor1}, ${randomColor1}, ${randomColor1} )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        />
        <div
          className={styles.profilePicture}
          style={{
            background: `linear-gradient(1deg, ${randomColor3}, ${randomColor4}, ${randomColor4}, ${randomColor2}, ${randomColor1}, ${randomColor1}, ${randomColor1} )`,
          }}
        />
		<Button auto light onPress={handler}
		
		css={{
		marginLeft: "4%"
		}}
		>
       Change Avatar✒️
      </Button>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
          css={{
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderWidth: "1px",
          }}
        >
          <Modal.Header>
            <Text
              id="modal-title"
              size={18}
              css={{
                alignContent: "centre",
                textAlign: "centre",
                display: "flex",
                fontFamily: "$mono",
              }}
            >
              Set Avatar
            </Text>
            <hr></hr>
          </Modal.Header>
          <Modal.Body>
		  
           <AvatarEditor
      
        image="http://example.com/initialimage.jpg"
        width={250}
        height={250}
        border={50}
        scale={1.2}
      />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
            <Button auto onPress={closeHandler}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        <Text
          className={styles.profileName}
          css={{
            fontFamily: "$mono",
            fontSize: "40px",
          }}
        >
          {router.query.address ? (
            router.query.address.toString().substring(0, 4) +
            "..." +
            router.query.address.toString().substring(38, 42)
          ) : (
            <Skeleton width="320" />
          )}
        </Text>
      </div>
      <div className={styles.tabs}>
        <h3
          className={`${styles.tab} 
        ${tab === "nfts" ? styles.activeTab : ""}`}
          onClick={() => setTab("nfts")}
        >
          NFTs
        </h3>
        <h3
          className={`${styles.tab} 
        ${tab === "listings" ? styles.activeTab : ""}`}
          onClick={() => setTab("listings")}
        >
          Listings
        </h3>
        <h3
          className={`${styles.tab}
        ${tab === "auctions" ? styles.activeTab : ""}`}
          onClick={() => setTab("auctions")}
        >
          Auctions
        </h3>
        <h3
          className={`${styles.tab}
        ${tab === "Sell" ? styles.activeTab : ""}`}
          onClick={() => setTab("Sell")}
        >
          Sell
        </h3>
      </div>
      <div
        className={`${
          tab === "nfts" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Spacer />
        <NFTGrid data={ownedNfts} isLoading={loadingOwnedNfts} emptyText="" />
        <hr></hr>
        <Spacer />
		<NFTGrid2 data={ownedNfts1} isLoading={loadingOwnedNfts} emptyText="" />
        <Spacer />
      </div>
      <Spacer /> <Spacer />
      <div
        className={`${
          tab === "listings" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        {loadingDirects ? (
          <p>Loading...</p>
        ) : directListings && directListings.length === 0 ? (
          <p>Nothing Listed ⁉️</p>
        ) : (
          directListings?.map((listing) => (
            <ListingWrapper listing={listing} key={listing.id} />
          ))
        )}
      </div>
      <div
        className={`${
          tab === "auctions" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        {loadingAuctions ? (
          <p>Loading...</p>
        ) : auctionListings && auctionListings.length === 0 ? (
          <p>❌ NO NFTs HERE ❌</p>
        ) : (
          auctionListings?.map((listing) => (
            <ListingWrapper listing={listing} key={listing.id} />
          ))
        )}
      </div>
      <div
        className={`${
          tab === "Sell" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Sell1 />
        <Sell />
      </div>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer /> <Spacer />
      <Spacer /> <Spacer />
    </Container>
  );
}
