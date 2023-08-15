"use client";
import HeroBanner from "@/components/HeroBanner";
import React, { FC, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  BodyNetwork,
  Left,
  ListNetwork,
  PopupMarkerContent,
  Right,
  TextMarker,
  Title,
  TitleMarker,
  Togle,
} from "./Styled";
import CardNetwork from "@/components/Card/CardNetwork";
import Image from "next/image";
import ImgMap from "./img-map.png";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYXJpZm51cnJvaG1hbiIsImEiOiJjbGw5azIzZW4weWlqM3B0anMyMzZ2a3puIn0.2pPasYXM60HfzFcFt7LJKQ";

const TmsIsuzuNetworkPage = () => {
  const [isShow, setIsShow] = useState(false);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [101.23429001585, 0.910708436476724], // Koordinat Paris
        zoom: 5,
        scrollZoom: false,
      });

      map.addControl(new mapboxgl.NavigationControl());

      dummyNetwork.forEach((data: any) => {
        const marker = new mapboxgl.Marker({ draggable: false, color: "red" })
          .setLngLat(data.coordinates)
          .addTo(map);

        const popupContent = document.createElement("div");
        ReactDOM.render(<PopupMarker data={data} />, popupContent);

        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
        }).setDOMContent(popupContent);

        marker.getElement()?.addEventListener("click", () => {
          popup.addTo(map);

          // Zoom ke marker yang di klik
          map.flyTo({
            center: data.coordinates,
            zoom: 12,
            essential: true,
          });
        });

        marker.setPopup(popup);

        markers.current.push(marker);
      });
    }
  });

  return (
    <div className="tms-isuzu-network-page-wrapper">
      <HeroBanner title={"TMS Isuzu Network"} />
      <BodyNetwork>
        <Left isShow={isShow}>
          <Title>Lokasi Kami</Title>
          <ListNetwork>
            {dummyNetwork?.map((item: any, index: number) => (
              <CardNetwork
                name={item?.name}
                jenis={item?.jenis}
                address={item?.address}
                phone={item?.phone}
              />
            ))}
          </ListNetwork>
        </Left>
        <Right>
          {/* <Image src={ImgMap} alt="" layout="fill" objectFit="cover" /> */}
          <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
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
    coordinates: [98.7067462889654, 3.53867360879641],
    name: "TMS Isuzu Medan",
    jenis: "Sales, Service, Parts",
    type: "Dealer",
    address:
      "Jl. Sisingamangaraja KM 9999 , Harjosari I, Kec. Medan Amplas, Kota Medan, Sumatera Utara",
    phone: "(061) 7868888",
    url: "https://www.google.com/maps/dir/?api=1&destination=3.53867360879641,%2098.7067462889654",
  },
  {
    coordinates: [101.41851946031835, 0.48626866948975994],
    name: "TMS Isuzu Medan",
    jenis: "Sales, Service, Parts",
    type: "Dealer",
    address:
      "Jl. Sisingamangaraja KM 9999 , Harjosari I, Kec. Medan Amplas, Kota Medan, Sumatera Utara",
    phone: "(061) 7868888",
    url: "https://www.google.com/maps/dir/?api=1&destination=3.53867360879641,%2098.7067462889654",
  },
  {
    coordinates: [100.350090064083, -0.913991989903357],
    name: "TMS Isuzu Medan",
    jenis: "Sales, Service, Parts",
    type: "Dealer",
    address:
      "Jl. Sisingamangaraja KM 9999 , Harjosari I, Kec. Medan Amplas, Kota Medan, Sumatera Utara",
    phone: "(061) 7868888",
    url: "https://www.google.com/maps/dir/?api=1&destination=3.53867360879641,%2098.7067462889654",
  },
  {
    coordinates: [95.3135510678894, 5.51809742894167],
    name: "TMS Isuzu Medan",
    jenis: "Sales, Service, Parts",
    type: "Dealer",
    address:
      "Jl. Sisingamangaraja KM 9999 , Harjosari I, Kec. Medan Amplas, Kota Medan, Sumatera Utara",
    phone: "(061) 7868888",
    url: "https://www.google.com/maps/dir/?api=1&destination=3.53867360879641,%2098.7067462889654",
  },
  {
    coordinates: [104.020336978709, 1.15456225230545],
    name: "TMS Isuzu Medan",
    jenis: "Sales, Service, Parts",
    type: "Dealer",
    address:
      "Jl. Sisingamangaraja KM 9999 , Harjosari I, Kec. Medan Amplas, Kota Medan, Sumatera Utara",
    phone: "(061) 7868888",
    url: "https://www.google.com/maps/dir/?api=1&destination=3.53867360879641,%2098.7067462889654",
  },
];

const PopupMarker: FC<IPopupMarker> = ({ data }) => {
  return (
    <PopupMarkerContent>
      <TitleMarker>{data.name}</TitleMarker>
      <TextMarker>{data.address}</TextMarker>
      <TextMarker>{data.phone}</TextMarker>
      <TextMarker
        onClick={() => window.open(data.url, "_blank")}
        className="btn-open-map"
      >
        Buka Map
      </TextMarker>
    </PopupMarkerContent>
  );
};

interface IPopupMarker {
  // data:any
  data: {
    coordinates: any;
    name: string;
    jenis: string;
    type: string;
    address: string;
    phone: string;
    url: string;
  };
}

export default TmsIsuzuNetworkPage;
