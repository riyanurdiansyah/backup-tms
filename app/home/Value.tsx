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
import ImgValue1 from "./assets/img-value-1.png";
import ImgValue2 from "./assets/img-value-2.png";
import Image from "next/image";

const sizeImgValue = 120;

const Value = () => {
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
          <CardValue>
            <Image src={ImgValue1} alt="" width={sizeImgValue} />
            <CardValueTitle>Growth Seeker</CardValueTitle>
          </CardValue>
          <CardValue>
            <Image src={ImgValue2} alt="" width={sizeImgValue} />
            <CardValueTitle>Robust Fighting Spirit</CardValueTitle>
          </CardValue>
          <CardValue>
            <Image src={ImgValue1} alt="" width={sizeImgValue} />
            <CardValueTitle>Exceptional Customer Focus</CardValueTitle>
          </CardValue>
          <CardValue>
            <Image src={ImgValue2} alt="" width={sizeImgValue} />
            <CardValueTitle>Agile Intrapreneurship</CardValueTitle>
          </CardValue>
          <CardValue>
            <Image src={ImgValue1} alt="" width={sizeImgValue} />
            <CardValueTitle>Trusworthy</CardValueTitle>
          </CardValue>
        </ListValue>
      </ValueContainer>
    </ValueWrapper>
  );
};

export default Value;
