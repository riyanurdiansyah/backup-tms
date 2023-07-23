import { Button } from "primereact/button";
import React, { FC } from "react";

const BtnEdit: FC<IBtnEdit> = () => {
  return (
    <Button
      icon="pi pi-pencil"
      rounded
      severity="success"
      aria-label="Edit"
      style={{ width: "2.5rem", height: "2.5rem" }}
    />
  );
};

interface IBtnEdit {}

export default BtnEdit;
