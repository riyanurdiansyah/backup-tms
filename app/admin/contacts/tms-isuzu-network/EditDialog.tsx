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
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";
import useToken from "@/utils/useToken";
const api_backend = process.env.NEXT_PUBLIC_APP_API_BACKEND;

type FormData = {
  name: string;
  subtitle: string;
  latitude: number;
  longitude: number;
  phone: string;
  location: string;
  cabang_id: string;
  dealer_id: any;
};

const EditDialog: FC<IEditDialog> = ({
  setVisible,
  setDataNew,
  showToast,
  id,
}) => {
  const [dataOld, loadingDataOld] = useFetchUmum(`/api/dealer/${id}`);
  const [fetchTrigger] = useFetchTrigger<any>("/api/dealer");
  const [token] = useToken();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  useEffect(() => {
    if (dataOld) {
      setValue("name", dataOld?.data?.name);
      setValue("subtitle", dataOld?.data?.subtitle);
      setValue("latitude", dataOld?.data?.latitude);
      setValue("longitude", dataOld?.data?.longitude);
      setValue("phone", dataOld?.data?.phone);
      setValue("location", dataOld?.data?.location);
      setValue("cabang_id", dataOld?.data?.cabang_id);
    }
  }, [dataOld]);

  const onSubmit = async (data: FormData) => {
    try {
      data.dealer_id = id;
      data.cabang_id = "cbx-001";
      const response = await axios.put(`${api_backend}/api/dealer`, data, {
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
          name="name"
          control={control}
          rules={{ required: "Name is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="title">Name</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.name?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="subtitle"
          control={control}
          rules={{ required: "Category is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="subtitle">Category</label>
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
          name="latitude"
          control={control}
          rules={{ required: "Latitude is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="latitude">Latitude</label>
                <InputNumber
                  id={field.name}
                  value={field.value}
                  defaultValue={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onValueChange={(e) => field.onChange(e.value)}
                  useGrouping={false}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.latitude?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="longitude"
          control={control}
          rules={{ required: "Longitude is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="longitude">Longitude</label>
                <InputNumber
                  id={field.name}
                  value={field.value}
                  defaultValue={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onValueChange={(e) => field.onChange(e.value)}
                  useGrouping={false}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.longitude?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Phone is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="phone">Phone</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.phone?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="location"
          control={control}
          rules={{ required: "Address is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="location">Address</label>
                <InputTextarea
                  autoResize
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  rows={5}
                  cols={30}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.location?.message}
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
