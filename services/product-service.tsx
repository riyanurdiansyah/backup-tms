import { prismaClient } from "@/config/database";
import {
  Product,
  ProductContent,
  ProductSpecification,
  ProductType,
} from "@prisma/client";

const get = async () => {
  const result = await prismaClient.product.findMany({
    select: {
      image: true,
      image_bg: true,
      name: true,
      product_id: true,
      cabin: true,
      gvw: true,
      max_power: true,
      max_torque: true,
      product_type: true,
      product_type_id: false,
      contents: true,
    },
  });

  return result;
};

const getDetail = async (id: string) => {
  const result = await prismaClient.product.findUnique({
    where: {
      product_id: id,
    },
    include: {
      specifications: true,
      contents: true,
    },
  });

  return result;
};

const getType = async () => {
  const result = await prismaClient.productType.findMany({});

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.product.findUnique({
    where: {
      product_id: id,
    },
    include: {
      specifications: true,
      contents: true,
    },
  });

  return result;
};

const deleteById = async (id: string) => {
  const result = await prismaClient.product.delete({
    where: {
      product_id: id,
    },
  });

  return result;
};

const post = async (product: Product) => {
  const result = await prismaClient.product.create({
    data: product,
  });

  return result;
};

const put = async (product: Product) => {
  const result = await prismaClient.product.update({
    data: product,
    where: {
      product_id: product.product_id,
    },
  });

  return result;
};

const getSpecification = async () => {
  const result = await prismaClient.productSpecification.findMany({});

  return result;
};

const postSpecification = async (product: ProductSpecification) => {
  const result = await prismaClient.productSpecification.create({
    data: product,
  });

  return result;
};

const deleteByIdSpecification = async (id: string) => {
  const result = await prismaClient.productSpecification.delete({
    where: {
      product_spesification_id: id,
    },
  });

  return result;
};

const putSpecification = async (product: ProductSpecification) => {
  const result = await prismaClient.productSpecification.update({
    data: product,
    where: {
      product_spesification_id: product.product_spesification_id,
    },
  });

  return result;
};

const getByIdSpesification = async (id: string) => {
  const result = await prismaClient.productSpecification.findUnique({
    where: {
      product_spesification_id: id,
    },
  });

  return result;
};

const deleteByIdSpesification = async (id: string) => {
  const result = await prismaClient.productSpecification.delete({
    where: {
      product_spesification_id: id,
    },
  });

  return result;
};

const postType = async (product: ProductType) => {
  const result = await prismaClient.productType.create({
    data: product,
  });

  return result;
};

const putType = async (product: ProductType) => {
  const result = await prismaClient.productType.update({
    data: product,
    where: {
      product_type_id: product.product_type_id,
    },
  });

  return result;
};

const getByIdType = async (id: string) => {
  const result = await prismaClient.productType.findUnique({
    where: {
      product_type_id: id,
    },
  });

  return result;
};

const getContent = async () => {
  const result = await prismaClient.productContent.findMany({});

  return result;
};

const postContent = async (content: ProductContent) => {
  const result = await prismaClient.productContent.create({
    data: content,
  });

  return result;
};

const putContent = async (product: ProductContent) => {
  const result = await prismaClient.productContent.update({
    data: product,
    where: {
      product_content_id: product.product_content_id,
    },
  });

  return result;
};

const deleteByIdContent = async (id: string) => {
  const result = await prismaClient.productContent.delete({
    where: {
      product_content_id: id,
    },
  });

  return result;
};

const getByIdContent = async (id: string) => {
  const result = await prismaClient.productContent.findUnique({
    where: {
      product_content_id: id,
    },
  });

  return result;
};

const deleteByIdType = async (id: string) => {
  const result = await prismaClient.productType.delete({
    where: {
      product_type_id: id,
    },
  });

  return result;
};

export default {
  get,
  post,
  put,
  getDetail,
  getById,
  deleteById,
  getSpecification,
  postSpecification,
  deleteByIdSpecification,
  putSpecification,
  deleteByIdSpesification,
  getByIdSpesification,

  getType,
  postType,
  getByIdType,
  putType,
  getByIdContent,
  putContent,
  deleteByIdContent,
  getContent,
  postContent,
  deleteByIdType,
};
