"use client";

import { styled } from "styled-components";

import {
  Container,
  color,
  font,
} from "../../styles/styledComponents/GlobalStyled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";

export interface IProps {
  active: boolean;
}

export const BodyContent = styled(Container)`
  max-width: 900px;
  padding: 0 16px;
  margin-top: 80px;
  @media screen and (max-width: 576px) {
    padding: 0 16px;
  }
`;

export const ListQNA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemQNA = styled.div<IProps>`
  padding: 0 16px;
  transition: all 0.5s;
  border-radius: 8px;
  border: 2px solid ${color.border};
  background-color: ${(props) => (props.active ? ` ${color.border}` : `#fff`)};
  cursor: pointer;
  &:hover {
    background-color: ${color.border};
  }
`;

export const Q = styled.div`
  display: flex;
  gap: 10px;
  padding: 30px 0;
  margin-top: 4px;
  color: ${color.fh};
`;

export const TextQ = styled.p`
  font-family: ${font.heading};
  font-size: 18px;
  font-weight: 700;
  color: inherit;
`;

export const A = styled.div<IProps>`
  display: ${(props) => (props.active ? "block" : `none`)};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${color.fr};
  list-style: circle;
  padding-left: 55px;
  padding-bottom: 30px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const IconArrowDown = styled(MdKeyboardArrowDown)`
  font-size: 32px;
  font-weight: 700;
  color: ${color.fh};
  margin-top: -7px;
  color: inherit;
`;

export const IconArrowUp = styled(MdKeyboardArrowUp)`
  font-size: 32px;
  font-weight: 700;
  color: ${color.fh};
  margin-top: -7px;
  color: inherit;
`;

export const TextInfo = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${color.fr};
  font-style: italic;
  margin-top: 30px;
`;

export const IconInfo = styled(AiFillInfoCircle)`
  color: #ffd70c;
  margin-right: 5px;
  margin-bottom: -2px;
  font-size: 16px;
`;
