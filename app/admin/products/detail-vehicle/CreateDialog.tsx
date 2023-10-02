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
import {
  useFetchTrigger,
  useFetchUmum,
  usePostUmum,
} from "@/utils/useFetchData";
import { Dropdown } from "primereact/dropdown";

type FormData = {
  product_id: string | null;
  category: string | null;
  title: string;
  satuan: string;
  keterangan: string;
};

const CreateDialog: FC<ICreateDialog> = ({
  setVisible,
  setDataNew,
  showToast,
}) => {
  const [postData] = usePostUmum("/api/product/spec");
  const [fetchTrigger] = useFetchTrigger<any>("/api/product/spec");
  const [vehicleData] = useFetchUmum("/api/product");
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = async (data: any) => {
    try {
      data.product_id = data.product_id.product_id;
      data.category = data.category.name;
      const response = await postData(data);
      if (response && response.code === 201) {
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

  const ListCategorySpec = [
    "Berat",
    "Comfort & Convinience",
    "Dimensi",
    "Kapasitas Gardan",
    "Lampu",
    "Mesin",
    "Rem",
    "Roda",
    "Safety",
    "Sistem Kemudi",
    "Suspensi",
    "Transmisi",
    "Lain-Lain",
  ];

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
          rules={{ required: "Detail Category is required." }}
          render={({ field, fieldState }) => (
            <>
              <FormGroup>
                <label htmlFor="category">Pilih Detail Category</label>
                <Dropdown
                  id={field.name}
                  value={field.value}
                  optionLabel="name"
                  placeholder="Pilih Detail Category"
                  options={ListCategorySpec.map((item) => ({ name: item }))}
                  focusInputRef={field.ref}
                  onChange={(e) => field.onChange(e.value)}
                  className={classNames({ "p-invalid": fieldState.error })}
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
                <label htmlFor="satuan">
                  Satuan (beri tanda "-" kalo tidak ada satuan)
                </label>
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
