import React from "react";
import {
  Btntestimony,
  CardDesc,
  CardLine,
  CardProfile,
  CardUserName,
  Cardtestimony,
  ListTestimony,
  StarGroup,
  TestimonyContainer,
  TestimonyDesc,
  TestimonyTitle,
  TestimonyWrapper,
} from "./Styles";

import { TiStarFullOutline } from "react-icons/ti";
import Image from "next/image";
import ImgAvatarDefault from "./assets/img-dummy-avatar.png";

const Testimony = () => {
  return (
    <TestimonyWrapper>
      <TestimonyContainer>
        <TestimonyTitle>Testimoni</TestimonyTitle>
        <ListTestimony>
          <Card />
          <Card />
          <Card />
        </ListTestimony>
        <TestimonyDesc>
          Segera hubungi kami untuk mendapatkan partner bisnis Anda
        </TestimonyDesc>
        <Btntestimony>Hubungi Kami</Btntestimony>
      </TestimonyContainer>
    </TestimonyWrapper>
  );
};

const Card = ()=>{
    return (
      <Cardtestimony>
        <CardProfile>
          <Image src={ImgAvatarDefault} alt="" width={50} />
          <StarReview />
        </CardProfile>
        <CardDesc>
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur natus vero, laudantium cumque voluptatibus in, explicabo,
          odio commodi illo quis maxime enim iusto odit nisi nulla labore!
          Minima, provident tenetur!"
        </CardDesc>
        <CardLine />
        <CardUserName>Saripudin</CardUserName>
      </Cardtestimony>
    );
}

const colorStar = "yellow";
const sizeStar = 30;

const StarReview = () => {
  return (
    <StarGroup>
      <TiStarFullOutline color={colorStar} size={sizeStar} />
      <TiStarFullOutline color={colorStar} size={sizeStar} />
      <TiStarFullOutline color={colorStar} size={sizeStar} />
      <TiStarFullOutline color={colorStar} size={sizeStar} />
      <TiStarFullOutline color={colorStar} size={sizeStar} />
    </StarGroup>
  );
};

export default Testimony;
