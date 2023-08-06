"use client";
import { CardAdmin } from "@/styles/styledComponents/GlobalStyled";
import React from "react";
import {
  ContainerSosmed,
  InputGroup,
  InputIcon,
  ListInputText,
  Title,
} from "./Styled";
import { InputText } from "primereact/inputtext";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbMailFilled } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "primereact/button";

const SocialMediaContent = () => {
  return (
    <>
      <CardAdmin style={{ minHeight: "100%" }}>
        <ContainerSosmed>
          {/* <Title>Social Media</Title> */}
          <ListInputText>
            <InputGroup>
              <InputIcon>
                <FaFacebookF />
              </InputIcon>
              <InputText
                type="text"
                placeholder="link facebook"
                style={{ width: "100%" }}
              />
            </InputGroup>
            <InputGroup>
              <InputIcon>
                <FaTwitter />
              </InputIcon>
              <InputText
                type="text"
                placeholder="link twitter"
                style={{ width: "100%" }}
              />
            </InputGroup>
            <InputGroup>
              <InputIcon>
                <AiFillInstagram />
              </InputIcon>
              <InputText
                type="text"
                placeholder="link instagram"
                style={{ width: "100%" }}
              />
            </InputGroup>
            <InputGroup>
              <InputIcon>
                <TbMailFilled />
              </InputIcon>
              <InputText
                type="text"
                placeholder="email address"
                style={{ width: "100%" }}
              />
            </InputGroup>
            <InputGroup>
              <InputIcon>
                <BsWhatsapp />
              </InputIcon>
              <InputText
                type="text"
                placeholder="nomor whatsapp"
                style={{ width: "100%" }}
              />
            </InputGroup>
            <Button label="Save" severity="danger" />
          </ListInputText>
        </ContainerSosmed>
      </CardAdmin>
    </>
  );
};

export default SocialMediaContent;
