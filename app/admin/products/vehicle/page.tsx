"use client";
import TableLayout from "@/components/TableLayout";
import { CardAdmin } from "@/styles/styledComponents/GlobalStyled";
import React, { useEffect, useRef, useState } from "react";
import { BoxAction } from "./Styled";
import BtnEdit from "@/components/Buttons/BtnEdit";
import BtnDelete from "@/components/Buttons/BtnDelete";
import { useFetchTrigger, useFetchUmum } from "@/utils/useFetchData";
import { Dialog } from "primereact/dialog";
import CreateDialog from "./CreateDialog";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import axios from "axios";
import useToken from "@/utils/useToken";
import { Toast } from "primereact/toast";
import EditDialog from "./EditDialog";
const api_backend = process.env.NEXT_PUBLIC_APP_API_BACKEND;

const VehicleContent = () => {
  const toast = useRef<any>(null);
  const [token] = useToken();
  const [dataVehicle, setDataVehicle] = useState(null);
  const [loading, setloading] = useState(true);

  const [vehicleData, loadingVehicleData] = useFetchUmum("/api/product");
  const [fetchTrigger] = useFetchTrigger<any>("/api/product");
  const [visible, setVisible] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [idSelected, setIdSelected] = useState<any>(null);

  useEffect(() => {
    if (vehicleData && !loadingVehicleData) {
      setDataVehicle(vehicleData?.data);
      setloading(false);
    }
  }, [vehicleData, loadingVehicleData]);

  const showToast = (data: any) => {
    toast.current.show({
      severity: data.type,
      summary: data.title,
      detail: data.message,
      life: 3000,
    });
  };

  const accept = async (id: any) => {
    const response = await axios.delete(`${api_backend}/api/product/${id}`, {
      headers: {
        Authorization: token,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    if (response && response.data.code == 200) {
      const fetchDataNew = await fetchTrigger();
      await setDataVehicle(fetchDataNew?.data);
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
          id={rowData.service_id}
        />
        <BtnDelete
          confirmDeleteData={confirmDeleteData}
          id={rowData.service_id}
        />
      </BoxAction>
    );
  };

  const columns = [
    { field: "title", header: "Title", style: { width: "20%" } },
    { field: "description", header: "Description" },
    { body: actionBodyTemplate, header: "", style: { width: "10%" } },
  ];

  const globalFilterFields = ["title"];

  return (
    <>
      <CardAdmin>
        <Toast ref={toast} />
        <ConfirmDialog />
        <TableLayout
          data={dataVehicle}
          loading={loading}
          columns={columns}
          globalFilterFields={globalFilterFields}
          withSearchBar={true}
          setVisible={setVisible}
        />
        <Dialog
          header="Add New Vehicle"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <CreateDialog
            setVisible={setVisible}
            setDataNew={setDataVehicle}
            showToast={showToast}
          />
        </Dialog>
        <Dialog
          header="Edit Vehicle"
          visible={visibleEdit}
          style={{ width: "30vw" }}
          onHide={() => setVisibleEdit(false)}
        >
          <EditDialog
            setVisible={setVisibleEdit}
            setDataNew={setDataVehicle}
            showToast={showToast}
            id={idSelected}
          />
        </Dialog>
      </CardAdmin>
    </>
  );
};

export default VehicleContent;
