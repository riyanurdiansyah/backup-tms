"use client";
import React, { useState } from "react";
import { warrantyDummy } from "./dataDummy";
import HeroBanner from "@/components/HeroBanner";
import {
  A,
  BodyContent,
  IconArrowDown,
  IconArrowUp,
  IconInfo,
  ItemQNA,
  ListQNA,
  Q,
  TextInfo,
  TextQ,
} from "./Styled";
import { useFetchUmum } from "@/utils/useFetchData";

const WarrantyPage = () => {
  const [warrantyData, loadingWarrantyData] = useFetchUmum("/api/service");

  const [activeIndices, setActiveIndices] = useState<any>([0]);

  const toggleAnswer = (index: any) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i: any) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="warranty-and-ksg-page-wrapper">
      <HeroBanner title={"Warranty And KSG"} />
      <BodyContent>
        {!loadingWarrantyData && warrantyData && (
          <>
            <ListQNA>
              {warrantyData?.data?.map((item: any, index: number) => (
                <ItemQNA
                  key={index}
                  active={activeIndices.includes(index) ? true : false}
                  onClick={() =>
                    activeIndices.includes(index) ? toggleAnswer(index) : ""
                  }
                >
                  <Q onClick={() => toggleAnswer(index)}>
                    {activeIndices.includes(index) ? (
                      <IconArrowUp />
                    ) : (
                      <IconArrowDown />
                    )}
                    <TextQ>{item.title}</TextQ>
                  </Q>
                  <A
                    active={activeIndices.includes(index) ? true : false}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </ItemQNA>
              ))}
            </ListQNA>
            <TextInfo>
              <IconInfo />
              Silahkan merujuk pada Buku Servis & Garansi untuk melihat
              sepenuhnya syarat dan ketentuan Warranty Claim.
            </TextInfo>
          </>
        )}
      </BodyContent>
    </div>
  );
};

export default WarrantyPage;
