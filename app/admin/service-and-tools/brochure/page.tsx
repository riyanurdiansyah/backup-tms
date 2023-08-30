"use client";
import BtnDelete from "@/components/Buttons/BtnDelete";
import BtnEdit from "@/components/Buttons/BtnEdit";
import TableLayout from "@/components/TableLayout";
import { CardAdmin } from "@/styles/styledComponents/GlobalStyled";
import React, { useEffect, useRef, useState } from "react";
import { BoxAction } from "./Styled";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import CreateDialog from "./CreateDialog";
import { Toast } from "primereact/toast";
import { useFetchUmum } from "@/utils/useFetchData";

const BrochureContent = () => {
  const toast = useRef<any>(null);
  const [dataBrochure, setDataBrochure] = useState(null);
  const [loading, setloading] = useState(true);

  const [brochurekData, loadingBrochureData] = useFetchUmum("/api/brochure");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (brochurekData && !loadingBrochureData) {
      setDataBrochure(brochurekData?.data);
      setloading(false);
    }
  }, [brochurekData, loadingBrochureData]);

  const showToast = (data: any) => {
    toast.current.show({
      severity: data.type,
      summary: data.title,
      detail: data.message,
      life: 3000,
    });
  };

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
    { field: "brochure", header: "Link Brochure" },
    { body: actionBodyTemplate, header: "" },
  ];

  const globalFilterFields = ["title"];

  return (
    <>
      <CardAdmin>
        <Toast ref={toast} />
        <TableLayout
          data={dataBrochure}
          loading={loading}
          columns={columns}
          globalFilterFields={globalFilterFields}
          withSearchBar={true}
          setVisible={setVisible}
        />
        <Dialog
          header="Add New Brochure"
          visible={visible}
          style={{ width: "30vw" }}
          onHide={() => setVisible(false)}
        >
          <CreateDialog
            setVisible={setVisible}
            setDataNew={setDataBrochure}
            showToast={showToast}
          />
        </Dialog>
      </CardAdmin>
    </>
  );
};

// const brochureDummy = [
//   {
//     title: "ISUZU GIGA TRACTOR HEAD",
//     thumbnail: "/img-brochure.png",
//     brochure:
//       "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
//   },
//   {
//     title: "ISUZU GIGA TRACTOR HEAD",
//     thumbnail: "",
//     brochure:
//       "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
//   },
//   {
//     title: "ISUZU GIGA TRACTOR HEAD",
//     thumbnail: "/img-brochure.png",
//     brochure:
//       "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
//   },
//   {
//     title: "ISUZU GIGA TRACTOR HEAD",
//     thumbnail: "/img-brochure.png",
//     brochure:
//       "https://isuzu-astra.com/wp-content/uploads/2023/04/2023_ELF_Brosur_NLR-NLR-L_Maret.pdf",
//   },
// ];

export default BrochureContent;
