"use client";
import React from "react";
import {
  Btntestimony,
  CardDesc,
  CardLine,
  CardProfile,
  CardUserName,
  Cardtestimony,
  InfoContact,
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
import Flickity from "react-flickity-component";
import CardTestimony from "@/components/Card/CardTestimony";

const Testimony = () => {
  return (
    <TestimonyWrapper>
      <TestimonyContainer>
        <TestimonyTitle>Testimoni</TestimonyTitle>
        <ListTestimony>
          <Flickity
            className={"carousel-list-product"}
            options={{
              cellAlign: "left",
              contain: true,
              groupCells: true,
              pageDots: false,
              draggable: true,
            }}
          >
            <CardTestimony />
            <CardTestimony />
            <CardTestimony />
          </Flickity>
        </ListTestimony>
        <InfoContact>
          <TestimonyDesc>
            Segera hubungi kami untuk mendapatkan partner bisnis Anda
          </TestimonyDesc>
          <Btntestimony
            onClick={() =>
              window.open(
                "https://wa.me/6281326017533?text=Hallo TMS Isuzu, Saya ingin bertanya.",
                "_blank"
              )
            }
          >
            Hubungi Kami
          </Btntestimony>
        </InfoContact>
      </TestimonyContainer>
    </TestimonyWrapper>
  );
};

// const Card = ()=>{
//     return (
//       <Cardtestimony>
//         <CardProfile>
//           <Image src={ImgAvatarDefault} alt="" width={50} />
//           <StarReview />
//         </CardProfile>
//         <CardDesc>
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           Consequuntur natus vero, laudantium cumque voluptatibus in, explicabo,
//           odio commodi illo quis maxime enim iusto odit nisi nulla labore!
//           Minima, provident tenetur!"
//         </CardDesc>
//         <CardLine />
//         <CardUserName>Saripudin</CardUserName>
//       </Cardtestimony>
//     );
// }

// const colorStar = "yellow";
// const sizeStar = 30;

// const StarReview = () => {
//   return (
//     <StarGroup>
//       <TiStarFullOutline color={colorStar} size={sizeStar} />
//       <TiStarFullOutline color={colorStar} size={sizeStar} />
//       <TiStarFullOutline color={colorStar} size={sizeStar} />
//       <TiStarFullOutline color={colorStar} size={sizeStar} />
//       <TiStarFullOutline color={colorStar} size={sizeStar} />
//     </StarGroup>
//   );
// };

export default Testimony;
