import React from "react";
import { ContainerLogin } from "./Styles";
import CardLogin from "@/components/Card/CardLogin";

const LoginPage = () => {
  return (
    <div className="login-page-wrapper">
      <ContainerLogin>
        <CardLogin />
      </ContainerLogin>
    </div>
  );
};

export default LoginPage;
