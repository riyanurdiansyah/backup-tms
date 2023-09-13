import authService from "@/services/auth-service";
import { Career, CareerRank, CareerRankBase } from "@prisma/client";

const addValidation = async (request: Request, career: Career) => {
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

  if (career.title === undefined) {
    return {
      code: 400,
      message: "title is required",
    };
  }

  if (career.subtitle === undefined) {
    return {
      code: 400,
      message: "subtitle is required",
    };
  }

  if (career.published === undefined) {
    return {
      code: 400,
      message: "published is required",
    };
  }

  if (career.expired === undefined) {
    return {
      code: 400,
      message: "expired is required",
    };
  }

  if (career.link === undefined) {
    return {
      code: 400,
      message: "link is required",
    };
  }

  if (career.location === undefined) {
    return {
      code: 400,
      message: "location is required",
    };
  }

  if (career.status === undefined) {
    return {
      code: 400,
      message: "status is required",
    };
  }

  if (career.description === undefined) {
    return {
      code: 400,
      message: "description is required",
    };
  }

  if (career.kualifikasi === undefined) {
    return {
      code: 400,
      message: "kualifikasi is required",
    };
  }
  if (career.benefit === undefined) {
    return {
      code: 400,
      message: "benefit is required",
    };
  }
  if (career.persyaratan === undefined) {
    return {
      code: 400,
      message: "persyaratan is required",
    };
  }

  return null;
};

const updateValidation = async (request: Request, career: Career) => {
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

  if (career.career_id === undefined) {
    return {
      code: 400,
      message: "career_id is required",
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

const addRankValidation = async (request: Request, career: CareerRankBase) => {
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

  if (career.rank === undefined) {
    return {
      code: 400,
      message: "rank is required",
    };
  }

  return null;
};

export default {
  addValidation,
  updateValidation,
  deleteValidation,
  addRankValidation,
};
