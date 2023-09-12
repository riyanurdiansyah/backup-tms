import { prismaClient } from "@/config/database";
import { query } from "@/config/db";
import { Book } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.book.findMany();

  return result;
};

const post = async (book: Book) => {
  const result = await prismaClient.book.create({
    data: book,
  });

  return result;
};

const put = async (book: Book) => {
  const result = await prismaClient.book.update({
    data: book,
    where: {
      book_id: book.book_id,
    },
  });

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.book.findUnique({
    where: {
      book_id: id,
    },
  });

  return result;
};

const deleteById = async (id: string) => {
  const result = await prismaClient.book.delete({
    where: {
      book_id: id,
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
