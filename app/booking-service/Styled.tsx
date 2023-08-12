"use client";
import {
  Btn,
  Container,
  color,
  font,
} from "@/styles/styledComponents/GlobalStyled";
import { styled } from "styled-components";

export const ContainerBS = styled(Container)`
  max-width: 914px;
  margin-top: 80px;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: normal;
  margin-bottom: 15px;
  text-transform: uppercase;
  text-align: center;
`;

export const Subtitle = styled.p`
  margin-bottom: 45px;
  font-size: 18px;
  text-align: center;
`;

export const BoxBS = styled.div`
  width: 100%;
  max-width: 693px;
  padding: 32px;
  background: ${color.main};
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: auto;
`;

export const BoxTitle = styled.h3`
  font-size: 24px;
  line-height: normal;
  color: #ffffff;
  margin-bottom: 32px;
`;

export const CardBox = styled.div`
  border-radius: 10px;
  background: #f3f3f3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 25px;
`;

export const CardHead = styled.div`
  background: #d9d9d9;
  border-radius: 10px 10px 0 0;
  padding: 12px 16px;
`;

export const CardTitle = styled.div`
  color: ${color.fh};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 20px 16px;
  width: 100%;
`;

export const RowInput = styled.div`
  display: flex;
  align-items: center;
`;

export const LForm = styled.label`
  width: 30%;
  min-width: 200px;
  color: ${color.fr};
  font-family: ${font.reguler};
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
`;

export const DropdownFull = styled.div`
  width: 70%;
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
    font-style: italic;
  }
`;

export const RowDoubleInput = styled.div`
  display: flex;
  gap: 12px;
  width: 70%;
`;

export const RowDoubleRadioBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  width: 70%;
  height: 40px;
`;

export const RadioBtn = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IRadioBtn = styled.input`
  cursor: pointer;
`;

export const LRadioBtn = styled.label`
  color: ${color.fr};
  font-family: ${font.reguler};
`;

export const RowServiceTime = styled.div`
  display: flex;
  width: 70%;
  gap: 35px;
`;

export const ColInputDate = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const IDate = styled.input`
  width: 100%;
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
`;

export const InfoTimeService = styled.p`
  font-size: 10px;
  line-height: normal;
  font-style: italic;
`;

export const InfoAccept = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 35px;
`;

export const TextInfoAccept = styled.p`
  color: #ffffff;
  font-weight: 500;
`;

export const BtnSubmit = styled(Btn)`
  background: #ffffff;
  color: ${color.fh};
  font-weight: 600;
  border-radius: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    background: #ffffff;
  }
  @media screen and (max-width: 767px) {
    border-radius: 4px;
  }
`;

export const TextFooter = styled(Subtitle)`
  margin-top: 60px;
  color: ${color.fh};
`;

export const LogoGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2%;
  margin: auto;
`;
