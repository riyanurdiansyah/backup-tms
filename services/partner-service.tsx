import { prismaClient } from "@/config/database";
import { query } from "@/config/db";
import { Partner } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.partner.findMany();

  return result;
};

const post = async (partner: Partner) => {
  const result = await prismaClient.partner.create({
    data: partner,
  });

  return result;
};

const put = async (partner: Partner) => {
  const result = await prismaClient.partner.update({
    data: partner,
    where: {
      partner_id: partner.partner_id,
    },
  });

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.partner.findUnique({
    where: {
      partner_id: id,
    },
  });

  return result;
};

const deleteById = async (id: string) => {
  const result = await prismaClient.partner.delete({
    where: {
      partner_id: id,
    },
  });

  return result;
};

export default {
  get,
  post,
  getById,
  put,
  deleteById,
};
