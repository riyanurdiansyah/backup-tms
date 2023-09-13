"use client";
import HeroBanner from "@/components/HeroBanner";
import React, { useEffect, useState } from "react";
import {
  BoxSC,
  BoxTitle,
  CardBox,
  ContainerSC,
  DropdownFull,
  DropdownName,
  IText,
  LForm,
  RowInput,
  TextFooter,
  Title,
  ValueText,
} from "./Styled";
import Hover from "@/components/Hover";
import DropdownMenuV2 from "@/components/Hover/DropdownMenuV2";
import { FaSortDown } from "react-icons/fa";

const SimulationCreditPage = () => {
  const [data, setData] = useState<any>({
    hargaKendaraan: 0,
    diskonOTR: 0,
    tenor: 0,
    bunga: 10,
    totalHarga: 0,
    angsuran: 0,
  });

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClickDropdownTenor = (e: any) => {
    setData({ ...data, tenor: e.value });
  };

  function formatAngka(angka: number) {
    return angka.toLocaleString("id-ID", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  useEffect(() => {
    const jumlahPokokKredit = data.hargaKendaraan - data.diskonOTR;
    const bunga = jumlahPokokKredit * (data.bunga / 100) * (data.tenor / 12);
    const angsuran =
      data.hargaKendaraan > 0 && data.diskonOTR > 0 && data.tenor > 0
        ? (jumlahPokokKredit + bunga) / data.tenor
        : 0;
    setData((prevData: any) => ({
      ...prevData,
      totalHarga: jumlahPokokKredit,
      angsuran: angsuran,
    }));
  }, [data]);

  const listTenor = [
    {
      name: "12 bahun",
      value: 12,
    },
    {
      name: "24 bahun",
      value: 24,
    },
    {
      name: "36 bahun",
      value: 36,
    },
    {
      name: "48 bahun",
      value: 48,
    },
    {
      name: "60 bahun",
      value: 60,
    },
  ];

  return (
    <div className="simulation-credit-page-wrapper">
      <HeroBanner title={"Simulation Credit"} />
      <ContainerSC>
        <Title>
          Estimasi pembayaran kredit dengan memilih bunga kredit dan jangka
          waktu yang sesuai dengan kebutuhan Anda.
        </Title>
        <BoxSC>
          <BoxTitle>Simulasi Kredit Truk</BoxTitle>
          <CardBox>
            <RowInput>
              <LForm>Harga Kendaraan (Rp)</LForm>
              <IText
                type="text"
                placeholder="0"
                name="hargaKendaraan"
                value={data.hargaKendaraan}
                onChange={handleChangeInput}
              />
            </RowInput>
            <RowInput>
              <LForm>Diskon OTR (Rp)</LForm>
              <IText
                type="text"
                placeholder="0"
                name="diskonOTR"
                value={data.diskonOTR}
                onChange={handleChangeInput}
              />
            </RowInput>
            <RowInput>
              <LForm>Tenor</LForm>
              <DropdownFull>
                <Hover
                  paddingTop={5}
                  topHover={40}
                  kananHover={0}
                  kiriHover={0}
                  onHover={
                    <DropdownMenuV2
                      dataMenu={listTenor}
                      handleClickDropdown={handleClickDropdownTenor}
                    />
                  }
                >
                  <DropdownName>
                    <p className="text">
                      {data.tenor != ""
                        ? listTenor?.find(
                            (item: any) => item.value == data.tenor
                          )?.name
                        : "Pilih Tenor"}
                      <FaSortDown style={{ marginTop: "-4px" }} />
                    </p>
                  </DropdownName>
                </Hover>
              </DropdownFull>
            </RowInput>
            <RowInput>
              <LForm>Bunga (%)</LForm>
              <IText
                type="text"
                placeholder="xxx"
                name="bunga"
                value={data.bunga}
                disabled
              />
            </RowInput>
          </CardBox>
          <CardBox>
            <RowInput>
              <LForm>Jumlah Pokok Kredit</LForm>
              <ValueText>Rp. {formatAngka(data.totalHarga)}</ValueText>
            </RowInput>
          </CardBox>
          <CardBox>
            <RowInput>
              <LForm>Estimasi Angsuran / bulan</LForm>
              <ValueText>Rp. {formatAngka(data.angsuran)}</ValueText>
            </RowInput>
          </CardBox>
          <TextFooter>
            Hubungi outlet terdekat untuk mendapatkan informasi harga dan diskon
            terbaru.
          </TextFooter>
        </BoxSC>
      </ContainerSC>
    </div>
  );
};

export default SimulationCreditPage;
