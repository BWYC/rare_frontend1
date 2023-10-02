import React from "react";
import { Text, Button, Grid, Row, Spacer } from "@nextui-org/react";
import {TokenColored} from '@web3uikit/icons'


export default function() {
  return (
    <Grid.Container
      css={{
        borderRadius: "14px",
        padding: "0.75rem",
        maxWidth: "330px",
      }}
    >
      <Row justify="center" align="center">
        <Text
  size={16}
                  css={{
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue700 -20%, $gray800 50%",
				  textAlign: "center"
                  }}
                  weight="bold"
				  transform="uppercase"
>Otherside Koda⩩</Text>
      </Row>
      <Row>
	  <Text color="success" size={12}>TOTAL</Text><Spacer />
        <Text
  size={14}
                  css={{
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue700 -20%, $gray800 50%",
				  textAlign: "center"
                  }}
                  weight="bold"
> VOLUME: 0.0 CORE 
        </Text>
		
      </Row>
	        <Row>
	  <Text color="error" size={12}>7D ↝+</Text> <Spacer />
        <Text
  size={14}
                  css={{
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue700 -20%, $gray800 50%",
				  textAlign: "center"
                  }}
                  weight="bold"
> VOLUME: 0.0 CORE 
        </Text>
		
      </Row>
	    <Row>
        <Text
  size={14}
                  css={{
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue700 -20%, $gray800 50%",
				  textAlign: "center"
                  }}
                  weight="bold"
>
FLOOR: 0.0 CORE <TokenColored fontSize='15px'/>

        </Text>
		
      </Row>
	  <Spacer />
      <Grid.Container justify="space-between" alignContent="center">
        <Grid>
          <Button color="warning" size="sm" ghost>
            Buy
          </Button>
		  <Spacer />
        </Grid>
        <Grid>
          <Button size="sm" shadow color="warning">
            View
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};