import {
  Grid,
  Card,
  Text,
  Spacer,
  Badge,
  Link,
  Collapse,
  Row,
  Container,
} from "@nextui-org/react";
import { Roadmap } from "@web3uikit/icons";

export default function Roadmaps() {
  return (
    <>
      <Spacer />
      <Container justify="centre"
	  css={{
		  width: "100%"
		  
	  }}
	  
	  >
        <Spacer />
        <Text
          weight="extrabold"
          size={25}
          css={{
            textGradient: "50deg, $green900 -20%, $yellow600 100%",
            textAlign: "center",
            m: 0,
            fontFamily: "$mono",
          }}
        >
          <Roadmap fontSize="20px" /> RareBay Roadmap
        </Text>
        <hr></hr>
        <Grid xs={3}></Grid>
        <Grid xs={5} alignItems="centre"></Grid>

        <Grid xs={6}></Grid>
        <Collapse.Group>
          <Collapse
            css={{
              padding: "1%",
              textAlign: "centre",
              fontFamily: "$mono",
            }}
            title="PHASE 1: (Community)"
          >
            <Grid.Container
              justify="center"
              css={{
                width: "100%",
              }}
            >
              <Grid xs={0.8}></Grid>

              <Grid xs={11}>
                <Card
                  variant="bordered"
                  enableShadow
                  isHoverable
                  isPressable
                  justify="centre"
                  color="warning"

                  css={{
					  background: "transparent",
					  				  backdropFilter: "blur(10px)",
                    width: "95%",
                    Height: "95%",
                    padding: "7%",
                  }}
                >
                  <Card.Header></Card.Header>
                  <Card.Body>
                    <Grid xs={12} alignItems="center">
                      <Text
                        css={{
                          textAlign: "centre",
                          fontFamily: "$mono",
                        }}
                        h4
                      >
                        Phase I
                      </Text>
                    </Grid>
                    <hr></hr>
                    <Grid.Container gap={1.5}>
                      <Grid xs={12} alignItems="center">
                        <Badge enableShadow color="success" variant="dot" />
                        <Text
size={14}
                          css={{ ml: "$2", fontFamily: "$mono" }}
                        >
                          2023 June - Dec Community Development and awarness
                        </Text>
                      </Grid>
                      <Grid xs={12} alignItems="center">
                        <Badge color="warning" enableShadow variant="dot" />
                        <Text
size={14}
                          css={{ ml: "$2", fontFamily: "$mono" }}
                        >
                          Listing $RARE on CoinMarketCap, CoinGecko, Dextools
                        </Text>
                      </Grid>
                      <Grid xs={12} alignItems="center">
                        <Badge color="warning" enableShadow variant="dot" />
                        <Text
size={14}
                          css={{ ml: "$2", fontFamily: "$mono" }}
                        >
                          Community Building and Holder Privilages
                        </Text>
                      </Grid>
                      <Grid xs={12} alignItems="center">
                        <Badge color="warning" enableShadow variant="dot" />
                        <Text
size={14}
                          css={{ ml: "$2", fontFamily: "$mono" }}
                        >
                          Partnerships with other stakeholders
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid xs={2}></Grid>
            </Grid.Container>
          </Collapse>
          <Collapse
            title="PHASE 2: (Value)"
            css={{
              padding: "1%",
              textAlign: "centre",
              fontFamily: "$mono",
            }}
          >
            <Grid.Container
              justify="center"
              css={{
                width: "100%",
              }}
            >
              <Grid xs={0.8}></Grid>
              <Grid xs={11}>
                <Card
                  variant="bordered"
                  enableShadow
                  isHoverable
                  isPressable
                  justify="centre"
                  color="warning"
                  css={{
					   background: "transparent",
					  				  backdropFilter: "blur(10px)",
                    width: "95%",
                    Height: "95%",
                    padding: "7%",
                  }}
                >
                  <Card.Header></Card.Header>
                  <Card.Body>
                    <Grid xs={12} alignItems="center">
                      <Text
                        css={{
                          textAlign: "centre",
                          fontFamily: "$mono",
                        }}
                        h4
                      >
                        Phase II
                      </Text>
                    </Grid>
                    <hr></hr>
                    <Grid.Container gap={1.5}>
                      <Grid xs={12} alignItems="center">
                        <Badge color="warning" enableShadow variant="dot" />
                        <Text
size={14}
                          css={{ ml: "$2", fontFamily: "$mono" }}
                        >
                          Allow creators to request launch drops
                        </Text>
                      </Grid>
                      <Grid xs={12} alignItems="center">
                        <Badge color="warning" enableShadow variant="dot" />
                        <Text
size={14}
                          css={{ ml: "$2", fontFamily: "$mono" }}
                        >
                          RARE Android, IOS Application, Wallet Transactions
                        </Text>
                      </Grid>
                      <Grid xs={12} alignItems="center">
                        <Badge color="warning" enableShadow variant="dot" />
                        <Text
size={14}
                          css={{ ml: "$2", fontFamily: "$mono" }}
                        >
                          Holder Privilages, Early Access to Tools
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid xs={2}></Grid>
            </Grid.Container>
          </Collapse>
          <Collapse
            title="PHASE 3: (Staking)"
            css={{
              padding: "1%",
              textAlign: "centre",
              fontFamily: "$mono",
            }}
          >
            <Grid.Container
              justify="center"
              css={{
                width: "100%",
              }}
            >
              <Grid xs={0.8}></Grid>
              <Grid xs={11}>
                <Card
                  variant="bordered"
                  enableShadow
                  isHoverable
                  isPressable
                  justify="centre"
                  color="warning"
                  css={{
					   background: "transparent",
					  				  backdropFilter: "blur(10px)",
                    width: "95%",
                    Height: "95%",
                    padding: "7%",
                  }}
                >
                  <Card.Header></Card.Header>
                  <Card.Body>
                    <Grid xs={12} alignItems="center">
                      <Text
                        css={{
                          textAlign: "centre",
                          fontFamily: "$mono",
                        }}
                        h4
                      >
                        Phase III
                      </Text>
                    </Grid>
                    <hr></hr>
                    <Grid.Container gap={1.5}>
                      <Grid xs={8} xl={8} alignItems="center">
                        <Badge enableShadow color="warning" variant="dot" />
                        <Text
size={14}
                          css={{ ml: "$2", fontFamily: "$mono" }}
                        >
                          Rarity increament by staking
                        </Text>
                      </Grid>
                      <Grid xs={12} alignItems="center">
                        <Badge color="warning" enableShadow variant="dot" />
                        <Text
                          xs={12}
                          xl={18}
                          css={{ ml: "$2", fontFamily: "$mono" }}
                        >
                          Token Owner Can stake NFTs
                        </Text>
                      </Grid>
                      <Grid xs={12} alignItems="center">
                        <Badge color="warning" enableShadow variant="dot" />
                        <Text
size={14}
                          css={{ ml: "$2", fontFamily: "$mono" }}
                        >
                          RareBay NFT Marketplace Membership for Token Holders
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid xs={2}></Grid>
            </Grid.Container>
          </Collapse>
        </Collapse.Group>
      </Container>

      <Spacer />

      <Spacer />

      <Spacer />
      <Spacer />
    </>
  );
}
