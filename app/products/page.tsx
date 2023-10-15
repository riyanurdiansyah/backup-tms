"use client";

import HeroBanner from "@/components/HeroBanner";
import useDimensiLayar from "@/utils/useDimensiLayar";
import React, { useEffect, useState } from "react";
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
import { useFetchUmum } from "@/utils/useFetchData";
import DropdownMenuV2 from "@/components/Hover/DropdownMenuV2";

const ProductPage = () => {
  const [lebarLayar] = useDimensiLayar();
  const [dataNew, setDataNew] = useState<any>(null);
  const [keyword, setKeyword] = useState<any>("");
  const [categoryTerpilih, setCategoryTerpilih] = useState(null);
  const [vehicleData, loadingVehicleData] = useFetchUmum("/api/product");
  const [vehicleTypeData, loadingVehicleTypeData] =
    useFetchUmum("/api/product/type");

  // const listMenuTipe = [
  //   "Light Truck 4 Ban",
  //   "Light Truck 6 Ban",
  //   "Medium Truck",
  //   "Tractor Head",
  //   "Pick Up",
  //   "Pick Up 4x4",
  // ];

  useEffect(() => {
    if (!loadingVehicleData && vehicleData) {
      setDataNew(vehicleData?.data);
    }
  }, [loadingVehicleData]);

  useEffect(() => {
    if (categoryTerpilih !== null || keyword != "") {
      const dataSearch = vehicleData?.data?.filter((type: any) => {
        return type.name
          ?.toLowerCase()
          .includes(keyword?.toString().toLowerCase([]));
      });
      const filteredData = dataSearch?.filter((item: any) => {
        if (categoryTerpilih !== null) {
          return item?.product_type?.product_type_name === categoryTerpilih;
        }
        return true;
      });
      setDataNew(filteredData);
    } else {
      setDataNew(vehicleData?.data);
    }
  }, [categoryTerpilih, keyword]);

  const handleClickDropdown = (e: any) => {
    setCategoryTerpilih(e);
  };

  return (
    <div className="product-page-wrapper">
      <HeroBanner title={"Products"} />
      <SearchContainer>
        <SearchBox>
          <Search>
            <SearchInput
              placeholder="Cari Kendaraan..."
              value={keyword}
              onChange={(e: any) => setKeyword(e.target.value)}
            />
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
                <>
                  {!loadingVehicleTypeData && (
                    <DropdownMenuV2
                      dataMenu={vehicleTypeData?.data}
                      handleClickDropdown={handleClickDropdown}
                    />
                  )}
                </>
              }
            >
              <FilterCategory>
                <p className="text">
                  {categoryTerpilih ? (
                    categoryTerpilih
                  ) : (
                    <>
                      Pilih Kategori <FaSortDown />
                    </>
                  )}
                </p>
              </FilterCategory>
            </Hover>
          </DropdownFilterCategory>
        </SearchBox>
      </SearchContainer>
      <Container className="body-product-page">
        {!loadingVehicleData && vehicleData && (
          <ListProduct>
            {dataNew?.map((item: any, index: number) => {
              return (
                <CardProduct
                  id={item.product_id || index}
                  image={item.image}
                  name={item.name}
                  slug={item.product_id}
                  type={item.product_type.product_type_name}
                  gwv={item.gvw}
                  cabin_to_end={item.cabin}
                  max_power={item.max_power}
                  max_torque={item.max_torque}
                />
              );
            })}
          </ListProduct>
        )}
      </Container>
    </div>
  );
};

const vehicleDummy = [
  {
    id: 1,
    name: "GIGA FVZ N HP",
    slug: "giga-fvz-n-hp",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 2,
    name: "GIGA FVZ N HP",
    slug: "giga-fvz-n-hp",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 3,
    name: "GIGA FVZ N HP",
    slug: "giga-fvz-n-hp",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 4,
    name: "GIGA FVZ N HP",
    slug: "giga-fvz-n-hp",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 5,
    name: "GIGA FVZ N HP",
    slug: "giga-fvz-n-hp",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 6,
    name: "GIGA FVZ N HP",
    slug: "giga-fvz-n-hp",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 7,
    name: "GIGA FVZ N HP",
    slug: "giga-fvz-n-hp",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
  {
    id: 8,
    name: "GIGA FVZ N HP",
    slug: "giga-fvz-n-hp",
    type: "Medium Truck",
    gwv: 26000,
    cabin_to_end: 6545,
    max_power: 285,
    max_torque: 90,
  },
];

export default ProductPage;
