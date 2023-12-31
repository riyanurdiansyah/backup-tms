"use client";
import { styled } from "styled-components";
import {
  Btn,
  Container,
  color,
  font,
} from "../../styles/styledComponents/GlobalStyled";
import ImgBgPartner from "./assets/img-bg-partner.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export interface IProps {
  source: {
    src: string;
  };
}

export const HeroWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  margin: auto;
  overflow: hidden;
  position: relative;
  .flickity-button {
    display: none;
  }
  .flickity-page-dots {
    bottom: 10%;
  }
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
  @media screen and (max-width: 767px) {
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
    width: 100%;
    align-items: flex-start;
  }
`;

export const GetPartnerTitle = styled.h2`
  width: 100%;
  text-align: right;
  font-family: ${font.heading};
  font-weight: 500;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
    text-align: left;
    align-items: flex-start;
  }
`;

export const ButttonGetPartner = styled(Btn)`
  background: red;
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
  padding: 15px 34px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 767px) {
    border-radius: 4px;
    padding: 11px 24px;
  }
`;

// PRODUCT
export const ProductWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  @media screen and (max-width: 767px) {
    padding-top: 60px;
  }
`;

export const ProductContainer = styled(Container)``;

export const ProductTitle = styled.h2`
  font-family: ${font.heading};
  text-align: center;
  font-weight: 800;
  margin-bottom: 60px;
  @media screen and (max-width: 767px) {
    margin-bottom: 35px;
  }
`;

export const ListProduct = styled.div`
  .flickity-button {
    background-color: ${color.border};
    outline: none;
    border: none;
    box-shadow: none;
    &.previous {
      left: -20px;
    }
    &.next {
      right: -20px;
    }
  }
  @media screen and (min-width: 1200px) {
    .flickity-button {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .flickity-button {
      display: none;
    }
  }
  @media screen and (min-width: 576px) {
    .flickity-page-dots {
      display: none;
    }
  }
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  height: auto;
  position: relative; */
`;

export const CardProduct = styled.div`
  height: auto;
  position: relative;
  cursor: pointer;
  filter: grayscale(100%);
  transition: all 0.5s;
  width: calc((100% - 40px) / 3);
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    font-weight: 700;
    filter: grayscale(0);
  }
  @media screen and (max-width: 991px) {
    width: calc((100% - 20px) / 2);
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    &.is-selected {
      filter: grayscale(0);
    }
  }
`;

export const HeadCardProduct = styled.div`
  height: 350px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  /* @media screen and (max-width: 991px) {
    height: 300px;
  }
  @media screen and (max-width: 767px) {
    height: 250px;
  } */
`;

export const ImgBG = styled.div<IProps>`
  background: ${(props) => props?.source && `url(${props.source.src})`};
  background-position: center;
  background-repeat: no-repeat;
  width: 60%;
  height: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
  border-radius: 8px;
`;

export const TitleCardProduct = styled.h4`
  text-align: center;
  font-weight: 700;
  margin-top: 16px;
`;

// SERVICE
export const ServiceWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 100px 0;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(201, 200, 200, 0.69) 49.48%,
    rgba(229, 229, 229, 0) 100%
  );
  @media screen and (max-width: 767px) {
    margin-top: 30px;
    padding: 60px 0;
  }
`;

export const ServiceContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5%;
  padding: 0 5%;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    padding: 0;
    gap: 45px;
  }
  @media screen and (max-width: 576px) {
    padding: 0 16px;
  }
`;

export const ServiceLeft = styled.div`
  width: 50%;
  height: 40vw;
  max-height: 350px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 50vw;
  }
`;

export const ServiceRight = styled.div`
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ServiceTitle = styled(ProductTitle)`
  text-transform: capitalize;
  text-align: left;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
  }
`;

export const ServiceDesc = styled.p`
  color: ${color.fh};
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const BtnService = styled(ButttonGetPartner)``;

// VALUE
export const ValueWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 100px;
  @media screen and (max-width: 767px) {
    padding-bottom: 80px;
  }
`;

export const ValueContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1000px) {
    max-width: 1000px;
  }
  @media screen and (max-width: 767px) {
    align-items: flex-start;
  }
`;

export const ValueTitle = styled(ProductTitle)`
  margin-bottom: 20px;
  text-align: center;
  @media screen and (max-width: 767px) {
    text-align: left;
  }
`;

export const ValueDesc = styled.p`
  text-align: center;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    text-align: left;
    margin-bottom: 30px;
  }
`;

export const ListValue = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap: 12px;
  }
`;

export const CardValue = styled.div`
  width: calc((100% - (16px * 4)) / 5);
  min-width: 140px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    gap: 16px;
    width: 100%;
    padding: 16px;
    border: 1.5px solid ${color.border};
    border-radius: 6px;
  }
`;

export const CardValueTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  margin-top: 15px;
  @media screen and (max-width: 767px) {
    margin: 0;
    text-align: left;
  }
`;

// MY PARTNER
export const MyPartnerWrapper = styled.div`
  width: 100%;
  position: relative;
  background: transparent;
  margin-bottom: -100px;
  &::before {
    width: 100%;
    height: 100%;
    content: " ";
    display: block;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    background-image: url(${ImgBgPartner.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const MyPartnerContainer = styled(Container)`
  padding: 100px 0;
  @media screen and (max-width: 767px) {
    padding: 80px 16px;
  }
`;

export const MyPartnerTitle = styled(ProductTitle)`
  text-align: center;
`;

export const ListMyPartner = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center; */
  width: 100%;
  max-height: calc(100vh - 60px);
  margin: auto;
  overflow: hidden;
  position: relative;
  .flickity-button {
    display: none;
  }
  .flickity-page-dots {
    bottom: 10%;
    @media screen and (max-width: 767px) {
      bottom: 5%;
    }
  }
`;

export const ItemMyPartner = styled.div`
  width: calc(100% / 4);
  @media screen and (max-width: 767px) {
    max-height: 35vw;
    width: calc(100% / 2);
    display: flex;
    align-items: center;
  }
`;

export const CardMyPartner = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LeftContentCard = styled.div`
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const RightContentCard = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 20px 0;
  }
  /* justify-content: center; */
`;

export const TextContentRight = styled.h4`
  padding-left: 35px;
  font-weight: 600;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

// TESTIMONY
export const TestimonyWrapper = styled.div`
  width: 100%;
  background: linear-gradient(0deg, #2b2b2b 0%, #ffffff 100%);
  margin-bottom: -100px;
`;

export const TestimonyContainer = styled(Container)`
  padding: 100px 0;
  @media screen and (max-width: 576px) {
    padding: 80px 16px;
  }
`;

export const TestimonyTitle = styled(ProductTitle)`
  text-align: center;
`;

export const ListTestimony = styled(ListProduct)`
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

export const InfoContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardUserName = styled.p`
  color: #dedede;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const TestimonyDesc = styled.p`
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

export const Btntestimony = styled(ButttonGetPartner)``;

export const IconArrowRight = styled(MdOutlineKeyboardArrowRight)`
  font-size: 22px;
`;
