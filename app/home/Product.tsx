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
import ImageCar3 from "./assets/img-car-3.png";
import Image from "next/image";
import BgCardProduct1 from "./assets/bg-product-1.jpg";
import BgCardProduct2 from "./assets/bg-product-2.jpg";
import BgCardProduct3 from "./assets/bg-product-3.jpg";
import Flickity from "react-flickity-component";
import { useFetchUmum } from "@/utils/useFetchData";
import { useRouter } from "next/navigation";

const Product = () => {
  const router = useRouter();
  const [vehicleData, loadingVehicleData] = useFetchUmum("/api/product");

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
            {!loadingVehicleData &&
              vehicleData?.data?.map((item: any, index: number) => {
                return (
                  <CardProduct
                    key={index}
                    onClick={() => router.push(`/products/${item.product_id}`)}
                  >
                    <HeadCardProduct>
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="contain"
                        style={{
                          position: "absolute",
                          bottom: "-10px",
                          maxWidth: "90%",
                        }}
                      />
                      <ImgBG source={{ src: item.image_bg }} />
                    </HeadCardProduct>
                    <TitleCardProduct>{item.name}</TitleCardProduct>
                  </CardProduct>
                );
              })}
          </Flickity>
        </ListProduct>
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
