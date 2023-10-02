import { useContract, useNFT, useAddress } from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
} from "../const/contractAddresses";
import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import Skeleton from "@/components/Skeleton/Skeleton";
import styles from "../styles/Home.module.css";
import { Card, Container, Button, Text, Spacer, Grid } from "@nextui-org/react";
import { tokenContractAddress } from "../const/contractAddresses";

type Props = {
  nft: NFT;
};
import truncateEthAddress from "truncate-eth-address";

interface NFTCardProps {
  tokenId: number;
}
const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);
  const address = useAddress();
  return (
    <>
      <Container
        css={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        {nft && (
          <Grid>
            {nft.metadata && (
              <Card>
                <Card.Image
                  src={nft.metadata.image as string}
                  objectFit="cover"
                />
              </Card>
            )}
            <Spacer />

            <Text
              css={{
                display: "flex",
                flexDirection: "column",
              }}
              size={10}
            >
              {nft.metadata.name}
            </Text>
          </Grid>
        )}
      </Container>
      <Container
        css={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Spacer />
      </Container>
    </>
  );
};
export default NFTCard;
