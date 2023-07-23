import { Button } from "primereact/button";
import React, { FC } from "react";

const BtnDelete: FC<IBtnDelete> = () => {
  return (
    <Button
      icon="pi pi-trash"
      rounded
      severity="warning"
      aria-label="Delete"
      style={{ width: "2.5rem", height: "2.5rem" }}
    />
  );
};

interface IBtnDelete {}

export default BtnDelete;
