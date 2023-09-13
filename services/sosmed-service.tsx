import { prismaClient } from "@/config/database";
import { Sosmed } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.sosmed.findMany();

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.sosmed.findUnique({
    where: {
      sosmed_id: id,
    },
  });
  return result;
};

const post = async (sosmed: Sosmed) => {
  const result = await prismaClient.sosmed.create({
    data: sosmed,
  });

  return result;
};

const put = async (sosmed: Sosmed) => {
  const result = await prismaClient.sosmed.update({
    data: sosmed,
    where: {
      sosmed_id: sosmed.sosmed_id,
    },
  });

  return result;
};

const deleteById = async (id: string) => {
  const result = await prismaClient.sosmed.delete({
    where: {
      sosmed_id: id,
    },
  });

  return result;
};

export default {
  get,
  post,
  put,
  getById,
  deleteById,
};
