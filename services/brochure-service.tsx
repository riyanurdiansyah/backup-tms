import { prismaClient } from "@/config/database";
import { Brochure, Service } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.brochure.findMany();

  return result;
};


const getById = async (id: string) => {
    const result = await prismaClient.brochure.findUnique({
      where: {
        brochure_id: id
      }
    });
    return result;
};

const post = async (brochure: Brochure) => {
    const result = await prismaClient.brochure.create({
      data: brochure
    });
  
    return result;
  };
  
  
  const put = async (brochure: Brochure) => {
    const result = await prismaClient.brochure.update({
      data: brochure,
      where: {
        brochure_id: brochure.brochure_id
      }
    });
  
    return result;
  };
  
  const deleteById = async (id: string) => {
    const result = await prismaClient.brochure.delete({
      where: {
        brochure_id: id
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