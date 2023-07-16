"use client";
import React, { useState } from "react";
import {
  BtnHomeWrapper,
  BtnToggleHome,
  IconHome,
  ItemMenuHome,
  ListMenuHome,
  MenuToggleHome,
} from "./Styled";
import { HiOutlineMapPin } from "react-icons/hi2";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineCalculator } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { useRouter } from "next/navigation";

const ButtonHome = () => {
  const route = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const sizeIconMenu = 30;
  return (
    <BtnHomeWrapper>
      <MenuToggleHome showMenu={showMenu}>
        <ListMenuHome showMenu={showMenu}>
          <ItemMenuHome onClick={() => route.push("/tms-isuzu-network")}>
            <HiOutlineMapPin size={sizeIconMenu} />
            Find Dealer
          </ItemMenuHome>
          <ItemMenuHome onClick={() => route.push("/brochures")}>
            <RiDownloadCloud2Line size={sizeIconMenu} />
            Download Brochure
          </ItemMenuHome>
          <ItemMenuHome onClick={() => route.push("/text-drive")}>
            <TbTruckDelivery size={sizeIconMenu} />
            Test Drive
          </ItemMenuHome>
          <ItemMenuHome onClick={() => route.push("/simulation-credit")}>
            <AiOutlineCalculator size={sizeIconMenu} />
            Credit Simulation
          </ItemMenuHome>
          <ItemMenuHome
            onClick={() =>
              window.open(
                "https://wa.me/6281326017533?text=Hallo TMS Isuzu, Saya ingin bertanya.",
                "_blank"
              )
            }
          >
            <BiSupport size={sizeIconMenu} />
            Consultation
          </ItemMenuHome>
        </ListMenuHome>
      </MenuToggleHome>
      <BtnToggleHome onClick={() => setShowMenu(!showMenu)} showMenu={showMenu}>
        <IconHome />
      </BtnToggleHome>
    </BtnHomeWrapper>
  );
};

export default ButtonHome;
