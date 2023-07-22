import React from "react";
import { CardWelcome, TitleAdmin } from "./Styled";
import Image from "next/image";
import ImgColab from "../../public/logo-colab.png";

const AdminPage = () => {
  return (
    <CardWelcome>
      <TitleAdmin>Welcome to Admin Panel</TitleAdmin>
      <Image
        src={ImgColab}
        alt=""
        layout="responsive"
        objectFit="contain"
        style={{ width: "80%", maxWidth: "400px", height: "auto" }}
      />
    </CardWelcome>
  );
};

export default AdminPage;
