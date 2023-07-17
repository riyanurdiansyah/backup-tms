import { Btn, color, font } from "@/styles/styledComponents/GlobalStyled";
import { HiHome } from "react-icons/hi";
import { styled } from "styled-components";

export interface IProps {
  showMenu: boolean;
}

export const BtnHomeWrapper = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  bottom: 50px;
  right: 70px;
  z-index: 10;
  display: flex;
  align-items: center;
`;

export const BtnToggleHome = styled(Btn)<IProps>`
  background-color: #000;
  border-radius: 100%;
  padding: 15px;
  z-index: 10;
  color: ${(props) => (props.showMenu ? color.main : `#fff`)};
  &:hover {
    background-color: #000;
    color: ${(props) => (props.showMenu ? color.main : `#fff`)};
  }
`;

export const IconHome = styled(HiHome)`
  font-size: 55px;
  color: inherit;
`;

export const MenuToggleHome = styled.div<IProps>`
  width: ${(props) => (props.showMenu ? "90vw" : `0%`)};
  height: 60px;
  background-color: ${color.main};
  position: absolute;
  right: 10px;
  border-radius: 100px;
  padding-left: ${(props) => (props.showMenu ? "50px" : `0`)};
  padding-right: ${(props) => (props.showMenu ? "120px" : `0`)};
  transition: 0.5s all;
  overflow: hidden;
`;

export const ListMenuHome = styled.div<IProps>`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: ${(props) => (props.showMenu ? "" : `none`)};
`;

export const ItemMenuHome = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-family: ${font.heading};
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    color: ${color.fh};
  }
`;
