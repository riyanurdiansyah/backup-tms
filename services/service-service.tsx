import { prismaClient } from "@/config/database";
import { Service } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.service.findMany();

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.service.findUnique({
    where: {
      service_id: id
    }
  });

  return result;
};

const post = async (service: Service) => {
  const result = await prismaClient.service.create({
    data: service
  });

  return result;
};


const put = async (service: Service) => {
  const result = await prismaClient.service.update({
    data: service,
    where: {
      service_id: service.service_id
    }
  });

  return result;
};



const deleteById = async (id: string) => {
  const result = await prismaClient.service.delete({
    where: {
      service_id: id
    }
  });

  return result;
};

export default {
    get,
    post,
    put,
    getById,
    deleteById
}