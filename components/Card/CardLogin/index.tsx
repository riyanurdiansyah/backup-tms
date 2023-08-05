"use client";

import React, { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  BodyCard,
  Card,
  FormGroup,
  FormLogin,
  HeadCard,
  InfoError,
  LabelCheckbox,
  Remember,
  Subtitle,
  Title,
} from "./Styles";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/checkbox";

type FormData = {
  username: string;
  password: string;
};

const CardLogin: FC<ICardLogin> = ({}) => {
  const [remember, setRemember] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle login logic here using data.username and data.password
  };

  return (
    <Card>
      <HeadCard>
        <Title>Login</Title>
        <Subtitle>Please enter your details</Subtitle>
      </HeadCard>
      <BodyCard>
        <FormLogin onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            rules={{ required: "Username is required." }}
            render={({ field, fieldState }) => (
              <>
                <FormGroup className="p-input-icon-left">
                  <i className="pi pi-envelope" />
                  <InputText
                    id={field.name}
                    value={field.value}
                    className={classNames({ "p-invalid": fieldState.error })}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="Email"
                    style={{ width: "100%" }}
                  />
                  <InfoError className="p-error">
                    {errors?.username?.message}
                  </InfoError>
                </FormGroup>
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required." }}
            render={({ field, fieldState }) => (
              <>
                <FormGroup className="p-input-icon-left">
                  <i className="pi pi-lock" />
                  <InputText
                    id={field.name}
                    type="password"
                    value={field.value}
                    className={classNames({ "p-invalid": fieldState.error })}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="Password"
                    style={{ width: "100%" }}
                  />
                  <InfoError className="p-error">
                    {errors?.password?.message}
                  </InfoError>
                </FormGroup>
              </>
            )}
          />
          <Remember>
            <Checkbox
              inputId="remember"
              onChange={() => setRemember(!remember)}
              checked={remember}
            />
            <LabelCheckbox htmlFor="remember">Remember me</LabelCheckbox>
          </Remember>
          <Button label="Log in" type="submit" severity="danger" />
        </FormLogin>
      </BodyCard>
    </Card>
  );
};

interface ICardLogin {}

export default CardLogin;
