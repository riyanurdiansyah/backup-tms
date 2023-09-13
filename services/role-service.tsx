// import { query } from "@/config/db"

import { prismaClient } from "@/config/database";
import {  UserRole } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.userRole.findMany();

  return result;
};

const getById = async (id: number) => {
  const result = await prismaClient.userRole.findUnique({
    where: {
      role_id: id,
    },
  });

  return result;
};

const deleteById = async (id: number) => {
  const result = await prismaClient.userRole.delete({
    where: {
      role_id: id,
    },
  });

  return result;
};

const post = async (role: UserRole) => {
  const result = await prismaClient.userRole.create({
    data: role,
  });

  return result;
};

const put = async (role: UserRole) => {
  const result = await prismaClient.userRole.update({
    data: role,
    where: {
      role_id: role.role_id,
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
};
