"use client";
import TableLayout from "@/components/TableLayout";
import { CardAdmin } from "@/styles/styledComponents/GlobalStyled";
import { useFetchTrigger, useFetchUmum } from "@/utils/useFetchData";
import React, { useEffect, useRef, useState } from "react";
import { BoxAction } from "./Styled";
import BtnEdit from "@/components/Buttons/BtnEdit";
import BtnDelete from "@/components/Buttons/BtnDelete";
import { convertDateV1 } from "@/utils/convertDate";
import useToken from "@/utils/useToken";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import axios from "axios";
const api_backend = process.env.NEXT_PUBLIC_APP_API_BACKEND;

const CareerContent = () => {
  const toast = useRef<any>(null);
  const [token] = useToken();
  const [dataCareer, setDataCareer] = useState(null);
  const [loading, setloading] = useState(true);

  const [careerData, loadingCareerData] = useFetchUmum("/api/career");
  const [fetchTrigger] = useFetchTrigger<any>("/api/career");
  const [visible, setVisible] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [idSelected, setIdSelected] = useState<any>(null);

  useEffect(() => {
    if (careerData && !loadingCareerData) {
      setDataCareer(careerData?.data);
      setloading(false);
    }
  }, [careerData, loadingCareerData]);

  const showToast = (data: any) => {
    toast.current.show({
      severity: data.type,
      summary: data.title,
      detail: data.message,
      life: 3000,
    });
  };

  const accept = async (id: any) => {
    const response = await axios.delete(`${api_backend}/api/career/${id}`, {
      headers: {
        Authorization: token,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    if (response && response.data.code == 200) {
      const fetchDataNew = await fetchTrigger();
      await setDataCareer(fetchDataNew?.data);
      showToast({
        type: "success",
        title: "Success",
        message: `${response.data.message}`,
      });
    }
  };

  const reject = () => {
    showToast({
      type: "warn",
      title: "Rejected",
      message: "You have rejected",
    });
  };

  const confirmDeleteData = (id: any) => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => accept(id),
      reject,
    });
  };

  const actionBodyTemplate = (rowData: any) => {
    return (
      <BoxAction>
        <BtnEdit
          setVisibleEdit={setVisibleEdit}
          setIdSelected={setIdSelected}
          id={rowData.dealer_id}
        />
        <BtnDelete
          confirmDeleteData={confirmDeleteData}
          id={rowData.dealer_id}
        />
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
        <Toast ref={toast} />
        <ConfirmDialog />
        <TableLayout
          data={dataCareer}
          loading={loading}
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
