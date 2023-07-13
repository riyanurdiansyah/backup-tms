import React from "react";
import {
  ListMyPartner,
  MyPartnerContainer,
  MyPartnerTitle,
  MyPartnerWrapper,
} from "./Styles";
import Image from "next/image";
import ImgPartner1 from "./assets/img-partner-1.png";
import ImgPartner3 from "./assets/img-partner-3.png";

const heightImgPartner = 60;

const MyPartner = () => {
  return (
    <MyPartnerWrapper>
      <MyPartnerContainer>
        <MyPartnerTitle>My Partner</MyPartnerTitle>
        <ListMyPartner>
          <Image src={ImgPartner1} alt="" height={heightImgPartner} />
          <Image src={ImgPartner3} alt="" height={heightImgPartner} />
          <Image src={ImgPartner1} alt="" height={heightImgPartner} />
          <Image src={ImgPartner3} alt="" height={heightImgPartner} />
        </ListMyPartner>
      </MyPartnerContainer>
    </MyPartnerWrapper>
  );
};

export default MyPartner;
