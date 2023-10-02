import * as React from "react";
import "./carso.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
import { Dapps } from "@web3uikit/icons";
import { Cat } from "@web3uikit/icons";
import { UserTeam } from "@web3uikit/icons";
import { Eye } from "@web3uikit/icons";
import Drops from "../pages/Drops/drop" 

export default function Caros() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
<Grid.Container gap={1}>
<Grid ><Drops /></Grid>
<Grid ><Drops /></Grid>
</Grid.Container>
        </div>

        <div className="keen-slider__slide number-slide2">
<Grid.Container gap={1}>
<Grid ><Drops /></Grid>
<Grid ><Drops /></Grid>
</Grid.Container>
        </div>

        <div className="keen-slider__slide number-slide3">
     <Grid.Container gap={1}>
<Grid ><Drops /></Grid>
<Grid ><Drops /></Grid>
</Grid.Container>
        </div>

        <div className="keen-slider__slide number-slide4">
       <Grid.Container gap={1}>
<Grid ><Drops /></Grid>
<Grid ><Drops /></Grid>
</Grid.Container>
        </div>
      </div>
    </>
  );
}
