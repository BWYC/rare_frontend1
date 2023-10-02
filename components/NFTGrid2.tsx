import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import Link from "next/link";
import React from "react";
import Skeleton from "./Skeleton/Skeleton";
import NFTComponent1 from "../components/NFT2";
import styles from "../styles/Buy.module.css";

type Props = {
  isLoading: boolean;
  data: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
};

export default function NFTGrid2({
  isLoading,
  data,
  overrideOnclickBehavior,
  emptyText = "No NFTs found for this collection.",
}: Props) {
  return (
    <div className={styles.nftGridContainer}>
      {isLoading ? (
        [...Array(20)].map((_, index) => (
          <div key={index} className={styles.nftContainer}>
            <Skeleton key={index} width={"100%"} height="312px" />
          </div>
        ))
      ) : data && data.length > 0 ? (
        data.map((nft) =>
          !overrideOnclickBehavior ? (
            <Link
              href={`/token2/${"0x89eB8bF6bc437f8c6DB5910DC2B005d6A4ae59e9"}/${nft.metadata.id}`}
              key={nft.metadata.id}
               className={styles.nftContainer}
            >
              <NFTComponent1 nft={nft} />
            </Link>
          ) : (
            <div
              key={nft.metadata.id}
              className={styles.nftContainer}
              onClick={() => overrideOnclickBehavior(nft)}
            >
              <NFTComponent1 nft={nft} />
            </div>
          )
        )
      ) : (
        <p>{emptyText}</p>
      )}
    </div>
  );
}