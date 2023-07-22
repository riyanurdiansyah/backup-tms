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

const JobDetail: FC<IJobDetail> = ({ params: { jobId } }) => {
  const dataBreadcrumb = ["career", `${jobId}`];

  const data = {
    title: "Admin Staff (Bandung Area)",
    category: "Sistem Informasi",
    rank: "Lulusan Baru",
    expired: "10 Agustus 2023",
    descriptiom:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
    qualification:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
    requirement:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
    benefit:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi magni libero similique exercitationem officiis expedita pariatur ut saepe fugiat praesentium dolorem quam corrupti est eum et, aspernatur blanditiis minima. </p>",
  };

  return (
    <div className="detail-job-page-wrapper">
      <BreadcrumbFull data={dataBreadcrumb} />
      <HeadContent>
        <CardImgBrand />
        <HeadBody>
          <TitleHead>{data.title}</TitleHead>
          <ListInfo>
            <ItemInfo>
              <MdWorkOutline color="#e7cccc" /> {data.category}
            </ItemInfo>
            <ItemInfo>
              <GoDotFill color="#e7cccc" /> {data.rank}
            </ItemInfo>
            <ItemInfo>
              <BiTime color="#e7cccc" /> {data.expired}
            </ItemInfo>
          </ListInfo>
          <BtnApply>Lamar</BtnApply>
        </HeadBody>
      </HeadContent>
      <BodyContent>
        <BodyItem>
          <Subtitle>Deskripsi Pekerjaan</Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: data.descriptiom }} />
        </BodyItem>
        <BodyItem>
          <Subtitle>Kualifikasi</Subtitle>
          <Description
            dangerouslySetInnerHTML={{ __html: data.qualification }}
          />
        </BodyItem>
        <BodyItem>
          <Subtitle>Persyaratan</Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: data.requirement }} />
        </BodyItem>
        <BodyItem>
          <Subtitle>Keuntungan</Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: data.benefit }} />
        </BodyItem>
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
