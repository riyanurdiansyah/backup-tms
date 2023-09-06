"use client";
import HeroBanner from "@/components/HeroBanner";
import React from "react";
import { Container } from "../../styles/styledComponents/GlobalStyled";
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
import useDimensiLayar from "@/utils/useDimensiLayar";
import { useFetchUmum } from "@/utils/useFetchData";

const CareerPage = () => {
  const [lebarLayar] = useDimensiLayar();
  const [careerData, loadingCareerData] = useFetchUmum("/api/career");
  // const jobDummy = [
  //   {
  //     id: 1,
  //     title: "Admin Staff (Bandung Area)",
  //     category: "Sistem Informasi",
  //     rank: "Lulusan Baru",
  //     expired: "10 Agustus 2023",
  //   },
  //   {
  //     id: 2,
  //     title: "Admin Staff (Bandung Area)",
  //     category: "Sistem Informasi",
  //     rank: "Lulusan Baru",
  //     expired: "10 Agustus 2023",
  //   },
  //   {
  //     id: 3,
  //     title: "Admin Staff (Bandung Area)",
  //     category: "Sistem Informasi",
  //     rank: "Lulusan Baru",
  //     expired: "10 Agustus 2023",
  //   },
  //   {
  //     id: 4,
  //     title: "Admin Staff (Bandung Area)",
  //     category: "Sistem Informasi",
  //     rank: "Lulusan Baru",
  //     expired: "10 Agustus 2023",
  //   },
  // ];
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

  const [jobsData, loadingJobsData] = useFetchUmum("/api/career");
  console.log("jobsData", jobsData);

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
              paddingTop={5}
              topHover={40}
              kananHover={lebarLayar > 576 ? 0 : "auto"}
              kiriHover={lebarLayar > 576 ? "auto" : 0}
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
              paddingTop={5}
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
          {careerData?.data?.map((item: any, index: number) => {
            return (
              <CardJob
                id={item.career_id || index}
                title={item.title}
                category={item.subtitle}
                rank={item.status}
                expired={item.expired}
                location={item.location}
                link={item.link}
              />
            );
          })}
        </ListJob>
      </Container>
    </div>
  );
};

export default CareerPage;
