"use client";

import React, { FC } from "react";
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
import { useFetchTrigger } from "@/utils/useFetchData";
import axios from "axios";
import useToken from "@/utils/useToken";
const api_backend = process.env.NEXT_PUBLIC_APP_API_BACKEND;

type FormData = {
  nama: string;
  image: File | null;
  video: File | null;
};

const CreateDialog: FC<ICreateDialog> = ({
  setVisible,
  setDataNew,
  showToast,
}) => {
  const [fetchTrigger] = useFetchTrigger<any>("/api/partner");
  const [token] = useToken();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    return file || null;
  };

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append("nama", data.nama);
      formData.append("image", data.image as File);
      formData.append("video", data.video as File);

      const response = await axios.post(
        `${api_backend}/api/partner`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      if (response.status === 201) {
        const fetchDataNew = await fetchTrigger();
        await setDataNew(fetchDataNew?.data);
        await showToast({
          type: "success",
          title: "Success",
          message: "Berhasil Menambahkan Data",
        });
        setVisible(false);
      } else {
        await showToast({
          type: "error",
          title: "Error",
          message: "Gagal Menambahkan Data",
        });
        setVisible(false);
      }
    } catch (error) {
      await showToast({
        type: "error",
        title: "Error",
        message: "Gagal Menambahkan Data",
      });
      setVisible(false);
    }
  };

  return (
    <CreateDialogContainer>
      <FormInput onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="nama"
          control={control}
          rules={{ required: "Name is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="nama">Name</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.nama?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <FormGroup>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  const newFile = handleFileUpload(e);
                  setValue("image", newFile);
                }}
              />
            </FormGroup>
          )}
        />
        <Controller
          name="video"
          control={control}
          render={({ field }) => (
            <FormGroup>
              <label htmlFor="image">Video</label>
              <input
                type="file"
                name="video"
                onChange={(e) => {
                  const newFile = handleFileUpload(e);
                  setValue("video", newFile);
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
    </CreateDialogContainer>
  );
};

interface ICreateDialog {
  setVisible: (e: boolean) => void;
  setDataNew: (e: any) => void;
  showToast: (data: ToastData) => void;
}
interface ToastData {
  type: "success" | "error" | "info";
  title: string;
  message: string;
}

export default CreateDialog;
