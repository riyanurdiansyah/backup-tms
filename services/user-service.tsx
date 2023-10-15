import { prismaClient } from "@/config/database";
import { User } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.user.findMany({
    select: {
      user_id: true,
      username: true,
      email: true,
      password: false,
      role: true,
      role_id: false,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.user.findUnique({
    where: {
      user_id: id,
    },
    select: {
      user_id: true,
      username: true,
      email: true,
      password: false,
      role: true,
      role_id: false,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

const getByIdWithPass = async (id: string) => {
  const result = await prismaClient.user.findUnique({
    where: {
      user_id: id,
    },
  });

  return result;
};

const deleteById = async (id: string) => {
  const result = await prismaClient.user.delete({
    where: {
      user_id: id,
    },
  });

  return result;
};

const post = async (role: User) => {
  const result = await prismaClient.user.create({
    data: role,
  });

  return result;
};

const put = async (user: User) => {
  const result = await prismaClient.user.update({
    data: user,
    where: {
      user_id: user.user_id,
    },
  });

  return result;
};

export default {
  get,
  getById,
  getByIdWithPass,
  post,
  put,
  deleteById,
};
