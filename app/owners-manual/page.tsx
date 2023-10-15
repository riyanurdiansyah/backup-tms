"use client";
import HeroBanner from "@/components/HeroBanner";
import React, { useEffect, useState } from "react";
import {
  ListBook,
  Search,
  SearchBox,
  SearchContainer,
  SearchInput,
} from "./Styled";
import { FiSearch } from "react-icons/fi";
import { Container } from "../../styles/styledComponents/GlobalStyled";
import CardBook from "@/components/Card/CardBook";
import { useFetchUmum } from "@/utils/useFetchData";

const OwnersManual = () => {
  const [data, setData] = useState<any>([]);
  const [keyword, setKeyword] = useState<any>("");
  const [manualBookData, loadingManualBookData] = useFetchUmum("/api/book");

  useEffect(() => {
    if (!loadingManualBookData && manualBookData && keyword == "") {
      setData(manualBookData?.data);
    }
    if (manualBookData && keyword != "") {
      const dataSearch = manualBookData?.data?.filter((type: any) => {
        return type.nama
          ?.toLowerCase()
          .includes(keyword?.toString().toLowerCase([]));
      });
      setData(dataSearch);
    }
  }, [loadingManualBookData, keyword]);

  return (
    <div className="owners-manual-page-wrapper">
      <HeroBanner title={"Owners Manual Book"} />
      <SearchContainer>
        <SearchBox>
          <Search>
            <SearchInput
              placeholder="Cari buku panduan..."
              value={keyword}
              onChange={(e: any) => setKeyword(e.target.value)}
            />
            <p>
              <FiSearch />
            </p>
          </Search>
        </SearchBox>
      </SearchContainer>
      {!loadingManualBookData && manualBookData && (
        <Container>
          <ListBook>
            {data?.map((item: any, index: number) => {
              return (
                <CardBook
                  id={item.book_id || index}
                  title={item.nama}
                  link={item.file}
                />
              );
            })}
          </ListBook>
        </Container>
      )}
    </div>
  );
};

const bookDummy = [
  {
    title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
    link: "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
  },
  {
    title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
    link: "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
  },
  {
    title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
    link: "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
  },

  {
    title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
    link: "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
  },
  {
    title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
    link: "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
  },
  {
    title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
    link: "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
  },
  {
    title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
    link: "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
  },
];

export default OwnersManual;
