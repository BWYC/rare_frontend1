import { Web3Button, useAddress } from "@thirdweb-dev/react";
import {
  stakingContractAddress,
} from "../const/contractAddresses";

export default function Component() {
  return (
    <Web3Button
    action={(contract) => contract.call("claimRewards")}
    contractAddress={stakingContractAddress}
  >
    Claim Rewards
  </Web3Button>
  )
}