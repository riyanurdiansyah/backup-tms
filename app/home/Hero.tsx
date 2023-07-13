"use client";
import React from "react";
import { HeroWrapper } from "./Styles";
import Flickity from "react-flickity-component";
import Image from "next/image";

import ImageSleder1 from "./assets/img-slider1.webp";

const Hero = () => {
  return (
    <HeroWrapper>
      <Flickity
        className={"carousel"}
        options={{
          autoPlay: true,
        }}
      >
        <Image
          src={ImageSleder1}
          alt=""
          layout="responsive"
          objectFit="contain"
        />
        <Image
          src={ImageSleder1}
          alt=""
          layout="responsive"
          objectFit="contain"
        />
        <Image
          src={ImageSleder1}
          alt=""
          layout="responsive"
          objectFit="contain"
        />
      </Flickity>
    </HeroWrapper>
  );
};

export default Hero;
