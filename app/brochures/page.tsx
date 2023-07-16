import HeroBanner from "@/components/HeroBanner";
import React from "react";
import {
  ListBrochures,
  Search,
  SearchBox,
  SearchContainer,
  SearchInput,
} from "./Styled";
import { FiSearch } from "react-icons/fi";
import { Container } from "../GlobalStyles";
import CardBrochure from "@/components/Card/CardBrochure";

const BrochuresPage = () => {
  return (
    <div className="brochures-page-wrapper">
      <HeroBanner title={"Brochures"} />
      <SearchContainer>
        <SearchBox>
          <Search>
            <SearchInput placeholder="Cari brosur..." />
            <p>
              <FiSearch />
            </p>
          </Search>
        </SearchBox>
      </SearchContainer>
      <Container>
        <ListBrochures>
          {brochureDummy?.map((item: any, index: number) => {
            return (
              <CardBrochure
                id={item.id || index}
                title={item.title}
                thumbnail={item.thumbnail}
                link={item.link}
              />
            );
          })}
        </ListBrochures>
      </Container>
    </div>
  );
};

const brochureDummy = [
  {
    title: "ISUZU GIGA TRACTOR HEAD",
    thumbnail: "/img-brochure.png",
    linkBrochure:
      "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
  },
  {
    title: "ISUZU GIGA TRACTOR HEAD",
    thumbnail: "",
    linkBrochure:
      "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
  },
  {
    title: "ISUZU GIGA TRACTOR HEAD",
    thumbnail: "/img-brochure.png",
    linkBrochure:
      "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
  },
  {
    title: "ISUZU GIGA TRACTOR HEAD",
    thumbnail: "/img-brochure.png",
    linkBrochure:
      "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
  },
];

export default BrochuresPage;
