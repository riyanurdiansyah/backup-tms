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

export const BtnToggleHome = styled.button`
  background-color: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 10;
`;

export const MenuToggleHome = styled.div<IProps>`
  width: ${(props) => (props.showMenu ? "90vw" : `0%`)};
  height: 50px;
  background-color: red;
  position: absolute;
  right: 10px;
  border-radius: 100px;
  padding-left: ${(props) => (props.showMenu ? "50px" : `0`)};
  padding-right: ${(props) => (props.showMenu ? "100px" : `0`)};
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
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.7s all;
  &:hover {
    color: #cbcaca;
  }
`;
