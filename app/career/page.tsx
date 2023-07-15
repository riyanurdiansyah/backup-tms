"use client";
import HeroBanner from "@/components/HeroBanner";
import React from "react";
import { Container } from "../GlobalStyles";
import CardJob from "@/components/Card/CardJob";
import {
  SearchContainer,
  FilterCategory,
  FilterRank,
  ListJob,
  SearchBox,
  SearchInput,
  Search,
  DropdownFilterRank,
  DropdownFilterCategory,
} from "./Styled";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Hover from "@/components/Hover";
import DropdownMenu from "@/components/Hover/DropdownMenu";

const CareerPage = () => {
  const jobDummy = [
    {
      id: 1,
      title: "Admin Staff (Bandung Area)",
      category: "Sistem Informasi",
      rank: "Lulusan Baru",
      expired: "10 Agustus 2023",
    },
    {
      id: 2,
      title: "Admin Staff (Bandung Area)",
      category: "Sistem Informasi",
      rank: "Lulusan Baru",
      expired: "10 Agustus 2023",
    },
    {
      id: 3,
      title: "Admin Staff (Bandung Area)",
      category: "Sistem Informasi",
      rank: "Lulusan Baru",
      expired: "10 Agustus 2023",
    },
    {
      id: 4,
      title: "Admin Staff (Bandung Area)",
      category: "Sistem Informasi",
      rank: "Lulusan Baru",
      expired: "10 Agustus 2023",
    },
  ];
  const listMenuFungsi = [
    "Akutansi",
    "Sistem Informasi",
    "Informatika",
    "Teknik Mesin",
  ];
  const listMenuJenjang = ["Lulusan Baru", "Profesional"];

  const handleClickDropdown = (e: any) => {
    console.log("menu", e);
  };

  return (
    <div className="career-page-wrapper">
      <HeroBanner title={"Career"} />
      <SearchContainer>
        <SearchBox>
          <Search>
            <SearchInput placeholder="Cari lowongan..." />
            <p>
              <FiSearch />
            </p>
          </Search>
          <DropdownFilterCategory>
            <Hover
              topHover={40}
              kananHover={0}
              kiriHover="auto"
              onHover={
                <DropdownMenu
                  dataMenu={listMenuJenjang}
                  handleClickDropdown={handleClickDropdown}
                />
              }
            >
              <FilterCategory>
                <p className="text">
                  Pilih Fungsi <FaSortDown />
                </p>
              </FilterCategory>
            </Hover>
          </DropdownFilterCategory>
          <DropdownFilterRank>
            <Hover
              topHover={45}
              kananHover={0}
              kiriHover="auto"
              onHover={
                <DropdownMenu
                  dataMenu={listMenuFungsi}
                  handleClickDropdown={handleClickDropdown}
                />
              }
            >
              <FilterRank>
                <p className="text">
                  Pilih Jenjang <FaSortDown />
                </p>
              </FilterRank>
            </Hover>
          </DropdownFilterRank>
        </SearchBox>
      </SearchContainer>
      <Container className="body-career-page">
        <ListJob>
          {jobDummy?.map((item: any, index: number) => {
            return (
              <CardJob
                id={item.id || index}
                title={item.title}
                category={item.category}
                rank={item.rank}
                expired={item.expired}
              />
            );
          })}
        </ListJob>
      </Container>
    </div>
  );
};

export default CareerPage;
