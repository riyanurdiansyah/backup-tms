"use client";
import React, { FC } from "react";
import {
  BodyContent,
  BodyItem,
  BtnApply,
  CardImgBrand,
  Description,
  HeadBody,
  HeadContent,
  ItemInfo,
  ListInfo,
  Subtitle,
  TitleHead,
} from "./Styled";
import { BiTime } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import BreadcrumbFull from "@/components/Breadcrumb/BreadcrumbFull";
import { useFetchUmum } from "@/utils/useFetchData";
import { formatTimestampToDate } from "@/utils/convertDate";

const JobDetail: FC<IJobDetail> = ({ params: { jobId } }) => {
  const dataBreadcrumb = ["career", `${jobId}`];

  const [dataJob, loadingDataJob] = useFetchUmum(`/api/career/${jobId}`);

  // const data = {
  //   title: "Admin Staff (Bandung Area)",
  //   category: "Sistem Informasi",
  //   rank: "Lulusan Baru",
  //   expired: "10 Agustus 2023",
  //   descriptiom:
  //     "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
  //   qualification:
  //     "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
  //   requirement:
  //     "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
  //   benefit:
  //     "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
  // };

  return (
    <div className="detail-job-page-wrapper">
      <BreadcrumbFull data={dataBreadcrumb} />
      <HeadContent>
        <CardImgBrand />
        <HeadBody>
          <TitleHead>{`${dataJob?.data?.title} (${dataJob?.data?.location})`}</TitleHead>
          <ListInfo>
            <ItemInfo>
              <MdWorkOutline color="#e7cccc" /> {dataJob?.data?.subtitle}
            </ItemInfo>
            <ItemInfo>
              <GoDotFill color="#e7cccc" /> {dataJob?.data?.status}
            </ItemInfo>
            <ItemInfo>
              <BiTime color="#e7cccc" />{" "}
              {formatTimestampToDate(dataJob?.data?.expired)}
            </ItemInfo>
          </ListInfo>
          <BtnApply onClick={() => window.open(dataJob?.data?.link, "_blank")}>
            Lamar
          </BtnApply>
        </HeadBody>
      </HeadContent>
      <BodyContent>
        {dataJob?.data?.description && (
          <BodyItem>
            <Subtitle>Deskripsi Pekerjaan</Subtitle>
            <Description
              dangerouslySetInnerHTML={{ __html: dataJob?.data?.description }}
            />
          </BodyItem>
        )}
        {dataJob?.data?.kualifikasi && (
          <BodyItem>
            <Subtitle>Kualifikasi</Subtitle>
            <Description
              dangerouslySetInnerHTML={{ __html: dataJob?.data?.kualifikasi }}
            />
          </BodyItem>
        )}
        {dataJob?.data?.persyaratan && (
          <BodyItem>
            <Subtitle>Persyaratan</Subtitle>
            <Description
              dangerouslySetInnerHTML={{ __html: dataJob?.data?.persyaratan }}
            />
          </BodyItem>
        )}
        {dataJob?.data?.benefit && (
          <BodyItem>
            <Subtitle>Keuntungan</Subtitle>
            <Description
              dangerouslySetInnerHTML={{ __html: dataJob?.data?.benefit }}
            />
          </BodyItem>
        )}
      </BodyContent>
    </div>
  );
};

interface IJobDetail {
  params: {
    jobId: string;
  };
}

export default JobDetail;
