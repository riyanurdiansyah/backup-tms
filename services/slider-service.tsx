import { prismaClient } from "@/config/database";
import { s3client } from "@/config/s3-digitalocean";
import { Slider } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.slider.findMany();

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.slider.findUnique({
    where: {
      slider_id: id,
    },
  });

  return result;
};

const deleteById = async (id: string) => {
  const result = await prismaClient.slider.delete({
    where: {
      slider_id: id,
    },
  });

  return result;
};

const post = async (slider: Slider) => {
  const result = await prismaClient.slider.create({
    data: slider,
  });

  return result;
};

const put = async (slider: Slider) => {
  const result = await prismaClient.slider.update({
    data: slider,
    where: {
      slider_id: slider.slider_id,
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
