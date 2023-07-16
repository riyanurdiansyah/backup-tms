"use client";
import { styled } from "styled-components";
import { Btn, Container, color, font } from "../GlobalStyles";
import ImgBgPartner from "./assets/img-bg-partner.jpeg";

export interface IProps {
  source: any;
}

export const HeroWrapper = styled.div`
  width: 100%;
  max-height: calc(100vh - 60px);
  margin: auto;
  overflow: hidden;
  position: relative;
`;

// GET PARTNER
export const GetPartnerContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
  @media screen and (max-width: 576px) {
    padding-top: 50px;
  }
`;

export const GetPartnerLeft = styled.div`
  width: 60%;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const GetPartnerRight = styled.div`
  min-width: 440px;
  width: 40%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  @media screen and (max-width: 991px) {
    min-width: 320px;
  }
  @media screen and (max-width: 767px) {
    min-width: 250px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    align-items: center;
  }
`;

export const GetPartnerTitle = styled.h2`
  width: 100%;
  text-align: right;
  font-family: ${font.heading};
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 30px;
  @media screen and (max-width: 1199px) {
    font-size: 40px;
  }
  @media screen and (max-width: 991px) {
    font-size: 34px;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 576px) {
    text-align: center;
    align-items: center;
  }
`;

export const ButttonGetPartner = styled(Btn)`
  background: red;
  color: #fff;
  padding: 14px 28px;
  font-size: 18px;
  @media screen and (max-width: 991px) {
    padding: 12px 24px;
    font-size: 16px;
  }
  @media screen and (max-width: 767px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// PRODUCT
export const ProductWrapper = styled.div`
  width: 100%;
  padding-top: 120px;
`;

export const ProductContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export const ProductTitle = styled.h2`
  text-align: center;
  font-size: 44px;
  font-weight: 800;
  margin-bottom: 50px;
`;

export const ListProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 100px;
  height: auto;
  position: relative;
`;

export const CardProduct = styled.div`
  height: auto;
  position: relative;
  cursor: pointer;
  filter: grayscale(100%);
  transition: all 0.5s;
  &:hover {
    font-weight: 700;
    filter: grayscale(0);
  }
`;

export const HeadCardProduct = styled.div`
  height: 350px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const ImgBG = styled.div<IProps>`
  background: ${(props) => props.source && `url(${props.source.src})`};
  background-position: center;
  background-repeat: no-repeat;
  width: 60%;
  height: 350px;
  position: absolute;
  bottom: 0;
  z-index: -1;
  border-radius: 8px;
`;

export const TitleCardProduct = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: ${color.fh};
  margin-top: 16px;
`;

// SERVICE
export const ServiceWrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  margin-top: 120px;
  background: linear-gradient(180deg, #e6e4e5 32.29%, #fff 100%);
`;

export const ServiceContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ServiceLeft = styled.div`
  width: 40%;
  height: 350px;
  position: relative;
`;

export const ServiceRight = styled.div`
  width: 55%;
`;

export const ServiceTitle = styled.h2`
  font-size: 44px;
  font-weight: 800;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const ServiceDesc = styled.p`
  margin-bottom: 30px;
`;

export const BtnService = styled(ButttonGetPartner)``;

// VALUE
export const ValueWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 120px;
`;

export const ValueContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ValueTitle = styled.h2`
  font-size: 44px;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const ValueDesc = styled.p`
  text-align: center;
  margin-bottom: 40px;
`;

export const ListValue = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const CardValue = styled.div`
  flex-basis: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardValueTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 15px;
`;

// MY PARTNER
export const MyPartnerWrapper = styled.div`
  width: 100%;
  position: relative;
  background: transparent;
  &::before {
    width: 100%;
    height: 100%;
    content: " ";
    display: block;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    opacity: 0.2;
    background-image: url(${ImgBgPartner.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const MyPartnerContainer = styled.div`
  padding: 100px 0 120px 0;
  width: 80%;
  margin: auto;
`;

export const MyPartnerTitle = styled.h2`
  font-size: 44px;
  font-weight: 800;
  margin-bottom: 60px;
  text-align: center;
`;

export const ListMyPartner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
`;

// TESTIMONY
export const TestimonyWrapper = styled.div`
  width: 100%;
  background: linear-gradient(264deg, #727272 0%, #e5d4d4 100%);
`;

export const TestimonyContainer = styled.div`
  padding: 100px 0;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TestimonyTitle = styled.h2`
  font-size: 44px;
  font-weight: 800;
  margin-bottom: 60px;
  text-align: center;
`;

export const ListTestimony = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
`;

export const Cardtestimony = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #464646;
  flex-basis: calc(100% / 3);
  padding: 30px;
  border-radius: 20px;
`;

export const CardProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
`;

export const StarGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const CardDesc = styled.p`
  color: #dedede;
  font-size: 14px;
  font-style: italic;
`;

export const CardLine = styled.hr`
  width: 100%;
  border: 2px solid #dedede;
  border-radius: 10px;
  margin: 15px 0;
`;

export const CardUserName = styled.p`
  color: #dedede;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const TestimonyDesc = styled.p`
  color: #fff;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Btntestimony = styled(ButttonGetPartner)``;
