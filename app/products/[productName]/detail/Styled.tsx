import { Container, color, font } from "@/styles/styledComponents/GlobalStyled";
import { styled } from "styled-components";

export const HeaderContent = styled(Container)`
  @media screen and (max-width: 576px) {
    margin-bottom: -32px;
  }
`;

export const ImageProduct = styled.div`
  width: 100%;
  height: auto;
`;

export const TitleProduct = styled.h1`
  font-size: 56px;
  font-style: italic;
  color: ${color.main};
  line-height: normal;
  margin: 40px 0;
  @media screen and (max-width: 767px) {
    font-size: 44px;
    margin: 35px 0;
  }
  @media screen and (max-width: 576px) {
    font-size: 25px;
    margin: 36px 0;
  }
`;

export const ContentSpecProduct = styled(Container)`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 50%;
  @media screen and (max-width: 991px) {
    gap: 20px;
    width: 100%;
  }
`;

export const ContentRight = styled(ContentLeft)``;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid ${color.border};
  border-radius: 8px;
  .key {
    width: 50%;
  }
  .value {
    width: 50%;
  }
  &#dimensi,
  &#lain-lain,
  &#mesin,
  &#berat,
  &#kapsitas-garda {
    .key {
      width: 60%;
    }
    .value {
      width: 20%;
    }
    .satuan {
      width: 20%;
    }
  }
`;

export const TitleCard = styled.p`
  font-family: ${font.heading};
  color: ${color.fh};
  font-weight: 700;
  margin-bottom: 15px;
`;

export const ListItemCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemCard = styled.div`
  display: flex;
  align-items: center;
`;

export const TextItem = styled.p``;
