"use client";
import { styled } from "styled-components";
import { Container, FullContainer, color } from "../GlobalStyles";

export const SearchContainer = styled(FullContainer)`
  background-color: #f9fafc;
  border-bottom: 1px solid ${color.border};
  margin-bottom: 50px;
`;

export const SearchBox = styled(Container)`
  display: flex;
  gap: 16px;
  padding: 15px 0;
  @media screen and (max-width: 576px) {
    padding: 15px 16px;
  }
`;

export const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  p {
    position: absolute;
    z-index: 2;
    right: 10px;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${color.border};
  padding: 0 40px 0 10px;
  color: ${color.fr};
  font-weight: 500;
  &::placeholder {
    font-size: 14px;
    font-style: italic;
  }
`;

export const ListBrochures = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  width: 100%;
  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
