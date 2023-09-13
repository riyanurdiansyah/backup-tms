

import { prismaClient } from "@/config/database";
import { Bank, Dealer, DealerCabang } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.bank.findMany({
  });

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.bank.findUnique({
      where: {
          bank_id : id
      }
  });

  return result;
};


const post = async (bank: Bank) => {
    const result = await prismaClient.bank.create({
        data: bank
    });
  
    return result;
  };

  const put = async (bank: Bank) => {
      const result = await prismaClient.bank.update({
          where: {
              bank_id : bank.bank_id
          },
          data: bank
      });
    
      return result;
    };

    const deleteById = async (id: string) => {
        const result = await prismaClient.bank.delete({
            where: {
                bank_id : id
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