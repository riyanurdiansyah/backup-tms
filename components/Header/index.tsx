"use client";

import Image from "next/image";
import React from "react";
import LogoColab from "./logo-colab.png";
import LogoBrand from "./logo-brand.png";
import Link from "next/link";
import {
  HeaderContainer,
  HeaderLogoBrand,
  HeaderLogoColab,
  HeaderWrapper,
  IconToggle,
  ItemNavbar,
  LMenu,
  ListNavbar,
  Navbar,
  ToggleMenu,
} from "./Styles";
import Hover from "../Hover";
import DropdownMenu from "../Hover/DropdownMenu";
import { FaSortDown } from "react-icons/fa";

const Header = () => {
  const listMenuResources = [
    "Owner Manual Book",
    "Warranty & KSG",
    "Part Catalogue",
    "Owning Operation Cost",
  ];

  const ListMenuContact = ["TMS Izusu Network", "Customer Service"];

  const handleClickDropdown = (e: any) => {
    console.log("menu", e);
  };
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogoColab>
          <Link href="/">
            <Image src={LogoColab} alt={""} height={30} />
          </Link>
        </HeaderLogoColab>
        <Navbar>
          <ListNavbar>
            <ItemNavbar>
              <LMenu href="/products">Products</LMenu>
            </ItemNavbar>
            <ItemNavbar>
              <Hover
                paddingTop={20}
                topHover={30}
                kananHover="auto"
                kiriHover={0}
                onHover={
                  <DropdownMenu
                    dataMenu={listMenuResources}
                    handleClickDropdown={handleClickDropdown}
                  />
                }
              >
                <LMenu href="">
                  Resources <FaSortDown style={{ marginTop: "-3px" }} />
                </LMenu>
              </Hover>
            </ItemNavbar>
            <ItemNavbar>
              <LMenu href="/service">Service</LMenu>
            </ItemNavbar>
            <ItemNavbar>
              <Hover
                paddingTop={20}
                topHover={30}
                kananHover="auto"
                kiriHover={0}
                onHover={
                  <DropdownMenu
                    dataMenu={ListMenuContact}
                    handleClickDropdown={handleClickDropdown}
                  />
                }
              >
                <LMenu href="">
                  Contact
                  <FaSortDown style={{ marginTop: "-3px" }} />
                </LMenu>
              </Hover>
            </ItemNavbar>
            <ItemNavbar>
              <LMenu href="/career">Career</LMenu>
            </ItemNavbar>
          </ListNavbar>
        </Navbar>
        <HeaderLogoBrand>
          <Link href="/" className="flex justify-end">
            <Image src={LogoBrand} alt={""} height={30} />
          </Link>
        </HeaderLogoBrand>
        <ToggleMenu>
          <IconToggle />
        </ToggleMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
