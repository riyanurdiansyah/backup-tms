import authService from "@/services/auth-service";
import { Sosmed } from "@prisma/client";

const addValidation = async (request: Request, career: Sosmed) => {
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

  if (career.facebook === undefined) {
    return {
      code: 400,
      message: "facebook is required",
    };
  }

  if (career.whatsapp === undefined) {
    return {
      code: 400,
      message: "whatsapp is required",
    };
  }

  if (career.twitter === undefined) {
    return {
      code: 400,
      message: "twitter is required",
    };
  }

  if (career.instagram === undefined) {
    return {
      code: 400,
      message: "instagram is required",
    };
  }

  if (career.email === undefined) {
    return {
      code: 400,
      message: "email is required",
    };
  }

  return null;
};

const updateValidation = async (request: Request, career: Sosmed) => {
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

  if (career.sosmed_id === undefined) {
    return {
      code: 400,
      message: "sosmed_id is required",
    };
  }

  return null;
};

const deleteValidation = async (request: Request) => {
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

  return null;
};

export default {
  addValidation,
  updateValidation,
  deleteValidation,
};
