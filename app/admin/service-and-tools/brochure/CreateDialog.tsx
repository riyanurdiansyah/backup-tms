"use client";

import React, { FC, useRef, useState } from "react";
import {
  ButtonGroup,
  CreateDialogContainer,
  FormGroup,
  FormInput,
  InfoError,
} from "./Styled";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";

type FormData = {
  title: string;
  link: string;
};

const CreateDialog: FC<ICreateDialog> = ({ setVisible }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle login logic here using data.title, data.link, and uploadedFiles
  };

  // const [file, setFile] = useState<File>();
  // const [imageUrl, setImageUrl] = useState<string>("");

  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append("file", file);

  //   try {
  //     const res = await fetch("/api/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (!res.ok) {
  //       console.error("something went wrong, check your console.");
  //       return;
  //     }

  //     const data: { fileUrl: string } = await res.json();
  //     console.log(data.fileUrl);
  //     setImageUrl(data.fileUrl);
  //   } catch (error) {
  //     console.error("something went wrong, check your console.");
  //   }
  // };

  return (
    <CreateDialogContainer>
      <FormInput onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="title">Title</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.title?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="link"
          control={control}
          rules={{ required: "Link File is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="link">Link File</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.link?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />

        <ButtonGroup>
          <Button
            label="Cancel"
            icon="pi pi-times"
            text
            onClick={(e: any) => {
              e.preventDefault();
              setVisible(false);
            }}
          />
          <Button label="Save" type="submit" icon="pi pi-check" />
        </ButtonGroup>
      </FormInput>
      {/* <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <input type="submit" value="Upload" />
      </form> */}
    </CreateDialogContainer>
  );
};

interface ICreateDialog {
  setVisible: (e: boolean) => void;
}
export default CreateDialog;
