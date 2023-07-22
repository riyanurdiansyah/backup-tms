"use client";
import React from "react";
import LogColab from "./logo-colab.png";
import Image from "next/image";
import {
  Foo,
  FooterBootom,
  FooterContainer,
  FooterMenu,
  FooterOne,
  FooterThree,
  FooterTwo,
  ImgBrandColab,
  LMenu,
  LSosmed,
  LTitle,
  LVehicle,
  ListSosmed,
  ListVehicle,
  TextAdress,
  TextBootom,
  TitleAdress,
  TitleSosmed,
} from "./Styles";

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <></>;
  }
  return (
    <Foo>
      <FooterContainer>
        <FooterOne>
          <ImgBrandColab>
            <Image src={LogColab} alt="" height={40} />
          </ImgBrandColab>
          <TitleAdress>Head Office</TitleAdress>
          <TextAdress>
            Ruko Cempaka Mas Blok J, Jakarta Pusat {"-"} DKI Jakarta Indonesia
            10640
          </TextAdress>
          <TitleSosmed>Stay Connect With Us</TitleSosmed>
          <ListSosmed>
            <LSosmed href="">
              <FaFacebookF />
            </LSosmed>
            <LSosmed href="">
              <FaTwitter />
            </LSosmed>
            <LSosmed href="">
              <AiFillInstagram />
            </LSosmed>
            <LSosmed href="">
              <FaYoutube />
            </LSosmed>
            <LSosmed href="">
              <TbMailFilled />
            </LSosmed>
          </ListSosmed>
        </FooterOne>
        <FooterMenu>
          <FooterTwo>
            <LTitle href="">Resources</LTitle>
            <LMenu href="/owners-manual">Owners Manual</LMenu>
            <LMenu href="/warranty-and-ksg">Warranty & KSG</LMenu>
            <LMenu
              href="https://parts.isuzu.astra.co.id/marketing/catalog/"
              target="_blank"
            >
              Part Caralogue
            </LMenu>
            <LMenu href="/owning-and-operation-cost">
              Owning & Operation Cost
            </LMenu>
          </FooterTwo>
          <FooterThree>
            <LTitle href="">Vehicles</LTitle>
            <ListVehicle>
              <LVehicle href="#">Isuzu Traga</LVehicle>
              <LVehicle href="#">Isuzu Traga</LVehicle>
              <LVehicle href="#">Isuzu Traga</LVehicle>
              <LVehicle href="#">Isuzu Traga</LVehicle>
              <LVehicle href="#">Isuzu Traga</LVehicle>
              <LVehicle href="#">Isuzu Traga</LVehicle>
              <LVehicle href="#">Isuzu Traga</LVehicle>
              <LVehicle href="#">Isuzu Traga</LVehicle>
            </ListVehicle>
          </FooterThree>
        </FooterMenu>
      </FooterContainer>
      <FooterBootom>
        <TextBootom>&copy; 2023. TMS Isuzu. All Rights Reserved</TextBootom>
      </FooterBootom>
    </Foo>
  );
};

export default Footer;
