"use client";
import TableLayout from "@/components/TableLayout";
import { CardAdmin } from "@/styles/styledComponents/GlobalStyled";
import React, { useEffect, useRef, useState } from "react";
import { BoxAction } from "./Styled";
import BtnEdit from "@/components/Buttons/BtnEdit";
import BtnDelete from "@/components/Buttons/BtnDelete";
import { useFetchUmum } from "@/utils/useFetchData";
import { Dialog } from "primereact/dialog";
import CreateDialog from "./CreateDialog";
import { Toast } from "primereact/toast";

const OwnersManualBookContent = () => {
  const toast = useRef<any>(null);
  const [dataManualBook, setDataManualBook] = useState(null);
  const [loading, setloading] = useState(true);

  const [manualBookData, loadingManualBookData] = useFetchUmum("/api/book");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (manualBookData && !loadingManualBookData) {
      setDataManualBook(manualBookData?.data);
      setloading(false);
    }
  }, [manualBookData, loadingManualBookData]);

  const showToast = (data: any) => {
    toast.current.show({
      severity: data.type,
      summary: data.title,
      detail: data.message,
      life: 3000,
    });
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
    { field: "nama", header: "Title", style: { width: "20%" } },
    { field: "file", header: "Link Book" },
    { body: actionBodyTemplate, header: "" },
  ];

  const globalFilterFields = ["nama", "file"];

  return (
    <>
      <CardAdmin>
        <Toast ref={toast} />
        <TableLayout
          data={dataManualBook}
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
            setDataManualBook={setDataManualBook}
            showToast={showToast}
          />
        </Dialog>
      </CardAdmin>
    </>
  );
};

// const manualBookDummy = [
//   {
//     title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
//     linkBook:
//       "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
//   },
//   {
//     title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
//     linkBook:
//       "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
//   },
//   {
//     title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
//     linkBook:
//       "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
//   },
//   {
//     title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
//     linkBrochure:
//       "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
//   },
//   {
//     title: "ISUZU ELF OWNER'S MANUAL (EURO 2)",
//     linkBook:
//       "https://uploads-ssl.webflow.com/60debe5ee0fe74c62dd2a66f/613984e0a0772c8bef055c64_Elf%20Owners%20manual_compressed%20(2).pdf",
//   },
// ];

export default OwnersManualBookContent;
