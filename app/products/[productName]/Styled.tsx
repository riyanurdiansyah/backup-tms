import {
  Btn,
  Container,
  FullContainer,
  color,
  font,
} from "@/styles/styledComponents/GlobalStyled";
import { styled } from "styled-components";

export const HeroContent = styled.div`
  width: 100vw;
  height: auto;
`;

export const ListContentProduct = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const ItemContentProduct = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8%;
  @media screen and (max-width: 991px) {
    flex-direction: column !important;
  }
`;

export const LeftItemContent = styled.div`
  width: 50%;
  height: fit-content;
  /* height: 40vw;
  max-height: 350px; */
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 991px) {
    width: 100%;
    /* height: 50vw; */
    margin-bottom: 30px;
  }
`;
export const RightItemContent = styled.div`
  width: 50%;
  h2 {
    font-size: 21px !important;
    line-height: normal !important;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 12px !important;
    font-family: ${font.reguler} !important;
    i {
      font-size: 14px !important;
    }
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const ButtonGroup = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const BtnItem = styled(Btn)`
  background: red;
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 767px) {
    border-radius: 4px;
  }
`;

export const GalleryContent = styled(Container)`
  .flickity-page-dots {
    bottom: 0;
  }
`;

export const TitleGallery = styled.h3`
  font-family: ${font.heading};
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  @media screen and (max-width: 767px) {
    /* margin-bottom: 15px; */
  }
`;

export const ListGallery = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  .flickity-button {
    display: none;
  }
`;
