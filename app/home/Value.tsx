"use client";
import React from "react";
import {
  CardValue,
  CardValueTitle,
  ListValue,
  ValueContainer,
  ValueDesc,
  ValueTitle,
  ValueWrapper,
} from "./Styles";
import ImgValue1 from "./assets/img-value-1.jpg";
import ImgValue2 from "./assets/img-value-2.jpg";
import ImgValue3 from "./assets/img-value-3.jpg";
import ImgValue4 from "./assets/img-value-4.jpg";
import ImgValue5 from "./assets/img-value-5.jpg";
import Image from "next/image";
import useDimensiLayar from "@/utils/useDimensiLayar";

const listValue = [
  {
    name: "Growth Seeker",
    icon: ImgValue1,
  },
  {
    name: "Robust Fighting Spirit",
    icon: ImgValue2,
  },
  {
    name: "Exceptional Customer Focus",
    icon: ImgValue3,
  },
  {
    name: "Agile Intrapreneurship",
    icon: ImgValue4,
  },
  {
    name: "Trusworthy",
    icon: ImgValue5,
  },
];

const Value = () => {
  const [lebarLayar] = useDimensiLayar();

  return (
    <ValueWrapper>
      <ValueContainer>
        <ValueTitle>Sesuaikan Partner Bisnis Anda</ValueTitle>
        <ValueDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          dolorem eligendi dolore quae nulla iusto saepe quaerat voluptates
          fugiat voluptatibus aliquid neque cupiditate corrupti vitae laborum,
          optio ipsum iure earum. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nesciunt sunt maxime beatae excepturi magni
          expedita, vel aspernatur quae dolor, praesentium est eveniet
          repellendus earum reiciendis quos assumenda laborum. Sint, facilis?
        </ValueDesc>
        <ListValue>
          {listValue?.map((item: any, index: number) => (
            <CardValue key={index}>
              <Image
                src={item?.icon}
                alt=""
                layout="responsive"
                objectFit="contain"
                // width={sizeImgValue}
                style={{
                  borderRadius: "50%",
                  maxWidth: lebarLayar < 768 ? "50px" : "130px",
                }}
              />
              <CardValueTitle>{item?.name}</CardValueTitle>
            </CardValue>
          ))}
        </ListValue>
      </ValueContainer>
    </ValueWrapper>
  );
};

export default Value;
