import React from "react";
import {
  CardProduct,
  ListProduct,
  ProductContainer,
  ProductTitle,
  ProductWrapper,
  TitleCardProduct,
} from "./Styles";
import ImageCar1 from "./assets/img-car-1.png";
import ImageCar2 from "./assets/img-car-2.png";
import Image from "next/image";

const Product = () => {
  return (
    <ProductWrapper>
      <ProductContainer>
        <ProductTitle>Product</ProductTitle>
        <ListProduct>
          <CardProduct>
            <Image src={ImageCar1} alt="" />
            <TitleCardProduct>GIGA</TitleCardProduct>
          </CardProduct>
          <CardProduct>
            <Image src={ImageCar2} alt="" />
            <TitleCardProduct>TRAGA</TitleCardProduct>
          </CardProduct>
          <CardProduct>
            <Image src={ImageCar1} alt="" />
            <TitleCardProduct>ELF</TitleCardProduct>
          </CardProduct>
        </ListProduct>
      </ProductContainer>
    </ProductWrapper>
  );
};

export default Product;
