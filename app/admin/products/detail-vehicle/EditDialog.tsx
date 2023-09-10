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
import { Dropdown } from "primereact/dropdown";
const api_backend = process.env.NEXT_PUBLIC_APP_API_BACKEND;

type FormData = {
  product_id: string | null;
  category: string;
  title: string;
  satuan: string;
  keterangan: string;
  product_spesification_id: any;
};

const EditDialog: FC<IEditDialog> = ({
  setVisible,
  setDataNew,
  showToast,
  id,
}) => {
  const [dataOld, loadingDataOld] = useFetchUmum(`/api/product/spec/${id}`);
  const [fetchTrigger] = useFetchTrigger<any>("/api/product/spec");
  const [vehicleData] = useFetchUmum("/api/product");
  const [token] = useToken();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  useEffect(() => {
    if (dataOld) {
      setValue(
        "product_id",
        vehicleData?.data?.find(
          (item: any) => item.product_id === dataOld?.data?.product_id
        )
      );
      setValue("category", dataOld?.data?.category);
      setValue("title", dataOld?.data?.title);
      setValue("satuan", dataOld?.data?.satuan);
      setValue("keterangan", dataOld?.data?.keterangan);
      setValue(
        "product_spesification_id",
        dataOld?.data?.product_spesification_id
      );
    }
  }, [dataOld]);

  const onSubmit = async (data: any) => {
    try {
      data.product_id = data.product_id.product_id;
      data.product_spesification_id = id;

      const response = await axios.put(
        `${api_backend}/api/product/spec`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
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
          name="product_id"
          control={control}
          rules={{ required: "Vehicle is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="product_id">Vehicle</label>
                <Dropdown
                  id={field.name}
                  value={field.value}
                  placeholder="Pilih Vehicle"
                  options={vehicleData?.data}
                  optionLabel="name"
                  focusInputRef={field.ref}
                  onChange={(e) => field.onChange(e.value)}
                  className={classNames({ "p-invalid": fieldState.error })}
                />
                <InfoError className="p-error">
                  {errors?.product_id?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="category"
          control={control}
          rules={{ required: "Category is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="category">Category</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.category?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
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
          name="satuan"
          control={control}
          rules={{ required: "Satuan is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="satuan">Satuan</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.satuan?.message}
                </InfoError>
              </FormGroup>
            </>
          )}
        />
        <Controller
          name="keterangan"
          control={control}
          rules={{ required: "Keterangan is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="keterangan">Keterangan</label>
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  style={{ width: "100%" }}
                />
                <InfoError className="p-error">
                  {errors?.keterangan?.message}
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
