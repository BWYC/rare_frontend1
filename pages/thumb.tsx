import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
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
import Drops from "../pages/Drops/drop" 
import Drops2 from "../pages/Drops/drop2" 
import Drops3 from "../pages/Drops/drop3" 
import Drops4 from "../pages/Drops/drop4" 
import Drops5 from "../pages/Drops/drop5" 
import Drops6 from "../pages/Drops/drop6" 
import styles from "@/styles/Home.module.css";


const Thumbs = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <ul
        ref={scrollRef}

        style={{
		  marginTop: "-2%",
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
       
          <Drops />
		  <Drops2 />
		  <Drops3 />
		  <Drops4 />
		  <Drops5 />
		  <Drops6 />
		  <Spacer />
		  <Container></Container>
      </ul>

      

<Button

	  size="xs"
css={{

marginTop: "-20%",
padding: "5%",
position: "inherit",
}}
	 light onClick={() => prev()}><Text weight={"extrabold"} color="warning" size={40}>⩤</Text>
	  </Button>



 <Button
	  size="xs"
css={{
marginTop: "-10%",
marginLeft: "85%",
padding: "5%",
position: "inherit",
}}
	  light onClick={() => next()}><Text weight={"extrabold"} color="warning" size={40}>⩥</Text></Button>

	
    </>
  );
};

export default Thumbs;