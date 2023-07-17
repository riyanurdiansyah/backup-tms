"use client";
import {
  Container,
  FullContainer,
  color,
} from "@/styles/styledComponents/GlobalStyled";
import { styled } from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const BreadcrumbWrapper = styled(FullContainer)`
  background-color: #f9fafc;
`;

export const ContainerBreadcrumb = styled(Container)`
  padding: 15px 0;
`;

export const ListBreadcrumb = styled.ul`
  display: flex;
  align-items: center;
  color: ${color.fr};
  font-size: 14px;
  font-weight: 600;
  gap: 4px;
`;

export const IconArrow = styled(MdOutlineKeyboardArrowRight)`
  font-size: 16px;
`;

export const ItemBreadcrumb = styled.li`
  cursor: pointer;
  &:hover {
    color: ${color.main};
  }
`;
