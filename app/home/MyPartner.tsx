import React from "react";
import {
  ItemMyPartner,
  ListMyPartner,
  MyPartnerContainer,
  MyPartnerTitle,
  MyPartnerWrapper,
} from "./Styles";
import Image from "next/image";
import ImgPartner1 from "./assets/img-partner-1.png";
import ImgPartner2 from "./assets/img-partner-2.png";
import ImgPartner3 from "./assets/img-partner-3.png";
import ImgPartner4 from "./assets/img-partner-4.png";

const heightImgPartner = 60;

const MyPartner = () => {
  return (
    <MyPartnerWrapper>
      <MyPartnerContainer>
        <MyPartnerTitle>My Partner</MyPartnerTitle>
        <ListMyPartner>
          <ItemMyPartner>
            <Image
              src={ImgPartner1}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </ItemMyPartner>
          <ItemMyPartner>
            <Image
              src={ImgPartner2}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </ItemMyPartner>
          <ItemMyPartner>
            <Image
              src={ImgPartner3}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </ItemMyPartner>
          <ItemMyPartner>
            {" "}
            <Image
              src={ImgPartner4}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </ItemMyPartner>
        </ListMyPartner>
      </MyPartnerContainer>
    </MyPartnerWrapper>
  );
};

export default MyPartner;
