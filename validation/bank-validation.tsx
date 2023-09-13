import authService from "@/services/auth-service";
import { Bank, Dealer, DealerCabang } from "@prisma/client";

const addValidation = async (request: Request, bank: Bank) => {
  const token = request.headers.get("Authorization");
  if (token === null) {
    return {
      code: 400,
      message: "Unauthorized: Token is missing",
    };
  }

  if (token !== null) {
    const checkToken = await authService.verifyJWT(token.split("Bearer ")[1]);
    if (!checkToken) {
      return {
        code: 400,
        message: "Unauthorized: Token is invalid",
      };
    }
  }

  if (bank.nama === undefined) {
    return {
      code: 400,
      message: "nama is required",
    };
  }

  if (bank.bunga === undefined) {
    return {
      code: 400,
      message: "bunga is required",
    };
  }

  return null;
};


const updateValidation = async (request: Request, bank: Bank) => {
  const token = request.headers.get("Authorization");
  if (token === null) {
    return {
      code: 400,
      message: "Unauthorized: Token is missing",
    };
  }

  if (token !== null) {
    const checkToken = await authService.verifyJWT(token.split("Bearer ")[1]);
    if (!checkToken) {
      return {
        code: 400,
        message: "Unauthorized: Token is invalid",
      };
    }
  }

  if (bank.bank_id === undefined) {
    return {
      code: 400,
      message: "bank_id is required",
    };
  }

  return null;
};


const deleteValidation = async (request: Request, id: string) => {
  const token = request.headers.get("Authorization");
  if (token === null) {
    return {
      code: 400,
      message: "Unauthorized: Token is missing",
    };
  }

  if (token !== null) {
    const checkToken = await authService.verifyJWT(token.split("Bearer ")[1]);
    if (!checkToken) {
      return {
        code: 400,
        message: "Unauthorized: Token is invalid",
      };
    }
  }

  if (id === undefined || id === null) {
    return {
      code: 400,
      message: "Bank id is required",
    };
  }

  return null;
};

export default {
  addValidation,
  updateValidation,
  deleteValidation
};
