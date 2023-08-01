import React from "react";
import { CreateDialogContainer, InputSection } from "./Styled";
import { InputText } from "primereact/inputtext";

const CreateDialog = () => {
  return (
    <CreateDialogContainer>
      <InputSection>
        <label htmlFor="title">Title</label>
        <InputText id="title" aria-describedby="title-help" />
      </InputSection>
    </CreateDialogContainer>
  );
};

export default CreateDialog;
