import { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "../components/Container/Container";

import styles from "../styles/Profile.module.css";
import { Text, Spacer, Card, Grid, Button } from "@nextui-org/react";
import { ChevronLeft2X } from "@web3uikit/icons";
import { ChevronRight2X } from "@web3uikit/icons";
import Link from "next/link"

export default function Whitepaper() {
  const router = useRouter();
  const [tab, setTab] = useState<
    "nfts" | "introduction" | "Contracts" | "Token" | "conclusion"
  >("nfts");

  return (
    <Container maxWidth="lg">
      <Text
        h2
        size={45}
        css={{
          padding: "2%",
          fontFamily: "monospace",
          textGradient: "45deg, $yellow800 -20%, $red300 100%",
        }}
        weight="bold"
      >
        Whitepaper📜
      </Text>

      <div className={styles.tabs}>
      <Button.Group color="warning" light>
        <Button><Link href="/"><Text css={{
          fontFamily: "$mono"
        }} color="white"> « Home 🏠</Text></Link></Button>
        <Button><Link href="/buy"><Text css={{
          fontFamily: "$mono"
        }} color="white"> Listings ✨ »</Text></Link></Button>
      </Button.Group>
      </div>
<Spacer />
<Spacer />
      <div
        className={`${
          tab === "nfts" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Card css={{ p: "$6", mw: "100%",
       
 
          backgroundColor: "transparent",
          backdropFilter: "blur(16px)",
         borderStyle: "solid",
      }} >
          <Card.Header>
            <img
              alt="logo"
              src="https://bafkreiakjtw7wj6x7qpdliuoeypuar2554hebk3vnz75dhomkqrgbwvfya.ipfs.nftstorage.link/"
              width="34px"
              height="34px"
            />

            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  RareBay
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text
                  css={{ color: "white", fontFamily: "monospace" }}
                  size={12}
                >
                  A decentralized modern age Museum
                </Text>
                <hr></hr>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Grid xs={6}></Grid>

            <Text h3 css={{ fontFamily: "monospace" }}>
              Abstract
            </Text>
            <div>
              <Text css={{ color: "white", fontFamily: "monospace" }}>
                Non-fungible Tokens are unique identifiers that are recorded on
                a Blockchain and has long been used to certify ownership and
                authenticity of digital assets. NFTs are not mutable, and this
                immutability allows only the owner to decide what to do with it
                and who to transfer it to. RareBay is a markeplace for
                non-fungible-tokens. NFT Markeplaces have been here for a while
                but this one is a Rare one "no pun intended". RareBay
                Marketplace implements a new kind of buying and selling of NFTs
                using a rarity algorithm that makes NFTs truely decentralized
                and Rare. Rarity in RareBay is generted by an ERC20 Token and A
                staking techique that will be discussed in the subsequent pages.
                RareBay combines the power of ERC721 and ERC20 contracts to make
                NFTs as priceles as the Monalisa.
              </Text>
            </div>
          </Card.Body>
          <Card.Footer>
            {" "}
            <Spacer />
            <Button light>
              <Text
                b
                css={{ fontFamily: "monospace" }}
                onClick={() => setTab("introduction")}
              >
                Introduction
              </Text>
              <ChevronRight2X fontSize="20px" />
            </Button>
          </Card.Footer>
        </Card>
      </div>
      <Spacer />
      <div
        className={`${
          tab === "introduction" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Card css={{ p: "$6", mw: "100%",
      
      backgroundColor: "transparent",
      backdropFilter: "blur(16px)",
     borderStyle: "solid",
      }}>
          <Card.Header>
            <img
              alt="logo"
              src="https://bafkreiakjtw7wj6x7qpdliuoeypuar2554hebk3vnz75dhomkqrgbwvfya.ipfs.nftstorage.link/"
              width="34px"
              height="34px"
            />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  RareBay
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text
                  css={{ color: "white", fontFamily: "monospace" }}
                  size={12}
                >
                  A decentralized modern age Museum
                </Text>
                <hr></hr>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Grid xs={6}></Grid>

            <Text h3 css={{ fontFamily: "monospace" }}>
              Introduction
            </Text>
            <div>
              <Text css={{ color: "white", fontFamily: "monospace" }}>
                This paper proposes a new age of Digital Museum, Storage of
                precious objects has long been human Hobby evidenced with how
                Egyptian Arifacts was stored in the most delicate and secure way
                to ensure that even milleniums to come these precious objects
                would still be intact. In 2009 Satoshi Nakamoto Invented a
                decentralized Way of transfering digital cash in what he termed
                as a blockchain containing bits of data that are immutable. This
                invention was reinvented into Ethereum which provided the same
                peer to peer mechanism but with slight upgarde of allowing these
                bits of data in a blockchain to be mutable in ways termed as
                smart-contracts but with less decentralization, this opended
                doors to other great creation like the CORE DAO Network, A
                truely decentralized way of interacting with smart-contracts.
                The CORE DAO Network inspired the Creation of RareBay, Not just
                an NFT Marketplace, but a truely dencetralized way of
                interacting with these NFTs. RareBay is RARE.
              </Text>
            </div>
          </Card.Body>
          <Card.Footer>
            <Button light>
              <ChevronLeft2X fontSize="20px" />
              <Text
                b
                css={{ fontFamily: "monospace" }}
                onClick={() => setTab("nfts")}
              >
                Abstract
              </Text>
            </Button>
            <Button light>
              <Text
                b
                css={{ fontFamily: "monospace" }}
                onClick={() => setTab("Contracts")}
              >
                Contracts
              </Text>
              <ChevronRight2X fontSize="20px" />
            </Button>
          </Card.Footer>
        </Card>
      </div>
      <Spacer />

      <div
        className={`${
          tab === "Contracts" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Card css={{ p: "$6", mw: "100%",
      
      backgroundColor: "transparent",
      backdropFilter: "blur(16px)",
     borderStyle: "solid",
      }}>
          <Card.Header>
            <img
              alt="nextui logo"
              src="https://bafkreiakjtw7wj6x7qpdliuoeypuar2554hebk3vnz75dhomkqrgbwvfya.ipfs.nftstorage.link/"
              width="34px"
              height="34px"
            />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  RareBay
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text
                  css={{ color: "white", fontFamily: "monospace" }}
                  size={12}
                >
                  A decentralized modern age Museum
                </Text>
                <hr></hr>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Grid xs={6}></Grid>

            <Text h3 css={{ fontFamily: "monospace" }}>
             Smart Contracts
            </Text>
            <div>
              <Text css={{ color: "white", fontFamily: "monospace" }}>
               Smart Contracts are computational executions done according to agreed
                terms. Ethereum was the first blockchain that implemented the
                use of Contracts, Contracts have changed the way users interact
                with blockchians upgrading from just transfer of bits to chuncks
                of immutable data. Ethereum pioneered the first practical
                example of Smart Contracts. RareBay is built on CORE Blockchain. A new
                Blockchain network a successor of the Ehtereum that utilises the Satoshi Plus Consesus
                combining the Proof of Work(PoW) and Delegated Proof of Stake
                (DPoS) which promises to bring more decentralization compared to
                its predecessors. RareBay uses ERC721 and ERC20 combined to
                create a way of making NFT as Rare as they can get.
              </Text>
              <Spacer />

              <Text h4 css={{ color: "white", fontFamily: "monospace" }}>
                Rarity
              </Text>
              <hr></hr>
              <Text css={{ color: "white", fontFamily: "monospace" }}>
                Rarity is directly proportional to price and is a method of
                determing how less likely you can find something. This technique
                is used by other marketplaces shallowlly based as how many
                owners and price of the NFT. Rarity determined from number of
                owners and the price of NFT can change based on the owners
                wishes, RareBay Marketplace uses a more robust manner of
                determing the Rarity of an NFT.
              </Text>
              <Spacer />
              <Text h4 css={{ color: "white", fontFamily: "monospace" }}>
                Working Mechanism
              </Text>
              <hr></hr>
              <Text css={{ color: "white", fontFamily: "monospace" }}>
                Rarity in RareBay works by combining an ERC721 Staking contract
                and an ERC20 Token. Rare Creators 'no pun intended' will need to
                have a minimum of 1000 items as ERC20 Tokens. 1000 beacause we
                want to reduce the the number of Rare creators. Duplicacy of
                these 1000 items is not allowed, each item unique in its own
                way. And since duplicay can not be measured, a Voting DAO will
                exist for validating this to ensure items listed are not similar
                at a large extent, These 1000 ERC20 Tokens are staked in an
                algorithm that works based on time and price. Rarity increaces
                with How many ERC20 Token are rewarded during staking. Such
                that:
                <Spacer />
                <Text
                  weight="bold"
                  css={{ color: "white", fontFamily: "monospace" }}
                >
                  1000 ERC20_NFT = 1 $RARE reward earned annualy = Rarity
                </Text>
                <Text
                  weight="bold"
                  css={{ color: "white", fontFamily: "monospace" }}
                >
                  Rarity = []
                </Text>
                <Spacer />
                Annual reward of $RARE token is done every milisecond but
                amounts to 1 $RARE token if never unstaked. The Supply of the
                $RARE Token that is rewarded has no supply beacause there is no
                Limit to how RARE an NFT can become. All NFT Before being listed
                on RareBay have zero Rarity. Once a creator stakes 1000 ERC20
                Tokens, they are rewarded with Rarity. Unstaking stops the
                Rarity increament and makes the Item have a constant rarity
                which can be increased again by staking. The $RARE Token used
                here has no default admin and the supply is unlimited, staking
                and unstaking of these 1000 ERC20 buy a user is free and only
                liable to gas fees. A creator has the option of unstaking at
                there on free will without the need to pay staking or unstaking
                fees. $RARE Token rewarded from staking can be used to buy and
                sell ERC20 NFT on RareBay at discounted prices.
              </Text>
              <Spacer />
              <Text h4 css={{ color: "white", fontFamily: "monospace" }}>
                Scenario
                <hr></hr>
                <Text css={{ color: "white", fontFamily: "monospace" }}>
                  This scenario tries to relay the logical flow of events in a
                  practical manner. John Doe a creator, wants to list their Rare
                  NFT("no pun intended") on RareBay NFT Marketplace. John tries
                  to list 1 NFT on RareBay Markeplace, they are prompted with an
                  error, "Please Stake atleast 1000+ items", John adds more
                  items and creates a launchpad successfully on the marketplace.
                  This Launcpad is not directly listed it is checked for
                  duplicacy and unacceptable content in a decentralized DAO
                  Voting. Once verified, John's Listing is published on the
                  markeplace for other users to buy and sell. The Rarity of
                  John's collection will default to Zero. He Can decide to list
                  these items at his price of choice as either an Auction or a
                  direct listing. John wants to stake in this scenario. Staking
                  his 1000 items will earn him an equivalent of 1 $RARE token
                  per year if he never unstakes. Staking Increase rarity in a
                  value propotional to the Tokens being earned. Staked RARE NFT
                  can not be traded. But John wants to to sell some of his work
                  for a month in an Auction. Unstaking will stop Rarity
                  increament, and he can not unstake any Value less than 1000
                  items. The algorithm will still work if his staking wallet
                  balance is less than 1000 items but he still can not add any
                  items that will not amount the total to 1000 items. Lets say
                  John waited 1year to earn 1 $RARE reward, the Rarity of the
                  1000 items that made this possible will have increased
                  proportionaly too. The Value is an integer calculated from the
                  number of Rewards earned and ranges from 0 to infinity. The
                  supply of $RARE Token is also unlimited. John now has 1 $RARE
                  Token, what to do with this token is upto John to decide but
                  he has the option to trade at discounted prices using $RARE
                  Token on RareBay NFT Markeplace.
                </Text>
                <Spacer />
              </Text>
            </div>
          </Card.Body>
          <Card.Footer>
            <Button light>
              <ChevronLeft2X fontSize="20px" />
              <Text
                css={{ fontFamily: "monospace" }}
                onClick={() => setTab("introduction")}
              >
                Introduction
              </Text>

              <Spacer />
            </Button>
            <Spacer />
            <Button light>
              <Text
                css={{ fontFamily: "monospace" }}
                onClick={() => setTab("Token")}
              >
                Token
              </Text>
              <ChevronRight2X fontSize="20px" />
              <Spacer />
            </Button>
          </Card.Footer>
        </Card>
      </div>
      <div
        className={`${
          tab === "Token" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Card css={{ p: "$6", mw: "100%", 
          backgroundColor: "transparent",
          backdropFilter: "blur(16px)",
         borderStyle: "solid", }}>
          <Card.Header>
            <img
              alt="nextui logo"
              src="https://bafkreiakjtw7wj6x7qpdliuoeypuar2554hebk3vnz75dhomkqrgbwvfya.ipfs.nftstorage.link/"
              width="34px"
              height="34px"
            />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  RareBay
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text
                  css={{ color: "white", fontFamily: "monospace" }}
                  size={12}
                >
                  A decentralized modern age museum
                </Text>
                <hr></hr>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Grid xs={6}></Grid>

            <Text h3 css={{ color: "white", fontFamily: "monospace" }}>
              $RARE Token
            </Text>
            <div>
              <Text css={{ color: "white", fontFamily: "monospace" }}>
                $RARE is the ERC20 Token rewarded for staking NFT to increase
                Rarity. The Token has an unlimited supply and a Zero initial
                Supply. RARE Token is only earned through this method of staking
                and supply increases with number of NFTs staked. Users can only
                earn this Token per every 1000 NFT staked. The Rarity increament of the 
                token will never be higher than the number of years since RareBay Launch. 1 Token for every 1000 items 
              </Text>
            </div>
          </Card.Body>
          <Card.Footer>
            <Button light>
              <ChevronLeft2X fontSize="20px" />
              <Text
                css={{ fontFamily: "monospace" }}
                onClick={() => setTab("Contracts")}
              >
                Contracts
              </Text>
              <Button light>
                <Text
                  css={{ fontFamily: "monospace" }}
                  onClick={() => setTab("conclusion")}
                >
                  Conclusion
                </Text>
                <ChevronRight2X fontSize="20px" />
                <Spacer />
              </Button>
              <Spacer />
            </Button>
            <Spacer />
          </Card.Footer>
        </Card>
      </div>
      <div
        className={`${
          tab === "conclusion" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Card css={{ p: "$6", mw: "100%",
      
      backgroundColor: "transparent",
      backdropFilter: "blur(16px)",
     borderStyle: "solid",
      }}>
          <Card.Header>
            <img
              alt="nextui logo"
              src="https://bafkreiakjtw7wj6x7qpdliuoeypuar2554hebk3vnz75dhomkqrgbwvfya.ipfs.nftstorage.link/"
              width="34px"
              height="34px"
            />
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  RareBay
                </Text>
              </Grid>
              <Grid xs={12}>
                <Text
                  css={{ color: "white", fontFamily: "monospace" }}
                  size={12}
                >
                  A decentralized modern age Museum
                </Text>
                <hr></hr>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Grid xs={6}></Grid>

            <Text h3 css={{ color: "$accents10", fontFamily: "monospace" }}>
              Conclusion
            </Text>
            <div>
              <Text css={{ color: "white", fontFamily: "monospace",
            
            }}>
                This Paper concludes by stating that this propasal for Rarity
                may still be considerd vague, with how NFTs can be modified. To
                carb scams, Smart contracts deployed on RareBay will require
                validation from a voting DAO, unrealistic collections can not be
                minted, and duplicate items will also not be accepted. There
                will currently not exist an item with more Rarity than the
                algorithm supports. On Launch, creators can start Rarity
                Increament of their NFT upon successful staking. Staking has no
                other fees other than gas fees, $RARE Token has an unlimited
                supply and no direct admin. $RARE Token can only be claimed from
                this form of staking. The only distribution done is 100% earned
                from staked NFTs. Rarity will still not determine the price
                value of an item but I bet anybody would want to sell less than
                than it costs them staking time and because time is money. Non
                Profit organizations will most likely have the rarest items
                because they will less likely unstake over the years this Items
                that were never unstaked will become the rarest, they will also
                have fewer owners because they can not be traded during this
                staking time but just for displayed with a priceless tag. This
                will bring about a museum like environment over decades to come.
                Users can decide to sell items with or without Rarity but buyers
                can decide only to buy items with highest Rarity that is not
                affected by number of owners or the creator's biased price but
                rather affected by time, just like whiskey barrels.
              </Text>
            </div>
          </Card.Body>
          <Card.Footer>
            <Button light>
              <ChevronLeft2X fontSize="20px" />
              <Text
                css={{ fontFamily: "monospace" }}
                onClick={() => setTab("Token")}
              >
                Token
              </Text>

              <Spacer />
            </Button>
            <Spacer />
          </Card.Footer>
        </Card>
      </div>
      <Spacer />
      <Spacer />
      <Spacer />
    </Container>
  );
}
