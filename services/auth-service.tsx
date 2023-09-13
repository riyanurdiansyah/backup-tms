import { query } from "@/config/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prismaClient } from "@/config/database";
import { User } from "@prisma/client";

const getUserByUsername = async (username: string) => {
  const result = await prismaClient.user.findUnique({
    where: {
      username: username,
    },
  });

  return result;
};

const getUserByUsernameWithoutPassword = async (username: string) => {
  const result = await prismaClient.user.findUnique({
    where: {
      username: username,
    },
    select: {
      user_id: true,
      username: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  },);

  return result;
};

const register = async (user: User) => {
  const result = await prismaClient.user.create({
    data: user,
    select: {
      password: true,
      user_id: false,
      username: true,
      email: true,
    },
  });

  return result;
};

const encryptPassword = async (password: string) => {
  return bcrypt.hash(password, 10).then(function (hash: string) {
    return hash;
  });
};

const decryptPassword = async (
  passwordUnhash: string,
  passwordHash: string
) => {
  return bcrypt
    .compare(passwordUnhash, passwordHash)
    .then(function (result: boolean) {
      return result;
    });
};

const verifyJWT = async (token: string) => {
  try {
    const secretKey = process.env.JWT_SECRET_KEY as string;
    jwt.verify(token, secretKey);

    return true;
  } catch (error) {
    return false;
  }
};

const reformatDate = (date: Date, target: string) => {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("id-ID", {timeZone: target}));  
}

const convertToISO8601 = (input: string) => {
  const [datePart, timePart] = input.split(', ');
  const [day, month, year] = datePart.split('/').map(Number);
  const [hour, minute, second] = timePart.split('.').map(Number);
  const isoDate = new Date(year, month - 1, day, hour, minute, second).toISOString();

  return isoDate;
}

export default {
  getUserByUsername,
  encryptPassword,
  decryptPassword,
  register,
  verifyJWT,
  getUserByUsernameWithoutPassword,
  reformatDate,
  convertToISO8601,
};
