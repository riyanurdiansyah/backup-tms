// import { query } from "@/config/db"

import { prismaClient } from "@/config/database";
import { Dealer, DealerCabang } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.dealer.findMany({
    select: {
      dealer_id: true,
      latitude: true,
      location: true,
      longitude: true,
      name: true,
      phone: true,
      subtitle: true,
    },
  });

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.dealer.findUnique({
    where: {
      dealer_id: id,
    },
  });

  return result;
};

const deleteById = async (id: string) => {
  const result = await prismaClient.dealer.delete({
    where: {
      dealer_id: id,
    },
  });

  return result;
};

const post = async (dealer: Dealer) => {
  const result = await prismaClient.dealer.create({
    data: dealer,
  });

  return result;
};

const put = async (dealer: Dealer) => {
  const result = await prismaClient.dealer.update({
    data: dealer,
    where: {
      dealer_id: dealer.dealer_id,
    },
  });

  return result;
};

const getCabang = async () => {
  const result = await prismaClient.dealerCabang.findMany();

  return result;
};

const postCabang = async (dealer: DealerCabang) => {
  const result = await prismaClient.dealerCabang.create({
    data: dealer,
  });

  return result;
};

const putCabang = async (dealer: DealerCabang) => {
  const result = await prismaClient.dealerCabang.update({
    data: dealer,
    where: {
      cabang_id: dealer.cabang_id,
    },
  });

  return result;
};

export default {
  get,
  getById,
  post,
  put,
  deleteById,
  getCabang,
  postCabang,
  putCabang,
};
