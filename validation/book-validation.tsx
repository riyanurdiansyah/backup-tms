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

  if (formData.get("nama") === null) {
    return {
      code: 400,
      message: "nama is required",
    };
  }

  if (formData.get("file") === null) {
    return {
      code: 400,
      message: "file is required",
    };
  }

  if (formData.get("file") !== null) {
    const image = formData.get("file") as unknown as Blob;
    if (!image.name.includes("pdf")) {
      return {
        code: 400,
        message: "file is only allowed for pdf",
      };
    }

    if (image.size > MAX_FILE_SIZE) {
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

  if (formData.get("book_id") === null) {
    return {
      code: 400,
      message: "book_id is required",
    };
  }

  if (formData.get("file") !== null) {
    const image = formData.get("file") as unknown as Blob;
    if (!image.name.includes("pdf")) {
      return {
        code: 400,
        message: "image is only allowed for pdf",
      };
    }

    if (image.size > MAX_FILE_SIZE) {
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
      message: "Slider id is required",
    };
  }

  return null;
};

export default {
  addValidation,
  updateValidation,
  deleteValidation,
};
