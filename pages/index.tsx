import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
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
} from "@nextui-org/react";
import Content from "@/pages/Content";
import type { NextPage } from "next";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Caros from "../components/carousel";
import { Hero, Typography } from "@web3uikit/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Counter } from "@/components/counter";
import Header from "../components/header";
import Roadmaps from "../components/roadmap";
import Thumbs from "../pages/thumb"
import Tables from "../components/tables"

import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const notify = () =>
    toast.info("Inscrição confirmada com sucesso!", {
      closeButton: false,
      theme: "colored",
    });
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <>
      <Head>
        <title>RareBay: Multichain NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace for Rare NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Spacer />
      <Container
	   css={{ w: "80%", h: "auto",
	  }}
	  >
	   <Button.Group color="warning" light >
          <Button>
            <Link href="/">
              <Text
                css={{
                  fontFamily: "$mono",
                }}
                color="white"
              >
                Home 🏠 /
              </Text>
            </Link>
          </Button>
          <Button>
            <Link href="/buy">
              <Text
                css={{
                  fontFamily: "$mono",
                }}
                color="white"
              >
                {" "}
                Listings ✨ 
              </Text>
            </Link>
          </Button>
        </Button.Group>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >

        </motion.div>
		
      </Container>
	  
      <Container css={{ w: "auto%", h: "400px",
marginBottom: "15%"
	  }}>
	    <hr></hr>
	   <Text
                  h1
                  size={20}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow700 50%",
                  }}
                  weight="bold"
				  
                >
                  TOP COLLECTIONS
                </Text>
        <hr></hr>
        <Thumbs />
      </Container>

      <Container
        css={{
          maxWidth: "100%",
        }}
      >
        <Container css={{ w: "100%" }}></Container>
      </Container>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroBody}>
		  
            <Spacer />
			
            <span className={styles.heroTitleGradient}>
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
              >
			    <motion.div
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 4, scale: 1.3 }}
                transition={{ duration: 10 }}
              >
                <Text
                  h1
                  size={45}
                  css={{
				  fontFamily: "$mono",
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
					borderTopStyle: "solid",
					borderRadius: "16px"
                  }}
                  weight="bold"
                >
                  Welcome to RareBay.
                </Text>
 </motion.div>
                <Text
                  h1
                  size={45}
                  css={{
				  fontFamily: "PT Mono",
                    textGradient: "45deg, $yellow600 -20%, $gray300 50%",
                  }}
                >
                  Home of the Rarest NFTs.
                </Text>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 4, scale: 1.2 }}
                transition={{ duration: 20 }}
              >
                <Text
                  h1
                  size={60}
                  css={{
				  fontFamily: "courier",
                    textGradient: "45deg, $purple600 -20%, $gray300 50%",
                  }}
                  weight="bold"
                >
                  A Digital Museum.
                </Text>
              </motion.div>
            </span>
            <p className={styles.heroSubtitle}>
              <Link className={styles.link} href="/" target="_blank">
                rarebay.io
              </Link>{" "}
              Find Rare NFT Not just your average Bored ape #001 with 10k
              Owners, but something Rare, the kind of art that is priceless.
            </p>
            <div className={styles.heroCtaContainer}>
              <Link className={styles.heroCta} href="/launchpads">
                Get Started
              </Link>
              <Link className={styles.heroCta} href="/whitepaper">
                Whitepaper
              </Link>
            </div>
          </div>
        </div>
		<Container>
		 <Text
                  h1
                  size={20}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow700 50%",
				  borderBottomStyle: "solid",
				  borderRadius: "16px",
				  borderBottomColor: "$yellow600"
                  }}
                  weight="bold"
				  
                >
                  TOP RAREST
                </Text>
		<Tables />
		</Container>
        <Container 
		css={{
		width: "95%"
		}}
		>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
           <Roadmaps />
		  <Spacer />
          <AnimatePresence></AnimatePresence>
        </Container>
      </div>
    </>
  );
}
