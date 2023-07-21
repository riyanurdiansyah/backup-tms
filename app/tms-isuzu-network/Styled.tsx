"use client";
import { FullContainer, color } from "@/styles/styledComponents/GlobalStyled";
import { styled } from "styled-components";

interface IProps {
  isShow: boolean;
}

export const BodyNetwork = styled(FullContainer)`
  display: flex;
  height: 100vh;
  overflow: hidden;
  margin-bottom: -100px;
  position: relative;
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div<IProps>`
  width: 30%;
  position: relative;
  background-color: #fff;
  @media screen and (max-width: 991px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 3;
    top: 0;
    transition: all 0.5s;
    right: ${(props) => (props.isShow ? "0" : "100vw")};
    overflow: auto;
  }
`;

export const Title = styled.h4`
  background-color: ${color.main};
  color: #fff;
  padding: 20px 16px;
  text-transform: uppercase;
  text-align: center;
`;

export const ListNetwork = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 16px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  @media screen and (max-width: 991px) {
    max-height: 100%;
    overflow: auto;
  }
`;

export const Right = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  @media screen and (max-width: 991px) {
    width: 100vw;
    min-height: 100vh;
  }
`;

export const Togle = styled.div`
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 0;
  color: #fff;
  background-color: ${color.main};
  padding: 30px 0;
  border-radius: 0 12px 12px 0;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;
