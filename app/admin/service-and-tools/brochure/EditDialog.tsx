"use client";

import React, { FC, useEffect } from "react";
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
import { useFetchTrigger, useFetchUmum } from "@/utils/useFetchData";
import axios from "axios";
import useToken from "@/utils/useToken";
const api_backend = process.env.NEXT_PUBLIC_APP_API_BACKEND;

type FormData = {
  title: string;
  thumbnail: File | null;
  brochure: File | null;
};

const EditDialog: FC<IEditDialog> = ({
  setVisible,
  setDataNew,
  showToast,
  id,
}) => {
  const [dataOld, loadingDataOld] = useFetchUmum(`/api/brochure/${id}`);
  const [fetchTriggerBrochure] = useFetchTrigger<any>("/api/brochure");
  const [token] = useToken();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  useEffect(() => {
    if (dataOld) {
      setValue("title", dataOld?.data?.title);
    }
  }, [dataOld]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    return file || null;
  };

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("thumbnail", data.thumbnail as File);
      formData.append("brochure", data.brochure as File);

      const response = await axios.put(
        `${api_backend}/api/brochure/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      if (response.status === 201) {
        const fetchDataNew = await fetchTriggerBrochure();
        await setDataNew(fetchDataNew?.data);
        await showToast({
          type: "success",
          title: "Success",
          message: "Berhasil Mengubah Data",
        });
        setVisible(false);
      } else {
        await showToast({
          type: "error",
          title: "Error",
          message: "Gagal Mengubah Data",
        });
        setVisible(false);
      }
    } catch (error) {
      await showToast({
        type: "error",
        title: "Error",
        message: "Gagal Mengubah Data",
      });
      setVisible(false);
    }
  };

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
          name="thumbnail"
          control={control}
          render={({ field }) => (
            <FormGroup>
              <label htmlFor="thumbnail">Thumbnail</label>
              <input
                type="file"
                name="thumbnail"
                onChange={(e) => {
                  const newFile = handleFileUpload(e);
                  setValue("thumbnail", newFile);
                }}
              />
            </FormGroup>
          )}
        />
        <Controller
          name="brochure"
          control={control}
          render={({ field }) => (
            <FormGroup>
              <label htmlFor="file">Brochure</label>
              <input
                type="file"
                name="brochure"
                onChange={(e) => {
                  const newFile = handleFileUpload(e);
                  setValue("brochure", newFile);
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

interface IEditDialog {
  setVisible: (e: boolean) => void;
  setDataNew: (e: any) => void;
  showToast: (data: ToastData) => void;
  id: any;
}
interface ToastData {
  type: "success" | "error" | "info";
  title: string;
  message: string;
}

export default EditDialog;
