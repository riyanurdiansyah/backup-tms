"use client";

import React from "react";
import {
  Avatar,
  BtnLogout,
  BtnTogle,
  IconLogout,
  IconTogle,
  Left,
  Name,
  Profile,
  Right,
  TopbarWrapper,
} from "./Styled";
import { usePathname } from "next/navigation";
import BreadcrumbAdmin from "../Breadcrumb/BreadcrumbAdmin";
import Image from "next/image";
import ImgAvatarAdmin from "./img-avatar-admin.jpg";

const Topbar = () => {
  const pathname = usePathname();
  const dataArray = pathname.split("/").filter((item) => item !== "");

  return (
    <TopbarWrapper>
      <Left>
        <BtnTogle>
          <IconTogle />
        </BtnTogle>
        <BreadcrumbAdmin data={dataArray} />
      </Left>
      <Right>
        <BtnLogout>
          <IconLogout />
        </BtnLogout>
        <Profile>
          <Name>Administrator</Name>
          <Avatar>
            <Image
              src={ImgAvatarAdmin}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </Avatar>
        </Profile>
      </Right>
    </TopbarWrapper>
  );
};

export default Topbar;
