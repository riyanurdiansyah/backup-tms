"use client";

import HeroBanner from "@/components/HeroBanner";
import React, { useEffect, useRef, useState } from "react";
import {
  BoxBS,
  BoxTitle,
  BtnSubmit,
  CardBody,
  CardBox,
  CardHead,
  CardTitle,
  ColInputDate,
  ContainerBS,
  DropdownFull,
  DropdownName,
  IDate,
  IRadioBtn,
  IText,
  InfoAccept,
  InfoTimeService,
  LForm,
  LRadioBtn,
  LogoGroup,
  RadioBtn,
  RowDoubleInput,
  RowDoubleRadioBtn,
  RowInput,
  RowServiceTime,
  Subtitle,
  TextFooter,
  TextInfoAccept,
  Title,
} from "./Styled";
import Hover from "@/components/Hover";
import { FaSortDown } from "react-icons/fa";
import DropdownMenu from "@/components/Hover/DropdownMenu";
import { MdKeyboardArrowRight } from "react-icons/md";
import ImgLogo1 from "./logo-bengkel-1.png";
import ImgLogo2 from "./logo-bengkel-2.png";
import Image from "next/image";
import { generateTimeOperation } from "@/utils/serviceDataList";
import { useFetchUmum, usePostUmum } from "@/utils/useFetchData";
import DropdownMenuV2 from "@/components/Hover/DropdownMenuV2";
import { Toast } from "primereact/toast";

const BookingServicePage = () => {
  const toast = useRef<any>(null);
  const [listDealer, setListDealer] = useState<DealerInfo[]>([]);

  const [networkData, loadingNetworkData] = useFetchUmum("/api/dealer");
  const [postData] = usePostUmum("/api/booking");
  const timeOperation = generateTimeOperation();
  const listJenisService = ["Perawatan Berkala", "Perawatan Non-Berkala"];

  const [data, setData] = useState<any>({
    date: "",
    email: "",
    jenis_service: "",
    location: "",
    model: "",
    no_hp: "",
    no_kendaraan: "",
    outlet_id: "",
    tahun: "",
    time: "",
  });

  useEffect(() => {
    if (!loadingNetworkData && networkData) {
      const result = extractDealerInfo(networkData);
      setListDealer(result);
    }
  }, [networkData, loadingNetworkData]);

  const handleClickDropdownTime = (e: any) => {
    setData({ ...data, time: e });
  };

  const handleClickDropdownOutlet = (e: any) => {
    setData({ ...data, outlet_id: e.id, location: e.location });
  };

  const handleClickDropdownJenisService = (e: any) => {
    setData({ ...data, jenis_service: e });
  };

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const showToast = (data: any) => {
    toast.current.show({
      severity: data.type,
      summary: data.title,
      detail: data.message,
      life: 3000,
    });
  };

  const handleSubmit = async () => {
    const hasEmptyStringValues = Object.values(data).some(
      (value) => value === ""
    );
    if (hasEmptyStringValues) {
      await showToast({
        type: "error",
        title: "Error",
        message: "Form Harus Diisi semua",
      });
    } else {
      try {
        const response = await postData(data);
        if (response && response.code === 201) {
          await showToast({
            type: "success",
            title: "Success",
            message: "Berhasil Mengirimkan Data",
          });
          const newData: Record<string, string> = {};
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              newData[key] = "";
            }
          }
          setData(newData);
        } else {
          await showToast({
            type: "error",
            title: "Error",
            message: "Gagal Mengirimkan Data",
          });
        }
      } catch (error) {
        await showToast({
          type: "error",
          title: "Error",
          message: "Gagal Mengirimkan Data",
        });
      }
    }
  };

  return (
    <div className="booking-service-page-wrapper">
      <Toast ref={toast} />
      <HeroBanner title={"Booking Service"} />
      <ContainerBS>
        <Title>KAMI MENYEDIAKAN BOOKING SERVICE UNTUK KENDARAAN ANDA</Title>
        <Subtitle>
          Lakukan booking service untuk menghemat waktu dan biaya yang Anda
          keluarkan.
        </Subtitle>
        <BoxBS>
          <BoxTitle>Lengkapi Data Berikut</BoxTitle>
          <CardBox>
            <CardHead>
              <CardTitle>Data Pemilik Kendaraan</CardTitle>
            </CardHead>
            <CardBody>
              {/* <RowInput>
                <LForm>Nama Lengkap</LForm>
                <IText
                  type="text"
                  placeholder="Nama Lengkap Anda"
                  name="name"
                  value={data.name}
                  onChange={handleChangeInput}
                />
              </RowInput> */}
              <RowInput>
                <LForm>Email</LForm>
                <IText
                  type="text"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={handleChangeInput}
                />
              </RowInput>
              <RowInput>
                <LForm>No. Handphone</LForm>
                <IText
                  type="number"
                  placeholder="628xxxxxxxxxx"
                  name="no_hp"
                  value={data.no_hp}
                  onChange={handleChangeInput}
                />
              </RowInput>
            </CardBody>
          </CardBox>
          <CardBox>
            <CardHead>
              <CardTitle>Jadwal Service</CardTitle>
            </CardHead>
            <CardBody>
              <RowInput>
                <LForm>Waktu Service</LForm>
                <RowServiceTime>
                  <DropdownFull className="time">
                    <Hover
                      paddingTop={5}
                      topHover={40}
                      kananHover={0}
                      kiriHover={0}
                      onHover={
                        <DropdownMenu
                          dataMenu={timeOperation}
                          handleClickDropdown={handleClickDropdownTime}
                        />
                      }
                    >
                      <DropdownName>
                        <p className="text">
                          {data.time != "" ? (
                            data.time
                          ) : (
                            <>
                              Pilih Jam{" "}
                              <FaSortDown style={{ marginTop: "-4px" }} />
                            </>
                          )}
                        </p>
                      </DropdownName>
                    </Hover>
                  </DropdownFull>
                  <ColInputDate>
                    <LForm style={{ width: "fit-content", minWidth: 0 }}>
                      Tgl
                    </LForm>
                    <IDate
                      type="date"
                      name="date"
                      value={data.date}
                      onChange={handleChangeInput}
                    />
                  </ColInputDate>
                </RowServiceTime>
              </RowInput>
              <RowInput>
                <LForm />
                <InfoTimeService>
                  Booking 2 hari sebelumnya.
                  <br />
                  *) Tempat terbatas, khusus service di bengkel TMS Isuzu
                </InfoTimeService>
              </RowInput>
              <RowInput>
                <LForm>Outlet</LForm>
                <DropdownFull>
                  <Hover
                    paddingTop={5}
                    topHover={40}
                    kananHover={0}
                    kiriHover={0}
                    onHover={
                      <DropdownMenuV2
                        dataMenu={listDealer}
                        handleClickDropdown={handleClickDropdownOutlet}
                      />
                    }
                  >
                    <DropdownName>
                      <p className="text">
                        {data.outlet_id != "" ? (
                          listDealer?.find(
                            (item: DealerInfo) => item.id == data.outlet_id
                          )?.name
                        ) : (
                          <>
                            Pilih Outlet{" "}
                            <FaSortDown style={{ marginTop: "-4px" }} />
                          </>
                        )}
                      </p>
                    </DropdownName>
                  </Hover>
                </DropdownFull>
              </RowInput>
              <RowInput>
                <LForm>Lokasi Service</LForm>
                <IText
                  type="text"
                  placeholder=""
                  name="location"
                  value={data.location}
                  disabled
                />
              </RowInput>
              {/* <RowInput>
                <LForm>Lokasi Service</LForm>
                <RowDoubleRadioBtn>
                  <RadioBtn>
                    <IRadioBtn type="radio" name="location" value="bengkel" />
                    <LRadioBtn>Bengkel</LRadioBtn>
                  </RadioBtn>
                  <RadioBtn>
                    <IRadioBtn type="radio" name="location" value="rumah" />
                    <LRadioBtn>Rumah</LRadioBtn>
                  </RadioBtn>
                </RowDoubleRadioBtn>
              </RowInput> */}
            </CardBody>
          </CardBox>
          <CardBox>
            <CardHead>
              <CardTitle>Data Kendaraan</CardTitle>
            </CardHead>
            <CardBody>
              <RowInput>
                <LForm>Nomor Kendaraan</LForm>
                <IText
                  type="text"
                  placeholder="B12345XYZ"
                  name="no_kendaraan"
                  value={data.no_kendaraan}
                  onChange={handleChangeInput}
                />
              </RowInput>
              <RowInput>
                <LForm>Model & Tahun Kendaraan</LForm>
                <RowDoubleInput>
                  <IText
                    type="text"
                    placeholder="Model"
                    name="model"
                    value={data.model}
                    onChange={handleChangeInput}
                  />
                  <IText
                    type="number"
                    placeholder="Tahun"
                    name="tahun"
                    value={data.tahun}
                    onChange={handleChangeInput}
                  />
                  {/* <DropdownFull className="model">
                    <Hover
                      paddingTop={5}
                      topHover={40}
                      kananHover={0}
                      kiriHover={0}
                      onHover={
                        <DropdownMenu
                          dataMenu={listOutlet}
                          handleClickDropdown={handleClickDropdown}
                        />
                      }
                    >
                      <DropdownName>
                        <p className="text">
                          Pilih Model{" "}
                          <FaSortDown style={{ marginTop: "-4px" }} />
                        </p>
                      </DropdownName>
                    </Hover>
                  </DropdownFull>
                  <DropdownFull className="tahun">
                    <Hover
                      paddingTop={5}
                      topHover={40}
                      kananHover={0}
                      kiriHover={"auto"}
                      onHover={
                        <DropdownMenu
                          dataMenu={listOutlet}
                          handleClickDropdown={handleClickDropdown}
                        />
                      }
                    >
                      <DropdownName>
                        <p className="text">
                          Pilih Tahun{" "}
                          <FaSortDown style={{ marginTop: "-4px" }} />
                        </p>
                      </DropdownName>
                    </Hover>
                  </DropdownFull> */}
                </RowDoubleInput>
              </RowInput>
              <RowInput>
                <LForm>Jenis Service</LForm>
                <DropdownFull>
                  <Hover
                    paddingTop={5}
                    topHover={40}
                    kananHover={0}
                    kiriHover={0}
                    onHover={
                      <DropdownMenu
                        dataMenu={listJenisService}
                        handleClickDropdown={handleClickDropdownJenisService}
                      />
                    }
                  >
                    <DropdownName>
                      <p className="text">
                        {data.jenis_service != "" ? (
                          data.jenis_service
                        ) : (
                          <>
                            Pilih Jenis Service{" "}
                            <FaSortDown style={{ marginTop: "-4px" }} />
                          </>
                        )}
                      </p>
                    </DropdownName>
                  </Hover>
                </DropdownFull>
              </RowInput>
            </CardBody>
          </CardBox>

          <InfoAccept>
            <IRadioBtn
              type="radio"
              name="accept"
              style={{ marginTop: "7px" }}
            />
            <TextInfoAccept>
              Saya menyatakan bahwa saya telah membaca dan menyetujui Kebijakan
              Privasi dari TMS Isuzu pada laman website ini.
            </TextInfoAccept>
          </InfoAccept>

          <BtnSubmit onClick={handleSubmit}>
            Booking Sekarang{" "}
            <MdKeyboardArrowRight
              size={21}
              style={{ margin: "2px -6px 0 -4px" }}
            />
          </BtnSubmit>
        </BoxBS>
        <TextFooter>
          Selain Booking Service kami juga memiliki layanan Bengkel Isuzu
          Berjalan untuk memenuhi kebutuhan anda terutama untuk yang tidak
          terjangkau oleh layanan showroom kami.
        </TextFooter>
        <LogoGroup>
          <Image
            src={ImgLogo1}
            alt=""
            layout="responsive"
            objectFit="contain"
            style={{ maxWidth: "300px" }}
          />
          <Image
            src={ImgLogo2}
            alt=""
            layout="responsive"
            objectFit="contain"
            style={{ maxWidth: "300px" }}
          />
        </LogoGroup>
      </ContainerBS>
    </div>
  );
};

interface DealerInfo {
  id: string;
  name: string;
  location: string;
}

const extractDealerInfo = (data: any): DealerInfo[] => {
  const listData: DealerInfo[] = [];
  for (const item of data.data) {
    const dealerInfo: DealerInfo = {
      id: item.dealer_id,
      name: item.name,
      location: item.location,
    };
    listData.push(dealerInfo);
  }
  return listData;
};

export default BookingServicePage;
