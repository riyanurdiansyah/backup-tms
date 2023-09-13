import authService from "@/services/auth-service";
import { Dealer, DealerCabang } from "@prisma/client";

const addValidation = async (request: Request, dealer: Dealer) => {
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

  if (dealer.name === undefined) {
    return {
      code: 400,
      message: "name is required",
    };
  }

  if (dealer.subtitle === undefined) {
    return {
      code: 400,
      message: "subtitle is required",
    };
  }

  if (dealer.phone === undefined) {
    return {
      code: 400,
      message: "phone is required",
    };
  }

  if (dealer.longitude === undefined) {
    return {
      code: 400,
      message: "longitude is required",
    };
  }

  if (dealer.latitude === undefined) {
    return {
      code: 400,
      message: "latitude is required",
    };
  }

  if (dealer.location === undefined) {
    return {
      code: 400,
      message: "location is required",
    };
  }

  if (dealer.cabang_id === undefined) {
    return {
      code: 400,
      message: "cabang_id is required",
    };
  }

  return null;
};

const addValidationCabang = async (request: Request, dealer: DealerCabang) => {
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

  if (dealer.name === undefined) {
    return {
      code: 400,
      message: "name is required",
    };
  }

  return null;
};

const updateValidation = async (request: Request, dealer: Dealer) => {
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

  if (dealer.cabang_id === undefined) {
    return {
      code: 400,
      message: "cabang_id is required",
    };
  }

  return null;
};

export default {
  addValidation,
  addValidationCabang,
  updateValidation,
};
