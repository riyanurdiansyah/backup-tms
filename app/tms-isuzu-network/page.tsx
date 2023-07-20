import HeroBanner from "@/components/HeroBanner";
import React from "react";
import { BodyNetwork, Left, Right } from "./Styled";
import CardNetwork from "@/components/Card/CardNetwork";
import Image from "next/image";
import ImgMap from "./img-map.png";

const TmsIsuzuNetworkPage = () => {
  return (
    <div className="tms-isuzu-network-page-wrapper">
      <HeroBanner title={"TMS Isuzu Network"} />
      <BodyNetwork>
        <Left>
          {dummyNetwork?.map((item: any, index: number) => (
            <CardNetwork
              name={item?.properties?.name}
              jenis={item?.properties?.jenis}
              address={item?.properties?.address}
              phone={item?.properties?.phone}
            />
          ))}
        </Left>
        <Right>
          <Image src={ImgMap} alt="" layout="responsive" objectFit="cover" />
        </Right>
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
