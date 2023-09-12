import { prismaClient } from "@/config/database";
import { Booking, Sosmed } from "@prisma/client";

const get = async () => {
  const result = await prismaClient.booking.findMany();

  return result;
};

const getById = async (id: string) => {
  const result = await prismaClient.booking.findUnique({
    where: {
      booking_id: id,
    },
  });
  return result;
};

const post = async (booking: Booking) => {
  const result = await prismaClient.booking.create({
    data: booking,
  });

  return result;
};

const put = async (booking: Booking) => {
  const result = await prismaClient.booking.update({
    data: booking,
    where: {
      booking_id: booking.booking_id,
    },
  });

  return result;
};

const deleteById = async (id: string) => {
  const result = await prismaClient.booking.delete({
    where: {
      booking_id: id,
    },
  });

  return result;
};

export default {
  get,
  post,
  put,
  getById,
  deleteById,
};
