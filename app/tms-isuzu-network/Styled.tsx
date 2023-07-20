"use client";
import { FullContainer } from "@/styles/styledComponents/GlobalStyled";
import { styled } from "styled-components";

export const BodyNetwork = styled(FullContainer)`
  display: flex;
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 16px;
  height: 100%;
  overflow-y: scroll;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 70%;
  height: 100%;
  @media screen and (max-width: 991px) {
    width: 100%;
    height: 100vh;
  }
`;
