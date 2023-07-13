import React from "react";
import {
  ButttonGetPartner,
  GetPartnerContainer,
  GetPartnerLeft,
  GetPartnerRight,
  GetPartnerTitle,
  GetPartnerWrapper,
} from "./Styles";
import Image from "next/image";
import ImageCarGroup from "./assets/img-car-group.png";

const GetPartner = () => {
  return (
    <GetPartnerWrapper>
      <GetPartnerContainer>
        <GetPartnerLeft>
          <Image src={ImageCarGroup} alt="" />
        </GetPartnerLeft>
        <GetPartnerRight>
          <GetPartnerTitle>
            Your Partner <br /> for <strong>Your Business</strong>
          </GetPartnerTitle>
          <ButttonGetPartner>Get Partner</ButttonGetPartner>
        </GetPartnerRight>
      </GetPartnerContainer>
    </GetPartnerWrapper>
  );
};

export default GetPartner;
