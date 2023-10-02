import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFTGrid";
import {
  NFT_COLLECTION_ADDRESS,
  NFT_COLLECTION_ADDRESS1,
} from "../const/contractAddresses";
import { Text, Spacer, Button } from "@nextui-org/react";
import Link from "next/link";
import Buy1 from "./buy2";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

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
              « Home 🏠 /
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
              Listings ✨
            </Text>
          </Link>
        </Button>
      </Button.Group>
      <Text
        h4
        size={30}
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
      </Text>
      <hr></hr>
      <Spacer />
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={"Oops! No NFTs Here"}
      />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </Container>
  );
}
