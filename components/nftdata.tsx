import { Table } from "@nextui-org/react";
import NFTCard from "../components/NFTCard";
import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
  useContractWrite,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";

import {
  nftDropContractAddress,
  stakingContractAddress,
  tokenContractAddress,
} from "../const/contractAddresses";
import styles from "../styles/Home.module.css";
import {
  Spacer,
  Image,
  Container,
  Card,
  Text,
  Button,
} from "@nextui-org/react";
import Claim from "../components/claim";
import Link from "next/link";

export default function NFTD() {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract, isLoading } = useContract(stakingContractAddress);
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
    }
    await contract?.call("stake", [[id]]);
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return <div className={styles.nftGridContainer}></div>;
}
