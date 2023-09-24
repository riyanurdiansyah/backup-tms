import authService from "@/services/auth-service";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const addValidation = async (request: Request, formData: FormData) => {
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

  if (formData.get("thumbnail") === null) {
    return {
      code: 400,
      message: "thumbnail is required",
    };
  }

  if (formData.get("brochure") === null) {
    return {
      code: 400,
      message: "brochure is required",
    };
  }

  if (formData.get("title") === null) {
    return {
      code: 400,
      message: "title is required",
    };
  }

  if (formData.get("thumbnail") !== null) {
    const thumbnail = formData.get("thumbnail") as unknown as Blob;
    if (
      !thumbnail.name.includes("jpg") &&
      !thumbnail.name.includes("jpeg") &&
      !thumbnail.name.includes("webp") &&
      !thumbnail.name.includes("png")
    ) {
      return {
        code: 400,
        message: "thumbnail is only allowed for jpg/jpeg/png/webp",
      };
    }
  }

  if (formData.get("brochure") !== null) {
    const brochure = formData.get("brochure") as unknown as Blob;
    if (!brochure.name.includes("pdf")) {
      return {
        code: 400,
        message: "brochure is only allowed for pdf",
      };
    }

    if (brochure.size > MAX_FILE_SIZE) {
      return {
        code: 400,
        message: "file size maximal is 10MB",
      };
    }
  }
  return null;
};

const updateValidation = async (request: Request, formData: FormData) => {
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

  if (formData.get("brochure_id") === null) {
    return {
      code: 400,
      message: "brochure_id is required",
    };
  }

  if (formData.get("thumbnail") !== null) {
    const thumbnail = formData.get("thumbnail") as unknown as Blob;
    if (
      !thumbnail.name.includes("jpg") &&
      !thumbnail.name.includes("jpeg") &&
      !thumbnail.name.includes("webp") &&
      !thumbnail.name.includes("png")
    ) {
      return {
        code: 400,
        message: "thumbnail is only allowed for jpg/jpeg/png/webp",
      };
    }
  }

  if (formData.get("brochure") !== null) {
    const brochure = formData.get("brochure") as unknown as Blob;
    if (!brochure.name.includes("pdf")) {
      return {
        code: 400,
        message: "brochure is only allowed for pdf",
      };
    }
    if (brochure.size > MAX_FILE_SIZE) {
      return {
        code: 400,
        message: "file size maximal is 10MB",
      };
    }
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

  if (id === null || id === "") {
    return {
      code: 400,
      message: "Brochure id is required",
    };
  }

  return null;
};

export default {
  addValidation,
  updateValidation,
  deleteValidation,
};
