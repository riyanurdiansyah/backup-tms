"use client";

import Link from "next/link";
import { styled } from "styled-components";

const colorText = "#b6b6b6";

export const Foo = styled.footer`
  margin-top: 100px;
  width: 100%;
  background-color: #414141;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const FooterContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  padding: 60px 0;
`;

export const FooterOne = styled.div`
  width: 40%;
`;

export const TextAdress = styled.p`
  font-size: 16px;
  color: ${colorText};
  max-width: 250px;
  margin: 20px 0;
`;

export const TextSosmed = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #f9f9f9;
  margin-bottom: 15px;
`;

export const ListSosmed = styled.div`
  display: flex;
  gap: 15px;
  color: #bfbfbf;
`;

export const FooterTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${colorText};
`;

export const FooterThree = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${colorText};
`;

export const ListCar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 20px;
`;

export const FooterBootom = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const TextBootom = styled.p`
  font-style: italic;
  text-align: center;
  color: ${colorText};
`;
