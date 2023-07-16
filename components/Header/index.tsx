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
import { useRouter } from "next/navigation";

const Header = () => {
  const route = useRouter();

  const handleClickDropdown = (e: any) => {
    if (e == "/part-catalogue") {
      window.open(
        "https://parts.isuzu.astra.co.id/marketing/catalog/",
        "_blank"
      );
    } else if (e == "/customer-service") {
      window.open(
        "https://wa.me/6281326017533?text=Hallo TMS Isuzu, Saya ingin bertanya.",
        "_blank"
      );
    } else {
      route.push(e);
    }
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
              <LMenu href="/warranty-and-ksg">Service</LMenu>
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

export const listMenuResources = [
  {
    name: "Owners Manual Book",
    url: "/owners-manual",
  },
  {
    name: "Warranty & KSG",
    url: "/warranty-and-ksg",
  },
  {
    name: "Part Catalogue",
    url: "/part-catalogue",
  },
  {
    name: "Owning & Operation Cost",
    url: "/owning-and-operation-cost",
  },
];

export const ListMenuContact = [
  {
    name: "TMS Izusu Network",
    url: "/tms-isuzu-network",
  },
  {
    name: "Customer Service",
    url: "/customer-service",
  },
];

export default Header;
