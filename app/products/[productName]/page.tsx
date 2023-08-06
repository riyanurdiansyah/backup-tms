"use client";
import React, { FC } from "react";
import {
  BtnItem,
  ButtonGroup,
  GalleryContent,
  HeroContent,
  ItemContentProduct,
  LeftItemContent,
  ListContentProduct,
  ListGallery,
  RightItemContent,
  TitleGallery,
} from "./Styled";
import Image from "next/image";
import BgHero from "./bg-hero.png";
import Flickity from "react-flickity-component";

import ImageGallery1 from "./img-gallery-1.png";
import ImageGallery2 from "./img-gallery-2.png";
import ImageGallery3 from "./img-gallery-3.png";

const ProductDetail: FC<IProductDetail> = ({ params: { productName } }) => {
  return (
    <div className="detail-product-page-wrapper">
      <HeroContent>
        <Image
          src={BgHero}
          alt=""
          loading="lazy"
          layout="responsive"
          objectFit="contain"
        />
      </HeroContent>
      <ListContentProduct>
        {dummyProduct.map((item, index) => (
          <>
            <ItemContentProduct
              style={{
                flexDirection: `${index % 2 != 0 ? "row-reverse" : "row"}`,
              }}
            >
              <LeftItemContent>
                <Image
                  src={item.image}
                  alt=""
                  layout="responsive"
                  objectFit="contain"
                  width="0"
                  height="0"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
              </LeftItemContent>
              <RightItemContent
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </ItemContentProduct>
          </>
        ))}
      </ListContentProduct>
      <ButtonGroup>
        <BtnItem>Find Dealer</BtnItem>
        <BtnItem>Download Brochure</BtnItem>
        <BtnItem>Consultation</BtnItem>
      </ButtonGroup>
      <GalleryContent>
        <TitleGallery>Gallery</TitleGallery>
        <ListGallery>
          <Flickity
            className={"carousel-list-gallery"}
            options={{
              autoPlay: true,
              pageDots: true,
              draggable: true,
            }}
          >
            <Image
              src={ImageGallery1}
              alt=""
              loading="lazy"
              layout="responsive"
              objectFit="contain"
            />
            <Image
              src={ImageGallery2}
              alt=""
              loading="lazy"
              layout="responsive"
              objectFit="contain"
            />
            <Image
              src={ImageGallery3}
              alt=""
              loading="lazy"
              layout="responsive"
              objectFit="contain"
            />
          </Flickity>
        </ListGallery>
      </GalleryContent>
      <></>
    </div>
  );
};

const dummyProduct = [
  {
    image:
      "https://isuzu-astra.com/wp-content/uploads/2022/04/traga-engine1.jpg",
    desc: " <h2>Bertenaga Untuk Keuntungan Usaha Anda</h2> <p> Isuzu TRAGA Pick Up FD & Isuzu TRAGA Box kini menggunakan teknologi mesin Common Rail 4 silinder, 4JA1-CR yang dilengkapi VGT Turbo Intercooler, Exhaust Gas Recirculation (EGR) dan Diesel Oxidation Catalyst (DOC), sehingga mampu menghasilkan emisi gas buang berstandar EURO4. </p> <p> Isuzu TRAGA hadir dengan kapasitas 2,500 cc yang mampu menghasilkan tenaga 80 PS dan torsi 19.5 kg.m pada 1,800 – 2,400 rpm, serta mesin injeksi berstandar Common Rail. Hal ini menjadikan Isuzu TRAGA lebih bertenaga namun tetap irit. </p> <p> Isuzu TRAGA Pick Up FD & Isuzu TRAGA Box yang menggunakan mesin Common Rail 4JA1-CR, dilengkapi dengan timing gear yang lebih baik sehingga mampu memperpanjang usia kendaraan. </p>",
  },
  {
    image: "https://isuzu-astra.com/wp-content/uploads/2022/04/traga-euro2.jpg",
    desc: " <h2>Fungsional Dan Siap Digunakan</h2> <p> Isuzu TRAGA hadir dengan dua pilihan varian, Isuzu TRAGA Pick Up FD dan Isuzu TRAGA Box yang siap digunakan untuk menunjang bisnis Anda, sehingga mampu meningkatkan efektivitas dan efisiensi proses operasional bisnis Anda. </p>",
  },
  {
    image: "https://isuzu-astra.com/wp-content/uploads/2022/04/traga-kargo.jpg",
    desc: " <h2>Kargo Terluas di Kelasnya</h2> <p> Isuzu TRAGA dirancang dengan dimensi kargo yang luas, sehingga mampu memaksimalkan muatan. Hadir dengan panjang 2.8 m dan lebar 1.6 m, Isuzu TRAGA terbukti memiliki kargo terluas di kelasnya yang mampu mengangkut lebih banyak* sehingga lebih menguntungkan dan siap memaksimalkan efisiensi biaya operasional bisnis Anda. </p> <p> <i> *Isuzu TRAGA Pick Up FD mampu membawa 60 galon sekali angkut sementara Isuzu TRAGA Box mampu membawa 300 kardus mi instan sekali angkut. </i> </p>",
  },
  {
    image:
      "https://isuzu-astra.com/wp-content/uploads/2020/08/03-Detail-Isuzu-Traga-Mudah-Bermanuver.png",
    desc: "<h2>Mudah Bermanuver</h2> <p> Lalu lintas yang tidak bisa ditebak menjadikan kemudahan bermanuver menjadi salah satu poin penting dalam memilih kendaraan niaga untuk bisnis Anda. Isuzu TRAGA yang didukung transmisi 5 percepatan, memiliki radius putar yang sangat kecil (4.5 m) sehingga memudahkan manuver kendaraan bahkan saat melewati jalan sempit sekalipun. </p>",
  },
  {
    image:
      "https://isuzu-astra.com/wp-content/uploads/2020/08/04-Detail-Isuzu-Traga-kabin-lega-2.png",
    desc: " <h2>Kenyamanan dan Keamanan Adalah Prioritas</h2> <p> Isuzu TRAGA Pick Up FD dan Isuzu TRAGA Box dilengkapi dengan fan blower guna meningkatkan sirkulasi udara di dalam kabin. Kenyamanan pengemudi saat berkendara pun semakin optimal. Isuzu TRAGA Pick Up FD dan Isuzu TRAGA Box dilengkapi dengan audio bluetooth untuk mengoptimalkan kenyamanan pengemudi selama berkendara, serta retractable seatbelt sabuk pengaman yang tak hanya memastikan keamanan tapi juga bisa disesuaikan bentuk badan pengemudi agar lebih nyaman. Isuzu TRAGA Pick Up FD dan Isuzu TRAGA Box juga dilengkapi dengan APAR (Alat Pemadam Api Ringan) untuk memaksimalkan keamanan pada kondisi genting (kebakaran) </p>",
  },
];

interface IProductDetail {
  params: {
    productName: string;
  };
}

export default ProductDetail;
