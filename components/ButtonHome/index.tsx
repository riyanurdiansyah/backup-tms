"use client";
import React, { useState } from "react";
import {
  BtnHomeWrapper,
  BtnToggleHome,
  ItemMenuHome,
  ListMenuHome,
  MenuToggleHome,
} from "./Styled";
import { HiHome } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineCalculator } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const ButtonHome = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <BtnHomeWrapper>
      <MenuToggleHome showMenu={showMenu}>
        <ListMenuHome showMenu={showMenu}>
          <ItemMenuHome>
            <HiOutlineMapPin />
            Find Dealer
          </ItemMenuHome>
          <ItemMenuHome>
            <RiDownloadCloud2Line />
            Download Brochure
          </ItemMenuHome>
          <ItemMenuHome>
            <TbTruckDelivery />
            Test Drive
          </ItemMenuHome>
          <ItemMenuHome>
            <AiOutlineCalculator />
            Credit Simulation
          </ItemMenuHome>
          <ItemMenuHome>
            <BiSupport />
            Consultation
          </ItemMenuHome>
        </ListMenuHome>
      </MenuToggleHome>
      <BtnToggleHome onClick={() => setShowMenu(!showMenu)}>
        <HiHome size={40} color="red" />
      </BtnToggleHome>
    </BtnHomeWrapper>
  );
};

export default ButtonHome;
