import React from "react";
import { Text, Button, Grid, Row, Spacer } from "@nextui-org/react";
import {TokenColored} from '@web3uikit/icons'
import Link from "next/link"


export default function() {
  return (
    <Grid.Container
      css={{
        borderRadius: "14px",
        padding: "0.75rem",
        maxWidth: "250px",
		miWidth: "250px",
      }}
    >
      <Row justify="center" align="center">
        <Text
  size={16}
                  css={{
fontFamily: "courier",                  
				  textGradient: "45deg, $blue700 -20%, $gray300 50%",
				 
                  }}
                  weight="bold"
				  transform="uppercase"
>Clever Girls Stats⩩</Text>
      </Row>
      <Row>
	  <Text 
	    css={{
fontFamily: "courier",                  
				  textAlign: "center"
                  }}
	  color="success" size={12}>TOTAL</Text><Spacer />
        <Text
  size={14}
                  css={{
fontFamily: "courier",                  
				  textGradient: "45deg, $yellow800 -20%, $gray800 100%",
				  textAlign: "center"
                  }}
                  weight="bold"
> VOLUME: 0.0 
        </Text>
		
      </Row>
	        <Row>
	  <Text color="error" size={12}>7D ↝+</Text> <Spacer />
        <Text
  size={14}
                  css={{
fontFamily: "courier new",                  
				 textGradient: "45deg, $green700 -20%, $gray800 100%",
				  textAlign: "center"
                  }}
                  weight="bold"
> VOLUME: 0.0
        </Text>
		
      </Row>
	    <Row>
        <Text
  size={14}
                  css={{
fontFamily: "courier",                  
				  
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
           <Button size="sm" shadow color="warning"
		  ghost
		  >
		  <Link href="/Creator/0xd9F40fE72Ebaa97c4A0E5d2c63B4B05218632242">
             <Text 
			 weight="extrabold"
			 color="white"
			 size={18}
	    css={{
fontFamily: "courier",            
                  }}
>VIEW</Text>
			</Link>
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};