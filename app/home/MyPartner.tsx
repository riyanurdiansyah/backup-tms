"use client";
import React from "react";
import {
  CardMyPartner,
  ItemMyPartner,
  LeftContentCard,
  ListMyPartner,
  MyPartnerContainer,
  MyPartnerTitle,
  MyPartnerWrapper,
  RightContentCard,
  TextContentRight,
} from "./Styles";
import Flickity from "react-flickity-component";
import Image from "next/image";
// import ImgPartner1 from "./assets/img-partner-1.png";
// import ImgPartner2 from "./assets/img-partner-2.png";
// import ImgPartner3 from "./assets/img-partner-3.png";
// import ImgPartner4 from "./assets/img-partner-4.png";
import { useFetchUmum } from "@/utils/useFetchData";
// import ImageSleder1 from "./assets/img-slider-1.png";
// import ImageSleder2 from "./assets/img-slider-2.png";

const heightImgPartner = 60;

const MyPartner = () => {
  const [dataSlider, loadingDataSlider] = useFetchUmum<any>("/api/partner");
  return (
    <MyPartnerWrapper>
      <MyPartnerContainer>
        <MyPartnerTitle>My Partner</MyPartnerTitle>
        <ListMyPartner>
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
                  <CardMyPartner>
                    <LeftContentCard>
                      <Image
                        src={item.video}
                        alt=""
                        width={100}
                        height={100}
                        loading="lazy"
                        layout="responsive"
                        objectFit="contain"
                      />
                    </LeftContentCard>
                    <RightContentCard>
                      <TextContentRight>{item.nama}</TextContentRight>
                    </RightContentCard>
                  </CardMyPartner>
                );
              })}
          </Flickity>
          {/* <ItemMyPartner>
            <Image
              src={ImgPartner1}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </ItemMyPartner>
          <ItemMyPartner>
            <Image
              src={ImgPartner2}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </ItemMyPartner>
          <ItemMyPartner>
            <Image
              src={ImgPartner3}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </ItemMyPartner>
          <ItemMyPartner>
            {" "}
            <Image
              src={ImgPartner4}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </ItemMyPartner> */}
        </ListMyPartner>
      </MyPartnerContainer>
    </MyPartnerWrapper>
  );
};

export default MyPartner;
