"use client";
import React from "react";
import {
  CardProduct,
  HeadCardProduct,
  ImgBG,
  ListProduct,
  ProductContainer,
  ProductTitle,
  ProductWrapper,
  TitleCardProduct,
} from "./Styles";
import ImageCar1 from "./assets/img-car-1.png";
import ImageCar2 from "./assets/img-car-2.png";
import Image from "next/image";
import BgCardProduct1 from "./assets/bg-product-1.jpg";
import BgCardProduct2 from "./assets/bg-product-2.jpg";
import BgCardProduct3 from "./assets/bg-product-3.jpg";
import Flickity from "react-flickity-component";

const Product = () => {
  return (
    <ProductWrapper>
      <ProductContainer>
        <ProductTitle>Our Products</ProductTitle>
        <ListProduct>
          <Flickity
            className={"carousel-list-product"}
            options={{
              cellAlign: "left",
              contain: true,
              groupCells: true,
              pageDots: false,
              draggable: true,
            }}
          >
            <CardProduct>
              <HeadCardProduct>
                <Image
                  src={ImageCar2}
                  alt=""
                  layout="responsive"
                  objectFit="contain"
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    maxWidth: "90%",
                  }}
                />
                <ImgBG source={BgCardProduct1} />
              </HeadCardProduct>
              <TitleCardProduct>GIGA</TitleCardProduct>
            </CardProduct>
            <CardProduct>
              <HeadCardProduct>
                <Image
                  src={ImageCar1}
                  alt=""
                  layout="responsive"
                  objectFit="contain"
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    maxWidth: "90%",
                  }}
                />
                <ImgBG source={BgCardProduct2} />
              </HeadCardProduct>
              <TitleCardProduct>TRAGA</TitleCardProduct>
            </CardProduct>
            <CardProduct>
              <HeadCardProduct>
                <Image
                  src={ImageCar2}
                  alt=""
                  layout="responsive"
                  objectFit="contain"
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    maxWidth: "90%",
                  }}
                />
                <ImgBG source={BgCardProduct3} />
              </HeadCardProduct>
              <TitleCardProduct>ELF</TitleCardProduct>
            </CardProduct>
          </Flickity>
        </ListProduct>
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
