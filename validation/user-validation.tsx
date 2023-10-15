import authService from "@/services/auth-service";
import { User } from "@prisma/client";

const updateValidation = async (request: Request, user: User) => {
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

  if (user.user_id === undefined) {
    return {
      code: 400,
      message: "user_id is required",
    };
  }

  if (user.email === undefined) {
    return {
      code: 400,
      message: "email is required",
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
      message: "user id is required",
    };
  }

  return null;
};

export default {
  updateValidation,
  deleteValidation,
};
