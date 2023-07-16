"use client";

import styled, { createGlobalStyle } from "styled-components";

export const color = {
  main: "red",
  secondary: "#e7cccc",
  fh: "#262626",
  fr: "#717276",
  border: "#EAF0F9",
};

export const font = {
  heading: "'Montserrat', sans-serif",
  reguler: "'Source Sans Pro', sans-serif",
};

export const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
}

body{
    color: #fff;
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight:400;
    overflow-x: hidden;
}

p{
  color: ${color.fr};
}

input{
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  border-radius: 6px;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Montserrat', sans-serif;
  color: ${color.fh};
}

a{
  color: ${color.fr};
  text-decoration: none;
}
`;

export const FullContainer = styled.section`
  z-index: 1;
  width: 100%;
  padding: 0;
  margin: 0;
  transition: all 1s;
`;

export const Container = styled.section`
  z-index: 1;
  width: 100%;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  transition: all 1s;
  /* ============ Mobile Max 576 */
  @media screen and (max-width: 576px) {
    max-width: 100%;
    padding: 16px;
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
  /* ============ Desktop Min 1440 */
  @media screen and (min-width: 1440px) {
    width: 80%;
    max-width: 80%;
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;
  border-radius: 8px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  outline: none;
  background: ${color.main};
  color: #fff;
  transition: all 1s;
  &:hover {
    transition: all 0.3s ease-out;
    background: #d10000;
  }
`;
