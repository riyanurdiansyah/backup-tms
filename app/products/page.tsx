"use client";

import HeroBanner from "@/components/HeroBanner";
import useDimensiLayar from "@/utils/useDimensiLayar";
import React from "react";
import {
  DropdownFilterCategory,
  FilterCategory,
  ListProduct,
  Search,
  SearchBox,
  SearchContainer,
  SearchInput,
} from "./Styled";
import { FiSearch } from "react-icons/fi";
import Hover from "@/components/Hover";
import DropdownMenu from "@/components/Hover/DropdownMenu";
import { FaSortDown } from "react-icons/fa";
import { Container } from "@/styles/styledComponents/GlobalStyled";
import CardProduct from "@/components/Card/CardProduct";

const ProductPage = () => {
  const [lebarLayar] = useDimensiLayar();
  const listMenuTipe = [
    "Light Truck 4 Ban",
    "Light Truck 6 Ban",
    "Medium Truck",
    "Tractor Head",
    "Pick Up",
    "Pick Up 4x4",
  ];

  const handleClickDropdown = (e: any) => {
    console.log("menu", e);
  };

  return (
    <div className="product-page-wrapper">
      <HeroBanner title={"Products"} />
      <SearchContainer>
        <SearchBox>
          <Search>
            <SearchInput placeholder="Cari Kendaraan..." />
            <p>
              <FiSearch />
            </p>
          </Search>
          <DropdownFilterCategory>
            <Hover
              paddingTop={5}
              topHover={40}
              kananHover={lebarLayar > 576 ? 0 : "auto"}
              kiriHover={lebarLayar > 576 ? "auto" : 0}
              onHover={
                <DropdownMenu
                  dataMenu={listMenuTipe}
                  handleClickDropdown={handleClickDropdown}
                />
              }
            >
              <FilterCategory>
                <p className="text">
                  Pilih Kategori <FaSortDown />
                </p>
              </FilterCategory>
            </Hover>
          </DropdownFilterCategory>
        </SearchBox>
      </SearchContainer>
      <Container className="body-product-page">
        <ListProduct>
          {vehicleDummy?.map((item: any, index: number) => {
            return (
              <CardProduct
                id={item.id || index}
                name={item.name}
                type={item.type}
                gwv={item.gwv}
                cabin_to_end={item.cabin_to_end}
                max_power={item.max_power}
                max_torque={item.max_torque}
              />
            );
          })}
        </ListProduct>
      </Container>
    </div>
  );
};

const vehicleDummy = [
  {
    id: 1,
    name: "GIGA FVZ N HP",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 1,
    name: "GIGA FVZ N HP",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 1,
    name: "GIGA FVZ N HP",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 1,
    name: "GIGA FVZ N HP",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 1,
    name: "GIGA FVZ N HP",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 1,
    name: "GIGA FVZ N HP",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 1,
    name: "GIGA FVZ N HP",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 1,
    name: "GIGA FVZ N HP",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
];

export default ProductPage;
