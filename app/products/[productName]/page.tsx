"use client";
import React, { FC } from "react";
import {
  BtnItem,
  ButtonGroup,
  GalleryContent,
  HeroContent,
  ListGallery,
  TitleGallery,
} from "./Styled";
import Image from "next/image";
import BgHero from "./bg-hero.png";
import Flickity from "react-flickity-component";

import ImageGallery1 from "./img-gallery-1.png";
import ImageGallery2 from "./img-gallery-2.png";
import ImageGallery3 from "./img-gallery-3.png";

const ProductDetail: FC<IProductDetail> = ({ params: { productName } }) => {
  return (
    <div className="detail-product-page-wrapper">
      <HeroContent>
        <Image
          src={BgHero}
          alt=""
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
      </HeroContent>
      <ButtonGroup>
        <BtnItem>Find Dealer</BtnItem>
        <BtnItem>Download Brochure</BtnItem>
        <BtnItem>Consultation</BtnItem>
      </ButtonGroup>
      <GalleryContent>
        <TitleGallery>Gallery</TitleGallery>
        <ListGallery>
          <Flickity
            className={"carousel-list-gallery"}
            options={{
              autoPlay: true,
              pageDots: true,
              draggable: true,
            }}
          >
            <Image
              src={ImageGallery1}
              alt=""
              loading="lazy"
              layout="responsive"
              objectFit="contain"
            />
            <Image
              src={ImageGallery2}
              alt=""
              loading="lazy"
              layout="responsive"
              objectFit="contain"
            />
            <Image
              src={ImageGallery3}
              alt=""
              loading="lazy"
              layout="responsive"
              objectFit="contain"
            />
          </Flickity>
        </ListGallery>
      </GalleryContent>
    </div>
  );
};

interface IProductDetail {
  params: {
    productName: string;
  };
}

export default ProductDetail;
