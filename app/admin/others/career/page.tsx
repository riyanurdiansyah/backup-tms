"use client";
import TableLayout from "@/components/TableLayout";
import { CardAdmin } from "@/styles/styledComponents/GlobalStyled";
import { useFetchUmum } from "@/utils/useFetchData";
import React, { useState } from "react";
import { BoxAction } from "./Styled";
import BtnEdit from "@/components/Buttons/BtnEdit";
import BtnDelete from "@/components/Buttons/BtnDelete";
import { convertDateV1 } from "@/utils/convertDate";

const CareerContent = () => {
  const [careerData, loadingCareerData] = useFetchUmum("/api/career");
  const [visible, setVisible] = useState(false);

  const actionBodyTemplate = (rowData: any) => {
    return (
      <BoxAction>
        <BtnEdit />
        <BtnDelete />
      </BoxAction>
    );
  };

  const bodyPublished = (rowData: any) => {
    const formatDate = convertDateV1(rowData.published);
    return formatDate;
  };

  const bodyExpired = (rowData: any) => {
    const formatDate = convertDateV1(rowData.expired);
    return formatDate;
  };

  const columns = [
    { field: "title", header: "Title" },
    { field: "subtitle", header: "Subtitle" },
    { field: "status", header: "Status" },
    { field: "location", header: "Location" },
    { field: "published", header: "Published" },
    { field: "expired", header: "Expired" },
    { body: actionBodyTemplate, header: "" },
  ];

  const globalFilterFields = [
    "title",
    "subtitle",
    "status",
    "location",
    "published",
    "expired",
  ];

  return (
    <>
      <CardAdmin>
        <TableLayout
          data={careerData?.data}
          loading={loadingCareerData}
          columns={columns}
          globalFilterFields={globalFilterFields}
          withSearchBar={true}
          setVisible={setVisible}
        />
      </CardAdmin>
    </>
  );
};

// const careerDummy = [
//   {
//     title: "Admin Staff (Bandung Area)",
//     category: "Sistem Informasi",
//     rank: "Lulusan Baru",
//     expired: "10 Agustus 2023",
//     descriptiom:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//     qualification:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//     requirement:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//     benefit:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//   },
//   {
//     title: "Admin Staff (Bandung Area)",
//     category: "Sistem Informasi",
//     rank: "Lulusan Baru",
//     expired: "10 Agustus 2023",
//     descriptiom:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//     qualification:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//     requirement:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//     benefit:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//   },
//   {
//     title: "Admin Staff (Bandung Area)",
//     category: "Sistem Informasi",
//     rank: "Lulusan Baru",
//     expired: "10 Agustus 2023",
//     descriptiom:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//     qualification:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//     requirement:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//     benefit:
//       "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
//   },
// ];

export default CareerContent;
