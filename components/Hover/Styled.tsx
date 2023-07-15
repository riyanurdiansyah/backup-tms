"use client";
import { color } from "@/app/GlobalStyles";
import { styled } from "styled-components";

export const HoverBox = styled.div`
  position: relative;
`;

export const ChildrenComponent = styled.div`
  padding: 0px;
  &:hover {
    cursor: pointer;
  }
  &:hover ~ .hover-komponen {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const DropdownComponent = styled.div`
  position: absolute;
  padding-top: 5px;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(5px);
  visibility: hidden;
  transition: 300ms;
  z-index: 15;
  display: flex;
  flex-direction: column;
  width: fit-content;
  &:hover {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const ListMenuDropdown = styled.div`
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid ${color.border};
  width: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemMenuDropdown = styled.p`
  font-size: 14px;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 10px;
  transition: all 0.5s;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${color.secondary};
  }
`;
