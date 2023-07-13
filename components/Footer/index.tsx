import React from "react";
import LogColab from "./logo-colab.png";
import Image from "next/image";
import Link from "next/link";
import {
  Foo,
  FooterBootom,
  FooterContainer,
  FooterOne,
  FooterThree,
  FooterTwo,
  ListCar,
  ListSosmed,
  TextAdress,
  TextBootom,
  TextSosmed,
} from "./Styles";

import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const sizeIcon = 35;

const Footer = () => {
  return (
    <Foo>
      <FooterContainer>
        <FooterOne>
          <Image src={LogColab} alt="" height={40} />
          <TextAdress>
            Ruko Cempaka Mas Blok J, Jakarta Pusat -Indonesia 10640
          </TextAdress>
          <TextSosmed>Stay Connect With Us</TextSosmed>
          <ListSosmed>
            <Link href="#">
              <FaFacebookF size={sizeIcon} />
            </Link>
            <Link href="#">
              <FaTwitter size={sizeIcon} />
            </Link>
            <Link href="#">
              <FaInstagram size={sizeIcon} />
            </Link>
            <Link href="#">
              <FaYoutube size={sizeIcon} />
            </Link>
            <Link href="#">
              <TbMailFilled size={sizeIcon} />
            </Link>
          </ListSosmed>
        </FooterOne>
        <FooterTwo>
          <Link href="#">Owner Manual</Link>
          <Link href="#">Warranty & KSG</Link>
          <Link href="#">Part Caralogue</Link>
          <Link href="#">Owning & Operation COst</Link>
        </FooterTwo>
        <FooterThree>
          <Link href="#">Explore Car</Link>
          <ListCar>
            <Link href="#">Isuzu Traga</Link>
            <Link href="#">Isuzu Traga</Link>
            <Link href="#">Isuzu Traga</Link>
            <Link href="#">Isuzu Traga</Link>
            <Link href="#">Isuzu Traga</Link>
            <Link href="#">Isuzu Traga</Link>
          </ListCar>
        </FooterThree>
      </FooterContainer>
      <FooterBootom>
        <TextBootom>2022. TMS Isuzu. All Rights Reserved</TextBootom>
      </FooterBootom>
    </Foo>
  );
};

export default Footer;
