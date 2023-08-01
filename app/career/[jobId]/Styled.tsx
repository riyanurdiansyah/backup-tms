"use client";
import { Btn, Container, color } from "@/styles/styledComponents/GlobalStyled";
import { styled } from "styled-components";

export const HeadContent = styled(Container)`
  display: flex;
  gap: 30px;
  padding: 40px 0;
  margin-bottom: 60px;
  border-bottom: 3px solid ${color.border};
`;
export const CardImgBrand = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border: 2px solid ${color.border};
  background: url("/logo-tms.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const HeadBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleHead = styled.h1`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 16px;
`;

export const ListInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 20px;
`;

export const ItemInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
`;

export const BtnApply = styled(Btn)`
  width: 100%;
  max-width: 150px;
  padding: 10px 10px;
`;

export const BodyContent = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const BodyItem = styled.div``;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Description = styled.p``;
