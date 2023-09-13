import { Container, color, font } from "@/styles/styledComponents/GlobalStyled";
import { styled } from "styled-components";

export const ContainerSC = styled(Container)`
  max-width: 914px;
  margin-top: 80px;
  @media screen and (max-width: 767px) {
    padding: 0 16px;
  }
  @media screen and (max-width: 575px) {
    margin-top: 40px;
  }
`;

export const Title = styled.p`
  margin-bottom: 45px;
  font-size: 18px;
  text-align: center;
`;

export const BoxSC = styled.div`
  width: 100%;
  max-width: 693px;
  padding: 32px;
  background: ${color.main};
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: auto;
  @media screen and (max-width: 575px) {
    padding: 24px 16px;
    border-radius: 15px;
  }
`;

export const BoxTitle = styled.h3`
  font-size: 24px;
  line-height: normal;
  color: #ffffff;
  margin-bottom: 32px;
  @media screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 21px;
  }
`;

export const CardBox = styled.div`
  border-radius: 10px;
  background: #f3f3f3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 25px;
  @media screen and (max-width: 575px) {
    margin-bottom: 16px;
  }
`;

export const RowInput = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LForm = styled.label`
  width: 30%;
  min-width: 200px;
  color: ${color.fr};
  font-family: ${font.reguler};
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

export const IText = styled.input`
  width: 70%;
  height: 40px;
  border: 1px solid ${color.border};
  padding: 0 10px;
  color: ${color.fr};
  font-family: ${font.reguler};
  font-weight: 500;
  background: #d9d9d9;
  &::placeholder {
    font-size: 14px;
    font-style: italic;
  }
  &disabled {
    color: ${color.fr} !important;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const DropdownFull = styled.div`
  width: 70%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const DropdownName = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${color.border};
  border-radius: 6px;
  background: #d9d9d9;
  padding: 0 10px;
  cursor: pointer;
  .text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    gap: 20px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const ValueText = styled.p`
  color: ${color.fr};
  font-family: ${font.heading};
  font-weight: 700;
  font-size: 32px;
`;

export const TextFooter = styled(Title)`
  margin-bottom: 0;
  color: #ffffff;
  font-size: 14px;
  font-style: italic;
  text-align: left;
`;
