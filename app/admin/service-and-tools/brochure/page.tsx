"use client";
import BtnDelete from "@/components/Buttons/BtnDelete";
import BtnEdit from "@/components/Buttons/BtnEdit";
import TableLayout from "@/components/TableLayout";
import { CardAdmin } from "@/styles/styledComponents/GlobalStyled";
import React, { useState } from "react";
import { BoxAction } from "./Styled";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import CreateDialog from "./CreateDialog";

const BrochureContent = () => {
  const [visible, setVisible] = useState(false);

  const imageBodyTemplate = (rowData: any) => {
    return (
      <Image
        src={rowData.thumbnail || "/no-image.png"}
        alt={rowData.thumbnail}
        layout="responsive"
        objectFit="cover"
        loading="lazy"
        width="0"
        height="0"
        style={{
          maxWidth: "100px",
          height: "auto",
          boxShadow:
            "0 4px 10px rgba(0,0,0,.03),0 0 2px rgba(0,0,0,.06),0 2px 6px rgba(0, 0, 0, 0.081)",
        }}
      />
    );
  };

  const actionBodyTemplate = (rowData: any) => {
    return (
      <BoxAction>
        <BtnEdit />
        <BtnDelete />
      </BoxAction>
    );
  };

  const columns = [
    { field: "title", header: "Title" },
    { body: imageBodyTemplate, header: "Thumbnail" },
    { field: "linkBrochure", header: "Link Brochure" },
    { body: actionBodyTemplate, header: "" },
  ];

  const globalFilterFields = ["title", "thumbnail", "linkBrochure"];

  return (
    <>
      <CardAdmin>
        <TableLayout
          data={brochureDummy}
          loading={false}
          columns={columns}
          globalFilterFields={globalFilterFields}
          withSearchBar={true}
          setVisible={setVisible}
        />
      </CardAdmin>
      <Dialog
        header="Add New Brochure"
        visible={visible}
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
      >
        <CreateDialog setVisible={setVisible} />
      </Dialog>
    </>
  );
};

const brochureDummy = [
  {
    title: "ISUZU GIGA TRACTOR HEAD",
    thumbnail: "/img-brochure.png",
    linkBrochure:
      "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
  },
  {
    title: "ISUZU GIGA TRACTOR HEAD",
    thumbnail: "",
    linkBrochure:
      "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
  },
  {
    title: "ISUZU GIGA TRACTOR HEAD",
    thumbnail: "/img-brochure.png",
    linkBrochure:
      "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
  },
  {
    title: "ISUZU GIGA TRACTOR HEAD",
    thumbnail: "/img-brochure.png",
    linkBrochure:
      "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
  },
];

export default BrochureContent;
