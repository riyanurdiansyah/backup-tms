"use client";
import HeroBanner from "@/components/HeroBanner";
import React, { useState } from "react";
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

const BookingServicePage = () => {
  const [data, setData] = useState({
    name: "",
    no_hp: "",
    email: "",
    jadwal_service: "",
    lokasi_service: "",
    outlet: "",
    no_kendaraan: "",
    model_kendaraan: "",
    tahun_kendaraan: "",
    jenis_service: "",
  });

  const listOutlet = [
    "Akutansi",
    "Sistem Informasi",
    "Informatika",
    "Teknik Mesin",
  ];

  const timeOperational = genrateTimeOperational();

  const handleClickDropdown = (e: any) => {
    console.log("menu", e);
  };

  return (
    <div className="booking-service-page-wrapper">
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
              <RowInput>
                <LForm>Nama Lengkap</LForm>
                <IText type="text" placeholder="Nama Lengkap Anda" />
              </RowInput>
              <RowInput>
                <LForm>No. Handphone</LForm>
                <IText type="text" placeholder="628xxxxxxxxxx" />
              </RowInput>
              <RowInput>
                <LForm>Email</LForm>
                <IText type="text" placeholder="name@example.com" />
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
                  <DropdownFull style={{ width: "30%" }}>
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
                          Pilih Jam <FaSortDown style={{ marginTop: "-4px" }} />
                        </p>
                      </DropdownName>
                    </Hover>
                  </DropdownFull>
                  <ColInputDate>
                    <LForm style={{ width: "fit-content", minWidth: 0 }}>
                      Tgl
                    </LForm>
                    <IDate type="date" />
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
                      <DropdownMenu
                        dataMenu={listOutlet}
                        handleClickDropdown={handleClickDropdown}
                      />
                    }
                  >
                    <DropdownName>
                      <p className="text">
                        Pilih Outlet{" "}
                        <FaSortDown style={{ marginTop: "-4px" }} />
                      </p>
                    </DropdownName>
                  </Hover>
                </DropdownFull>
              </RowInput>
            </CardBody>
          </CardBox>
          <CardBox>
            <CardHead>
              <CardTitle>Data Kendaraan</CardTitle>
            </CardHead>
            <CardBody>
              <RowInput>
                <LForm>Nomor Kendaraan</LForm>
                <IText type="text" placeholder="B12345XYZ" />
              </RowInput>
              <RowInput>
                <LForm>Model & Tahun Kendaraan</LForm>
                <RowDoubleInput>
                  <DropdownFull style={{ width: "50%" }}>
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
                  <DropdownFull style={{ width: "50%" }}>
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
                          Pilih Tahun{" "}
                          <FaSortDown style={{ marginTop: "-4px" }} />
                        </p>
                      </DropdownName>
                    </Hover>
                  </DropdownFull>
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
                        dataMenu={listOutlet}
                        handleClickDropdown={handleClickDropdown}
                      />
                    }
                  >
                    <DropdownName>
                      <p className="text">
                        Pilih Jenis Service{" "}
                        <FaSortDown style={{ marginTop: "-4px" }} />
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

          <BtnSubmit>
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

const genrateTimeOperational = () => {
  const startTime = 8 * 60; // Convert 08:00 to minutes (8 hours * 60 minutes)
  const endTime = 15 * 60; // Convert 15:00 to minutes (15 hours * 60 minutes)

  const timeSlotInterval = 30; // 30 minutes interval

  const timeSlots = [];
  for (let time = startTime; time <= endTime; time += timeSlotInterval) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}`;
    timeSlots.push(formattedTime);
  }
  return timeSlots;
};

export default BookingServicePage;
