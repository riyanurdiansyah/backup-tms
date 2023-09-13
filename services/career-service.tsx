import { query } from "@/config/db";
import { prismaClient } from "@/config/database";
import { join } from "path";
import { Career, CareerRank, CareerRankBase } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.career.findMany({
    select: {
      career_id: true,
      title: true,
      subtitle: true,
      description: true,
      expired: true,
      link: true,
      location: true,
      published: true,
      status: true,
      benefit: true,
      kualifikasi: true,
      persyaratan: true,
      ranks: {
        select: {
          career_rank_id: true,
          base: {
            select: {
              rank: true,
            },
          },
        },
      },
      levels: {
        select: {
          career_level_id: true,
          base: {
            select: {
              level: true,
            },
          },
        },
      },
    },
  });
  return result;
};

const post = async (career: Career) => {
  const result = await prismaClient.career.create({
    data: career,
  });

  return result;
};

const put = async (career: Career) => {
  const result = await prismaClient.career.update({
    data: career,
    where: {
      career_id: career.career_id,
    },
  });

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.career.findUnique({
    where: {
      career_id: id,
    },
  });

  return result;
};

const deleteById = async (id: string) => {
  const result = await prismaClient.career.delete({
    where: {
      career_id: id,
    },
  });

  return result;
};

const getRank = async () => {
  const result = await prismaClient.careerRankBase.findMany();
  return result;
};

const postRank = async (career: CareerRankBase) => {
  const result = await prismaClient.careerRankBase.create({
    data: career,
    include: {},
  });

  return result;
};

export default {
  get,
  post,
  getById,
  put,
  deleteById,
  getRank,
  postRank,
};
