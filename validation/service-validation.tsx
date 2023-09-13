import authService from "@/services/auth-service";
import { ProductSpecification, Service } from "@prisma/client";

const addValidation = async (request: Request, service: Service) => {
  const token = request.headers.get("Authorization");
  if (token === null) {
    return {
      code: 404,
      message: "Unauthorized: Token is missing",
    };
  }

  if (token !== null) {
    const checkToken = await authService.verifyJWT(token.split("Bearer ")[1]);
    if (!checkToken) {
      return {
        code: 404,
        message: "Unauthorized: Token is invalid",
      };
    }
  }

  if (service.description === undefined) {
    return {
      code: 400,
      message: "description is required",
    };
  }


  if (service.title === undefined) {
    return {
      code: 400,
      message: "title is required",
    };
  }

  return null;
};


const updateValidation = async (request: Request, id: string) => {
    const token = request.headers.get("Authorization");
    if (token === null) {
      return {
        code: 404,
        message: "Unauthorized: Token is missing",
      };
    }
  
    if (token !== null) {
      const checkToken = await authService.verifyJWT(token.split("Bearer ")[1]);
      if (!checkToken) {
        return {
          code: 404,
          message: "Unauthorized: Token is invalid",
        };
      }
    }


    if(id === undefined || id === null) {
        return {
            code: 400,
            message: "service_id is required",
          };
    }
  
    return null;
  };

  export default {
    addValidation,
    updateValidation,
  };
  