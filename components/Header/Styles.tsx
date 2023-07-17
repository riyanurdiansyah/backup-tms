"use client";
import { Container, color } from "@/styles/styledComponents/GlobalStyled";
import Link from "next/link";
import { styled } from "styled-components";
import { CgMenuGridO } from "react-icons/cg";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 16px 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 576px) {
    padding: 0 16px;
  }
`;

export const HeaderLogoColab = styled.div`
  max-width: 190px;
  height: 30px;
`;

export const Navbar = styled.nav`
  width: auto;
  height: 30px;
`;

export const ListNavbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 30px;
  @media screen and (max-width: 766px) {
    display: none;
  }
  @media screen and (max-width: 991px) {
    gap: 20px;
  }
  @media screen and (max-width: 1199px) {
    gap: 30px;
  }
`;

export const ItemNavbar = styled.li`
  height: 30px;
`;

export const LMenu = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 766px) {
    gap: 5px;
  }
  &:hover {
    color: red;
  }
`;

export const HeaderLogoBrand = styled(HeaderLogoColab)`
  text-align: end;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const ToggleMenu = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  @media screen and (max-width: 766px) {
    display: block;
  }
`;

export const IconToggle = styled(CgMenuGridO)`
  width: 30px;
  height: 30px;
  color: ${color.main};
`;
