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
import axios from "axios";
import useToken from "@/utils/useToken";

type FormData = {
  title: string;
  file: File | null;
};

const CreateDialog: FC<ICreateDialog> = ({ setVisible }) => {
  const [token] = useToken();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue, // Import setValue from react-hook-form
  } = useForm<FormData>();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    return file || null;
  };

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      const formData = new FormData();
      formData.append("nama", data.title);
      formData.append("file", data.file as File); // Pastikan data.file tidak null

      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      };

      const response = await axios.post(
        "http://174.138.27.68/api/book",
        formData,
        {
          headers: headers,
        }
      );

      if (response.status === 201) {
        console.log("Data uploaded successfully");
        setVisible(false);
      } else {
        console.error("Error uploading data to API");
      }
    } catch (error) {
      console.error("Error:", error);
    }

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
          name="file"
          control={control}
          render={({ field }) => (
            <FormGroup>
              <label htmlFor="file">File</label>
              <input
                type="file"
                name="file"
                onChange={(e) => {
                  const newFile = handleFileUpload(e);
                  setValue("file", newFile);
                }}
              />
            </FormGroup>
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
