"use client";
import HeroBanner from "@/components/HeroBanner";
import React, { useEffect, useState } from "react";
import {
  ListBrochures,
  Search,
  SearchBox,
  SearchContainer,
  SearchInput,
} from "./Styled";
import { FiSearch } from "react-icons/fi";
import { Container } from "../../styles/styledComponents/GlobalStyled";
import CardBrochure from "@/components/Card/CardBrochure";
import { useFetchUmum } from "@/utils/useFetchData";

const BrochuresPage = () => {
  const [data, setData] = useState<any>([]);
  const [keyword, setKeyword] = useState<any>("");
  const [brochurekData, loadingBrochureData] = useFetchUmum("/api/brochure");

  useEffect(() => {
    if (!loadingBrochureData && brochurekData && keyword == "") {
      setData(brochurekData?.data);
    }
    if (brochurekData && keyword != "") {
      const dataSearch = brochurekData?.data?.filter((type: any) => {
        return type.title
          ?.toLowerCase()
          .includes(keyword?.toString().toLowerCase([]));
      });
      setData(dataSearch);
    }
  }, [loadingBrochureData, keyword]);
  return (
    <div className="brochures-page-wrapper">
      <HeroBanner title={"Brochures"} />
      <SearchContainer>
        <SearchBox>
          <Search>
            <SearchInput
              placeholder="Cari brosur..."
              value={keyword}
              onChange={(e: any) => setKeyword(e.target.value)}
            />
            <p>
              <FiSearch />
            </p>
          </Search>
        </SearchBox>
      </SearchContainer>
      <Container>
        {!loadingBrochureData && brochurekData && (
          <ListBrochures>
            {data?.map((item: any, index: number) => {
              return (
                <CardBrochure
                  id={item.brochure_id || index}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  link={item.brochure}
                />
              );
            })}
          </ListBrochures>
        )}
      </Container>
    </div>
  );
};

// const brochureDummy = [
//   {
//     title: "ISUZU GIGA TRACTOR HEAD",
//     thumbnail: "/img-brochure.png",
//     linkBrochure:
//       "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
//   },
//   {
//     title: "ISUZU GIGA TRACTOR HEAD",
//     thumbnail: "",
//     linkBrochure:
//       "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
//   },
//   {
//     title: "ISUZU GIGA TRACTOR HEAD",
//     thumbnail: "/img-brochure.png",
//     linkBrochure:
//       "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
//   },
//   {
//     title: "ISUZU GIGA TRACTOR HEAD",
//     thumbnail: "/img-brochure.png",
//     linkBrochure:
//       "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
//   },
// ];

export default BrochuresPage;
