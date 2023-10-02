import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import Thumbs from "../pages/thumb"
import {
  Spacer,
  Image,
  Text,
  Card,
  Col,
  Row,
  Button,
  Badge,
} from "@nextui-org/react";
import styles from "@/styles/Profile1.module.css";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Tables from "../components/tables"


export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )


  return (
    <Container maxWidth="lg">

	       <Text
                  h1
                  size={20}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow700 50%",
				  borderBottomStyle: "solid",
				  borderRadius: "16px",
				  borderBottomColor: "$yellow600",
				  textAlign: "center"
                  }}
                  weight="bold"
				  
                >
                  RareBay Launchpads
                </Text>


		 <div ref={sliderRef} className="keen-slider">
		 <Spacer />
        <div className="keen-slider__slide number-slide1">
				<div
          className={styles.coverImage}
          style={{
            backgroundImage:`url("https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg")`,
            backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
          }}
        >
		 </div>
		</div>
		<Spacer />
        <div className="keen-slider__slide number-slide2">
				<div
          className={styles.coverImage}
          style={{
            backgroundImage:`url("https://images.blur.io/_blur-prod/_assets/homepage/covers/kanpai.png?w=1560&format=png")`,
            backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
          }}
        >
		
		 </div>
		        

		</div>
   <Spacer />  
 <div className="keen-slider__slide number-slide2">
 	<div
          className={styles.coverImage}
          style={{
            backgroundImage:`url("https://images.blur.io/_blur-prod/_assets/homepage/covers/azuki-1.png?w=1560&format=png")`,
            backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
          }}
        >
		
		</div>
		
 </div>

		</div>
		 <Spacer />
  <Spacer />


					 <Spacer />
	 	 	 <Text
                  h1
                  size={32}
                  css={{
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow700 50%",
				  textAlign: "center",
				  width: "50%",
				  marginBottom: "-5%"
                  }}
                  weight="bold"
				  
                >
                  Art
				  <hr
				  style={{
				  backgroundColor: "orange"
				  }}
				  ></hr>
                </Text>
				
     <Thumbs />
	 <Spacer />
	 
	 <Spacer />
	 <Spacer />
	 
	 <Spacer />
	 	 <Spacer />
	 <Spacer />
	 <Tables />
	 <Spacer />
	 	 <Text
                  h1
                  size={32}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow700 50%",
				  textAlign: "center",
				  width: "50%",
				  marginBottom: "-5%"
                  }}
                  weight="bold"
				  
                >
                  Memberships
				  <hr
				  style={{
				  backgroundColor: "orange"
				  }}
				  ></hr>
                </Text>
	 <Spacer />
     <Thumbs />
	 <Spacer />
	 <Spacer />
	 	 <Spacer />
	 <Spacer />	 
	 <Spacer />
	 <Tables />
	 <Spacer />
	  <Text
                  h1
                  size={32}
                  css={{
				  marginTop: "2%",
fontFamily: "PT Mono",                  
				  textGradient: "45deg, $blue400 -20%, $yellow700 50%",
				  textAlign: "center",
				  width: "50%",
				  marginBottom: "-5%"
                  }}
                  weight="bold"
				  
                >
                  Collectibles
				    <hr
				  style={{
				  backgroundColor: "orange"
				  }}
				  ></hr>
                </Text>
	 <Spacer />
	 <Spacer />
	 <Thumbs />
	 <Spacer />
	  <Spacer />
	   <Spacer />
	   	  <Spacer />
	   <Spacer />
	   	  <Spacer />
		  <Tables />
	   <Spacer />
    </Container>
  );
}
