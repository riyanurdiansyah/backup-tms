"use client";
import React, { useState } from "react";
import { warrantyDummy } from "./dataDummy";
import HeroBanner from "@/components/HeroBanner";
import {
  A,
  BodyContent,
  IconArrowDown,
  IconArrowUp,
  ItemQNA,
  ListQNA,
  Q,
  TextQ,
} from "./Styled";

const WarrantyPage = () => {
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
        <ListQNA>
          {warrantyDummy?.map((item: any, index: number) => (
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
                <TextQ>{item.Q}</TextQ>
              </Q>
              <A
                active={activeIndices.includes(index) ? true : false}
                dangerouslySetInnerHTML={{ __html: item.A }}
              />
            </ItemQNA>
          ))}
        </ListQNA>
      </BodyContent>
    </div>
  );
};

export default WarrantyPage;
