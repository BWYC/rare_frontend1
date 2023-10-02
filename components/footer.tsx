import { Container, Text, Spacer, Grid } from "@nextui-org/react";
import { TwitterOutline } from "@web3uikit/icons";
import { Telegram } from "@web3uikit/icons";
import { DiscordOutline } from "@web3uikit/icons";

export default function Footer() {
  return (
    <Container>
      <hr></hr>
      <Spacer />
      <Spacer />
      <Spacer />
      <Container
        gap={-10}
        css={{
          display: "flex",
        }}
      >
        <Grid xs={2}>
          {" "}
          <TwitterOutline fontSize="30px" />
        </Grid>
        <Grid xs={2}>
          <Telegram fontSize="30px" />
        </Grid>
        <Grid xs={2}>
          <DiscordOutline fontSize="30px" />
        </Grid>
      </Container>
      <Spacer />
      <Spacer />
      <Text
        css={{
          fontFamily: "$mono",
        }}
      >
        RareBay ©️ 2023. All rights reserved. #A New Age of NFTs
        <Spacer />
      </Text>
      <Spacer />
      <Spacer /> <Spacer /> <Spacer /> <Spacer /> <Spacer />
    </Container>
  );
}
