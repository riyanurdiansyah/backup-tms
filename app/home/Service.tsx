"use client";
import React from "react";
import {
  BtnService,
  ServiceContainer,
  ServiceDesc,
  ServiceLeft,
  ServiceRight,
  ServiceTitle,
  ServiceWrapper,
} from "./Styles";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Service = () => {
  const route = useRouter();
  return (
    <ServiceWrapper>
      <ServiceContainer>
        <ServiceLeft>
          <Image
            src="https://blog-media.lifepal.co.id/app/uploads/sites/3/2021/07/07110214/shutterstock_1114781909.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </ServiceLeft>
        <ServiceRight>
          <ServiceTitle>After Sales Service</ServiceTitle>
          <ServiceDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            impedit obcaecati tenetur, aut, facere, nihil aliquid consequatur
            eaque corporis dicta quas. Nostrum, accusamus veritatis quia sed et
            tempore culpa recusandae!. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni impedit.
          </ServiceDesc>
          <BtnService onClick={() => route.push("/warranty-and-ksg")}>
            Service
          </BtnService>
        </ServiceRight>
      </ServiceContainer>
    </ServiceWrapper>
  );
};

export default Service;
