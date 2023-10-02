import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../util/utils";

import "./counter.module.css";
import {
  Spacer,
  Image,
  Container,
  Text,
  Card,
  Col,
  Row,
  Button,
  Badge,
Grid
} from "@nextui-org/react";



export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);


  return (
  <Container
  css={{
  width: "60%"
  }}
  >
  <Grid.Container >
  <Grid xs={3}>
 <Card
	variant="bordered"
  css={{
  width: "65px",
  height: "65px",
  background: "transparent",
  backdropFilter: "blur(10px)"
  }}
  >
<Text
  size={14}
 weight={"extrabold"}
 css={{
            fontFamily: "PT Mono",
            textAlign: "center",
            position: "sticky",
			padding: "20%",
			marginRight: "2%",
          }}
 >{String(timeLeft.days).padStart(2, "0")}<br></br>
 DAYS
 </Text>
  </Card>
  </Grid>
  <Grid xs={3}>
 <Card
	variant="bordered"
  css={{
  width: "65px",
  height: "65px",
  background: "transparent",
  backdropFilter: "blur(10px)"
  }}
  >
 <Text
  size={14}
 weight={"extrabold"}
 css={{
            fontFamily: "PT Mono",
            textAlign: "center",
            position: "sticky",
			padding: "20%",
			marginRight: "2%",
          }}
 >{String(timeLeft.hours).padStart(2, "0")}<br></br>
 HRS
 </Text>
  </Card>
  </Grid>
  <Grid xs={3}>
  <Card
	variant="bordered"
  css={{
  width: "65px",
  height: "65px",
  background: "transparent",
  backdropFilter: "blur(10px)"
  }}
  >
<Text
  size={14}
 weight={"extrabold"}
 css={{
            fontFamily: "PT Mono",
            textAlign: "center",
            position: "sticky",
			padding: "20%",
			marginRight: "2%",
          }}
 >{String(timeLeft.minutes).padStart(2, "0")}<br></br>
 MINS
 </Text>
  </Card>
  </Grid>
    <Grid xs={3}>
    <Card
	variant="bordered"
  css={{
  width: "65px",
  height: "65px",
  background: "transparent",
  backdropFilter: "blur(10px)",
  
  
  }}
  >
<Text
  size={14}
 weight={"extrabold"}
 css={{
            fontFamily: "PT Mono",
            textAlign: "center",
            position: "sticky",
			padding: "20%",
			marginRight: "2%",
          }}
 >{String(timeLeft.seconds).padStart(2, "0")}<br></br>
 SECS
 </Text>
  </Card>
  </Grid>
  </Grid.Container>
  </Container>
  );
};
