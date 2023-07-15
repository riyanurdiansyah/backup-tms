"use client";
import React, { FC } from "react";
import {
  BodyCard,
  BtnApply,
  BtnDetail,
  Card,
  CardImgBrand,
  FooterCard,
  HeadCard,
  JobExpired,
  JobQualification,
  JobRank,
  JobTitle,
  Jobcategory,
} from "./Styled";

import { BiTime } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

const CardJob: FC<ICardJob> = ({ id, title, category, rank, expired }) => {
  const router = useRouter();

  return (
    <Card>
      <HeadCard>
        <CardImgBrand />
      </HeadCard>
      <BodyCard>
        <JobTitle>{title}</JobTitle>
        <JobQualification>
          <Jobcategory>
            <MdWorkOutline color="#e7cccc" /> {category}
          </Jobcategory>
          <JobRank>
            <GoDotFill color="#e7cccc" /> {rank}
          </JobRank>
        </JobQualification>
        <JobExpired>
          <BiTime color="#e7cccc" />
          {expired}
        </JobExpired>
      </BodyCard>
      <FooterCard>
        <BtnDetail onClick={() => router.push(`/career/${id}`)}>
          Lihat Detail
        </BtnDetail>
        <BtnApply>Lamar</BtnApply>
      </FooterCard>
    </Card>
  );
};

interface ICardJob {
  id: number;
  title: string;
  category: string;
  rank: string;
  expired: any;
}
export default CardJob;
