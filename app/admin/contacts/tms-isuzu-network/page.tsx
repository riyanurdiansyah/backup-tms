"use client";
import TableLayout from "@/components/TableLayout";
import { CardAdmin } from "@/styles/styledComponents/GlobalStyled";
import React, { useEffect, useRef, useState } from "react";
import { BoxAction } from "./Styled";
import BtnEdit from "@/components/Buttons/BtnEdit";
import BtnDelete from "@/components/Buttons/BtnDelete";
import { useFetchUmum } from "@/utils/useFetchData";
import { Dialog } from "primereact/dialog";
// import CreateDialog from "./CreateDialog";
import { Toast } from "primereact/toast";

const TmsIsuzuNetworkContent = () => {
  const toast = useRef<any>(null);
  const [dataNetwork, setDataNetwork] = useState(null);
  const [loading, setloading] = useState(true);

  const [networkData, loadingNetworkData] = useFetchUmum("/api/dealer");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (networkData && !loadingNetworkData) {
      setDataNetwork(networkData?.data);
      setloading(false);
    }
  }, [networkData, loadingNetworkData]);

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
    { field: "name", header: "Name" },
    { field: "subtitle", header: "Category" },
    { field: "phone", header: "Phone" },
    { field: "location", header: "Address" },
    { body: actionBodyTemplate, header: "" },
  ];

  const globalFilterFields = ["name", "subtitle", "phone", "location"];

  return (
    <>
      <CardAdmin>
        <Toast ref={toast} />
        <TableLayout
          data={dataNetwork}
          loading={loading}
          columns={columns}
          globalFilterFields={globalFilterFields}
          withSearchBar={true}
          setVisible={setVisible}
        />
        {/* <Dialog
          header="Add New Brochure"
          visible={visible}
          style={{ width: "30vw" }}
          onHide={() => setVisible(false)}
        >
          <CreateDialog
            setVisible={setVisible}
            setDataNetwork={setDataNetwork}
            showToast={showToast}
          />
        </Dialog> */}
      </CardAdmin>
    </>
  );
};

export default TmsIsuzuNetworkContent;
