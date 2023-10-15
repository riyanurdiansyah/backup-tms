"use client";
import HeroBanner from "@/components/HeroBanner";
import React, { useEffect, useState } from "react";
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
import { listDataFunction, listDataJenjang } from "@/utils/craeerDataList";

const CareerPage = () => {
  const [lebarLayar] = useDimensiLayar();
  const [dataNew, setDataNew] = useState<any>(null);
  const [keyword, setKeyword] = useState<any>("");
  const [functionTerpilih, setFunctionTerpilih] = useState(null);
  const [levelTerpilih, setLevelTerpilih] = useState(null);
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

  useEffect(() => {
    if (!loadingCareerData && careerData) {
      setDataNew(careerData?.data);
    }
  }, [loadingCareerData]);

  useEffect(() => {
    if (functionTerpilih !== null || levelTerpilih !== null || keyword != "") {
      const dataSearch = careerData?.data?.filter((type: any) => {
        return type.title
          ?.toLowerCase()
          .includes(keyword?.toString().toLowerCase([]));
      });
      const filteredData = dataSearch?.filter((item: any) => {
        if (functionTerpilih !== null && levelTerpilih !== null) {
          return (
            item.subtitle === functionTerpilih && item.status === levelTerpilih
          );
        } else if (functionTerpilih !== null) {
          return item.subtitle === functionTerpilih;
        } else if (levelTerpilih !== null) {
          return item.status === levelTerpilih;
        }
        return true;
      });
      setDataNew(filteredData);
    } else {
      setDataNew(careerData?.data);
    }
  }, [functionTerpilih, levelTerpilih, keyword]);

  const handleClickDropdownFunction = (e: any) => {
    setFunctionTerpilih(e);
  };

  const handleClickDropdownLevel = (e: any) => {
    setLevelTerpilih(e);
  };

  return (
    <div className="career-page-wrapper">
      <HeroBanner title={"Career"} />
      <SearchContainer>
        <SearchBox>
          <Search>
            <SearchInput
              placeholder="Cari lowongan..."
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
                <DropdownMenu
                  dataMenu={listDataFunction}
                  handleClickDropdown={handleClickDropdownFunction}
                />
              }
            >
              <FilterCategory>
                <p className="text">
                  {functionTerpilih ? (
                    functionTerpilih
                  ) : (
                    <>
                      Pilih Fungsi <FaSortDown />
                    </>
                  )}
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
                  dataMenu={listDataJenjang}
                  handleClickDropdown={handleClickDropdownLevel}
                />
              }
            >
              <FilterRank>
                <p className="text">
                  {levelTerpilih ? (
                    levelTerpilih
                  ) : (
                    <>
                      Pilih Jenjang <FaSortDown />
                    </>
                  )}
                </p>
              </FilterRank>
            </Hover>
          </DropdownFilterRank>
        </SearchBox>
      </SearchContainer>
      <Container className="body-career-page">
        <ListJob>
          {dataNew?.map((item: any, index: number) => {
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
