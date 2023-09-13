import authService from "@/services/auth-service";
import { UserRole } from "@prisma/client";

const addValidation = async (request: Request, role: UserRole) => {
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

  if (role.role === undefined) {
    return {
      code: 400,
      message: "role is required",
    };
  }

  return null;
};

export default {
    addValidation,
  };
  