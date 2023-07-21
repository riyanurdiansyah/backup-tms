"use client";
import HeroBanner from "@/components/HeroBanner";
import React, { useState } from "react";
import { BodyNetwork, Left, ListNetwork, Right, Title, Togle } from "./Styled";
import CardNetwork from "@/components/Card/CardNetwork";
import Image from "next/image";
import ImgMap from "./img-map.png";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";

const TmsIsuzuNetworkPage = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="tms-isuzu-network-page-wrapper">
      <HeroBanner title={"TMS Isuzu Network"} />
      <BodyNetwork>
        <Left isShow={isShow}>
          <Title>Lokasi Kami</Title>
          <ListNetwork>
            {dummyNetwork?.map((item: any, index: number) => (
              <CardNetwork
                name={item?.properties?.name}
                jenis={item?.properties?.jenis}
                address={item?.properties?.address}
                phone={item?.properties?.phone}
              />
            ))}
          </ListNetwork>
        </Left>
        <Right>
          <Image src={ImgMap} alt="" layout="fill" objectFit="cover" />
        </Right>
        <Togle onClick={() => setIsShow(!isShow)}>
          {isShow ? (
            <RiArrowLeftSFill
              size={34}
              color={"#fff"}
              style={{ marginRight: "-3px" }}
            />
          ) : (
            <RiArrowRightSFill
              size={34}
              color={"#fff"}
              style={{ marginLeft: "-3px" }}
            />
          )}
        </Togle>
      </BodyNetwork>
    </div>
  );
};

const dummyNetwork = [
  {
    geometry: {
      type: "Point",
      coordinates: [98.7067462889654, 3.53867360879641],
    },
    properties: {
      name: "TMS Isuzu Medan",
      jenis: "Sales, Service, Parts",
      type: "Dealer",
      address:
        "Jl. Sisingamangaraja KM 9999 , Harjosari I, Kec. Medan Amplas, Kota Medan, Sumatera Utara",
      phone: "(061) 7868888",
      url: "https://www.google.com/maps/dir/?api=1&destination=3.53867360879641,%2098.7067462889654",
      tag: "Buka Peta",
    },
  },
  {
    geometry: {
      type: "Point",
      coordinates: [98.7067462889654, 3.53867360879641],
    },
    properties: {
      name: "TMS Isuzu Medan",
      jenis: "Sales, Service, Parts",
      type: "Dealer",
      address:
        "Jl. Sisingamangaraja KM 9999 , Harjosari I, Kec. Medan Amplas, Kota Medan, Sumatera Utara",
      phone: "(061) 7868888",
      url: "https://www.google.com/maps/dir/?api=1&destination=3.53867360879641,%2098.7067462889654",
      tag: "Buka Peta",
    },
  },
  {
    geometry: {
      type: "Point",
      coordinates: [98.7067462889654, 3.53867360879641],
    },
    properties: {
      name: "TMS Isuzu Medan",
      jenis: "Sales, Service, Parts",
      type: "Dealer",
      address:
        "Jl. Sisingamangaraja KM 9999 , Harjosari I, Kec. Medan Amplas, Kota Medan, Sumatera Utara",
      phone: "(061) 7868888",
      url: "https://www.google.com/maps/dir/?api=1&destination=3.53867360879641,%2098.7067462889654",
      tag: "Buka Peta",
    },
  },
  {
    geometry: {
      type: "Point",
      coordinates: [98.7067462889654, 3.53867360879641],
    },
    properties: {
      name: "TMS Isuzu Medan",
      jenis: "Sales, Service, Parts",
      type: "Dealer",
      address:
        "Jl. Sisingamangaraja KM 9999 , Harjosari I, Kec. Medan Amplas, Kota Medan, Sumatera Utara",
      phone: "(061) 7868888",
      url: "https://www.google.com/maps/dir/?api=1&destination=3.53867360879641,%2098.7067462889654",
      tag: "Buka Peta",
    },
  },
  {
    geometry: {
      type: "Point",
      coordinates: [98.7067462889654, 3.53867360879641],
    },
    properties: {
      name: "TMS Isuzu Medan",
      jenis: "Sales, Service, Parts",
      type: "Dealer",
      address:
        "Jl. Sisingamangaraja KM 9999 , Harjosari I, Kec. Medan Amplas, Kota Medan, Sumatera Utara",
      phone: "(061) 7868888",
      url: "https://www.google.com/maps/dir/?api=1&destination=3.53867360879641,%2098.7067462889654",
      tag: "Buka Peta",
    },
  },
];

export default TmsIsuzuNetworkPage;
