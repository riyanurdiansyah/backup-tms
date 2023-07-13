"use client";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
}
body {
    /* color: #333539; */
   line-height: 1.5;
   font-size: 1.1rem;
   font-family: 'Source Sans Pro', sans-serif;
   font-weight:400;
   overflow-x: hidden;
 }
 p {
   /* color: #333539; */
 }
h1 {
  font-size: calc(1.775rem + 1.5vw);
  font-weight:400;
}
h2 {
  font-size: calc(1.325rem + 0.9vw);
}
strong {
  font-weight: 800;
}
a,h1,h2,h3,h4,h5,h6 {
  font-family: 'Montserrat', sans-serif;
  /* color: #1C1D20; */
}
`;

export const InfoSec = styled.div`
  color: #fff;
  padding: 5px 0;
`;

export const Container = styled.section`
  z-index: 1;
  width: 100%;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  transition: all 1s;
  /* ============ Mobile Max 576 */
  @media screen and (max-width: 576px) {
    max-width: 100%;
  }

  /* ============ Mobile Min 576  */
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }

  /* ============ Tablet Min 768 */
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  /* ============ Laptop Min 992 */
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }

  /* ============ Laptop Min 1200 */
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  border-radius: 8px;
  font-size: 0.8rem;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
  }
`;
