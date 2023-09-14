"use client";
import React, { FC } from "react";
import {
  CardContent,
  ContentLeft,
  ContentRight,
  ContentSpecProduct,
  HeaderContent,
  ImageProduct,
  ItemCard,
  ListItemCard,
  TextItem,
  TitleCard,
  TitleProduct,
} from "./Styled";
import BgHero from "../bg-hero.png";
import Image from "next/image";

const ProductSpec: FC<IProductSpec> = ({ params: { productName } }) => {
  return (
    <div className="spec-product-page-warpper">
      <HeaderContent>
        <ImageProduct>
          <Image
            src={BgHero}
            alt=""
            loading="lazy"
            layout="responsive"
            objectFit="contain"
          />
        </ImageProduct>
        <TitleProduct>GIGA-FTR P</TitleProduct>
      </HeaderContent>
      <ContentSpecProduct>
        <ContentLeft>
          <CardContent id="dimensi">
            <TitleCard>DIMENSI</TitleCard>
            <ListItemCard>
              {Array(10)
                .fill("")
                .map((_: any, i: number) => (
                  <ItemCard key={i}>
                    <TextItem className="key">Panjang</TextItem>
                    <TextItem className="value">10.000</TextItem>
                    <TextItem className="satuan">mm</TextItem>
                  </ItemCard>
                ))}
            </ListItemCard>
          </CardContent>
          <CardContent id="roda">
            <TitleCard>RODA</TitleCard>
            <ListItemCard>
              {Array(10)
                .fill("")
                .map((_: any, i: number) => (
                  <ItemCard key={i}>
                    <TextItem className="key">Panjang</TextItem>
                    <TextItem className="value">10.000</TextItem>
                  </ItemCard>
                ))}
            </ListItemCard>
          </CardContent>
          <CardContent id="suspensi">
            <TitleCard>SUSPENSI</TitleCard>
            <ListItemCard>
              {Array(10)
                .fill("")
                .map((_: any, i: number) => (
                  <ItemCard key={i}>
                    <TextItem className="key">Panjang</TextItem>
                    <TextItem className="value">10.000</TextItem>
                  </ItemCard>
                ))}
            </ListItemCard>
          </CardContent>
          <CardContent id="lain-lain">
            <TitleCard>LAIN_LAIN</TitleCard>
            <ListItemCard>
              {Array(10)
                .fill("")
                .map((_: any, i: number) => (
                  <ItemCard key={i}>
                    <TextItem className="key">Panjang</TextItem>
                    <TextItem className="value">10.000</TextItem>
                    <TextItem className="satuan">mm</TextItem>
                  </ItemCard>
                ))}
            </ListItemCard>
          </CardContent>
        </ContentLeft>
        <ContentRight>
          <CardContent id="mesin">
            <TitleCard>MESIN</TitleCard>
            <ListItemCard>
              {Array(10)
                .fill("")
                .map((_: any, i: number) => (
                  <ItemCard key={i}>
                    <TextItem className="key">Panjang</TextItem>
                    <TextItem className="value">10.000</TextItem>
                    <TextItem className="satuan">mm</TextItem>
                  </ItemCard>
                ))}
            </ListItemCard>
          </CardContent>
          <CardContent id="berat">
            <TitleCard>BERAT</TitleCard>
            <ListItemCard>
              {Array(10)
                .fill("")
                .map((_: any, i: number) => (
                  <ItemCard key={i}>
                    <TextItem className="key">Panjang</TextItem>
                    <TextItem className="value">10.000</TextItem>
                    <TextItem className="satuan">mm</TextItem>
                  </ItemCard>
                ))}
            </ListItemCard>
          </CardContent>
          <CardContent id="transmisi">
            <TitleCard>TRANSMISI</TitleCard>
            <ListItemCard>
              {Array(10)
                .fill("")
                .map((_: any, i: number) => (
                  <ItemCard key={i}>
                    <TextItem className="key">Panjang</TextItem>
                    <TextItem className="value">10.000</TextItem>
                  </ItemCard>
                ))}
            </ListItemCard>
          </CardContent>
          <CardContent id="rem">
            <TitleCard>REM</TitleCard>
            <ListItemCard>
              {Array(10)
                .fill("")
                .map((_: any, i: number) => (
                  <ItemCard key={i}>
                    <TextItem className="key">Panjang</TextItem>
                    <TextItem className="value">10.000</TextItem>
                  </ItemCard>
                ))}
            </ListItemCard>
          </CardContent>
          <CardContent id="kapasitas-garda">
            <TitleCard>KAPASITAS GARDA</TitleCard>
            <ListItemCard>
              {Array(10)
                .fill("")
                .map((_: any, i: number) => (
                  <ItemCard key={i}>
                    <TextItem className="key">Panjang</TextItem>
                    <TextItem className="value">10.000</TextItem>
                    <TextItem className="satuan">mm</TextItem>
                  </ItemCard>
                ))}
            </ListItemCard>
          </CardContent>
        </ContentRight>
      </ContentSpecProduct>
    </div>
  );
};

interface IProductSpec {
  params: {
    productName: string;
  };
}

export default ProductSpec;
