"use client";
import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 16px 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogoColab = styled.div`
  max-width: 255px;
  height: 40px;
`;

export const Navbar = styled.nav`
  width: auto;
`;

export const ListNavbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const ItemNavbar = styled.li`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
`;

export const HeaderLogoBrand = styled(HeaderLogoColab)``;
