"use client";
import TableLayout from "@/components/TableLayout";
import { CardAdmin } from "@/styles/styledComponents/GlobalStyled";
import React, { useState } from "react";
import { BoxAction } from "./Styled";
import BtnEdit from "@/components/Buttons/BtnEdit";
import BtnDelete from "@/components/Buttons/BtnDelete";
import { useFetchUmum } from "@/utils/useFetchData";

const OwnersManualBookContent = () => {
  const [manualBookData, loadingManualBookData] = useFetchUmum("/api/book");
  const [visible, setVisible] = useState(false);

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
        <TableLayout
          data={manualBookData?.data}
          loading={loadingManualBookData}
          columns={columns}
          globalFilterFields={globalFilterFields}
          withSearchBar={true}
          setVisible={setVisible}
        />
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
