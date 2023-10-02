import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid2 from "../components/NFtGrid2";
import { NFT_COLLECTION_ADDRESS1 } from "../const/contractAddresses";
import { Text, Spacer, Button } from "@nextui-org/react";
import Link from "next/link";

export default function Buy1() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS1);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxWidth="lg">
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
        Rare Collection
      </Text>
      <hr></hr>
      <Spacer />
      <NFTGrid2
        data={data}
        isLoading={isLoading}
        emptyText={"Oops! No NFTs Here"}
      />
      <Spacer />
      <Spacer />
      <Spacer />
    </Container>
  );
}
