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
import { Editor } from "primereact/editor";
import { Calendar } from "primereact/calendar";
import { parseStringToDate } from "@/utils/convertDate";
const api_backend = process.env.NEXT_PUBLIC_APP_API_BACKEND;

type FormData = {
  title: string;
  subtitle: string;
  published: string;
  expired: string;
  link: string;
  location: string;
  status: string;
  description: string;
  career_id: any;
};

const EditDialog: FC<IEditDialog> = ({
  setVisible,
  setDataNew,
  showToast,
  id,
}) => {
  const [dataOld, loadingDataOld] = useFetchUmum(`/api/career/${id}`);
  const [fetchTrigger] = useFetchTrigger<any>("/api/career");
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
      setValue("subtitle", dataOld?.data?.subtitle);
      setValue("published", dataOld?.data?.published);
      setValue("expired", parseStringToDate(dataOld?.data?.expired));
      setValue("link", dataOld?.data?.link);
      setValue("location", dataOld?.data?.location);
      setValue("status", dataOld?.data?.status);
      setValue("description", dataOld?.data?.description);
      setValue("career_id", dataOld?.data?.career_id);
    }
  }, [dataOld]);

  const onSubmit = async (data: FormData) => {
    try {
      data.career_id = id;
      const date = new Date(data.expired);
      const timestampString = date.getTime().toString();
      data.expired = timestampString;

      const response = await axios.put(`${api_backend}/api/career`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (response.status === 200) {
        const fetchDataNew = await fetchTrigger();
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
          name="subtitle"
          control={control}
          rules={{ required: "Subtitle is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="subtitle">Subtitle</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.subtitle?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="expired"
          control={control}
          rules={{ required: "Expired is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="expired">Expired</label>
                <Calendar
                  id={field.name}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  showIcon
                />
                <InfoError className="p-error">
                  {errors?.expired?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="link"
          control={control}
          rules={{ required: "Link is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="link">Link</label>
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
        <Controller
          name="location"
          control={control}
          rules={{ required: "Location is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="location">Location</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.location?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="status"
          control={control}
          rules={{ required: "Status is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="status">Status</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.status?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: "Description is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="description">Description</label>
                <Editor
                  id={field.name}
                  value={field.value}
                  onTextChange={(e) => field.onChange(e.textValue)}
                  style={{ height: "320px" }}
                />
                <InfoError className="p-error">
                  {errors?.description?.message}
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
