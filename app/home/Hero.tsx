"use client";
import React from "react";
import { HeroWrapper } from "./Styles";
import Flickity from "react-flickity-component";
import Image from "next/image";
import { useFetchUmum } from "@/utils/useFetchData";

const Hero = () => {
  const [dataSlider, loadingDataSlider] = useFetchUmum<any>("/api/slider");
  console.log(dataSlider);
  return (
    <HeroWrapper>
      <Flickity
        className={"carousel-list-hero"}
        options={{
          autoPlay: true,
          pageDots: true,
          draggable: true,
        }}
      >
        {!loadingDataSlider &&
          dataSlider?.data?.map((item: any, key: number) => {
            return (
              <Image
                src={item.image}
                alt=""
                width={100}
                height={100}
                loading="lazy"
                layout="responsive"
                objectFit="contain"
              />
            );
          })}
      </Flickity>
    </HeroWrapper>
  );
};

export default Hero;
