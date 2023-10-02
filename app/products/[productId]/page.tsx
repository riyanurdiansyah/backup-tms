"use client";
import React, { FC, useEffect, useState } from "react";
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
import BgHero from "./bg-hero.png";
import Image from "next/image";
import { useFetchUmum } from "@/utils/useFetchData";

const ProductSpec: FC<IProductSpec> = ({ params: { productId } }) => {
  const [specVehicleData, loadingSpecVehicleData] = useFetchUmum(
    `/api/product/${productId}`
  );

  const [groupedSpecifications, setGroupedSpecifications] = useState<{
    [category: string]: Specification[];
  }>({});

  useEffect(() => {
    if (specVehicleData) {
      const groupedData: { [category: string]: Specification[] } = {};

      specVehicleData?.data?.specifications?.forEach((spec: any) => {
        const { category } = spec;
        const cleanCategory = category.trim();
        const categoryWithoutSpaces = cleanCategory.replace(/[\s&-]+/g, "");
        if (!groupedData[categoryWithoutSpaces]) {
          groupedData[categoryWithoutSpaces] = [];
        }
        groupedData[categoryWithoutSpaces].push(spec);
      });

      setGroupedSpecifications(groupedData);
    }
  }, [specVehicleData]);

  return (
    <div className="spec-product-page-warpper">
      <HeaderContent>
        <ImageProduct>
          <Image
            src={specVehicleData?.data?.contents[0]?.image || BgHero}
            alt=""
            width={100}
            height={100}
            loading="lazy"
            layout="responsive"
            objectFit="contain"
          />
        </ImageProduct>
        <TitleProduct>{specVehicleData?.data?.name}</TitleProduct>
      </HeaderContent>
      <ContentSpecProduct>
        <ContentLeft>
          {groupedSpecifications?.Dimensi?.length > 0 && (
            <CardSpecProduct dataSpec={groupedSpecifications?.Dimensi || []} />
          )}
          {groupedSpecifications?.Roda?.length > 0 && (
            <CardSpecProduct dataSpec={groupedSpecifications?.Roda || []} />
          )}
          {groupedSpecifications?.Suspensi?.length > 0 && (
            <CardSpecProduct dataSpec={groupedSpecifications?.Suspensi || []} />
          )}
          {groupedSpecifications?.ComfortConvinience?.length > 0 && (
            <CardSpecProduct
              dataSpec={groupedSpecifications?.ComfortConvinience || []}
            />
          )}
          {groupedSpecifications?.Lampu?.length > 0 && (
            <CardSpecProduct dataSpec={groupedSpecifications?.Lampu || []} />
          )}
          {groupedSpecifications?.SistemKemudi?.length > 0 && (
            <CardSpecProduct
              dataSpec={groupedSpecifications?.SistemKemudi || []}
            />
          )}
          {groupedSpecifications?.LainLain?.length > 0 && (
            <CardSpecProduct dataSpec={groupedSpecifications?.LainLain || []} />
          )}
        </ContentLeft>
        <ContentRight>
          {groupedSpecifications?.Mesin?.length > 0 && (
            <CardSpecProduct dataSpec={groupedSpecifications?.Mesin || []} />
          )}
          {groupedSpecifications?.Berat?.length > 0 && (
            <CardSpecProduct dataSpec={groupedSpecifications?.Berat || []} />
          )}
          {groupedSpecifications?.Transmisi?.length > 0 && (
            <CardSpecProduct
              dataSpec={groupedSpecifications?.Transmisi || []}
            />
          )}
          {groupedSpecifications?.Rem?.length > 0 && (
            <CardSpecProduct dataSpec={groupedSpecifications?.Rem || []} />
          )}
          {groupedSpecifications?.Safety?.length > 0 && (
            <CardSpecProduct dataSpec={groupedSpecifications?.Safety || []} />
          )}
          {groupedSpecifications?.KampasGardan?.length > 0 && (
            <CardSpecProduct
              dataSpec={groupedSpecifications?.KapasitasGardan || []}
            />
          )}
        </ContentRight>
      </ContentSpecProduct>
    </div>
  );
};

const CardSpecProduct: FC<ICardSpecProduct> = ({ dataSpec }) => {
  return (
    <CardContent>
      <TitleCard>{dataSpec[0].category.toUpperCase()}</TitleCard>
      <ListItemCard>
        {dataSpec
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((item: any, i: number) => (
            <ItemCard key={i}>
              <TextItem className="key">{item.title}</TextItem>
              <TextItem className="value">{item.age}</TextItem>
            </ItemCard>
          ))}
      </ListItemCard>
    </CardContent>
  );
};

interface IProductSpec {
  params: {
    productId: string;
  };
}

interface Specification {
  product_spesification_id: string;
  product_id: string;
  category: string;
  title: string;
  satuan: string;
  keterangan: string;
}

interface ICardSpecProduct {
  dataSpec: Specification[];
}

export default ProductSpec;
