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
import { useFetchUmum } from "@/utils/useFetchData";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin") || pathname.startsWith("/auth")) {
    return <></>;
  }

  const [sosmedData] = useFetchUmum("/api/sosmed");
  const [productData, loadingProductData] = useFetchUmum("/api/product");

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
            <LSosmed href={sosmedData?.data?.facebook || ""}>
              <FaFacebookF />
            </LSosmed>
            <LSosmed href={sosmedData?.data?.twitter || ""}>
              <FaTwitter />
            </LSosmed>
            <LSosmed href={sosmedData?.data?.instagram || ""}>
              <AiFillInstagram />
            </LSosmed>
            {/* <LSosmed href={sosmedData?.data?.youtube || ""}>
              <FaYoutube />
            </LSosmed> */}
            <LSosmed href={`mailto:${sosmedData?.data?.email}`}>
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
              {!loadingProductData &&
                productData?.data?.map((item: any, index: number) => {
                  if (index < 8) {
                    return (
                      <LVehicle
                        href={`https://www.tmsisuzu.co.id/products/${item?.product_id}`}
                        key={index}
                      >
                        {item.name}
                      </LVehicle>
                    );
                  }
                  return null;
                })}
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
