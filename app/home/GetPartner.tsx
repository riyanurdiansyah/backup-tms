"use client";

import React from "react";
import {
  ButttonGetPartner,
  GetPartnerContainer,
  GetPartnerLeft,
  GetPartnerRight,
  GetPartnerTitle,
} from "./Styles";
import Image from "next/image";
import ImageCarGroup from "./assets/img-car-group.png";
import { useRouter } from "next/navigation";

const GetPartner = () => {
  const route = useRouter();
  return (
    <GetPartnerContainer>
      <GetPartnerLeft>
        <Image
          src={ImageCarGroup}
          alt=""
          layout="responsive"
          objectFit="contain"
        />
      </GetPartnerLeft>
      <GetPartnerRight>
        <GetPartnerTitle>
          Your Partner <br /> for <strong>Your Business</strong>
        </GetPartnerTitle>
        <ButttonGetPartner onClick={() => route.push("/products")}>
          Get Partner
        </ButttonGetPartner>
      </GetPartnerRight>
    </GetPartnerContainer>
  );
};

export default GetPartner;
