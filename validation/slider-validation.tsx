import authService from "@/services/auth-service";

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

  if (formData.get("image") === null) {
    return {
      code: 400,
      message: "image is required",
    };
  }

  if (formData.get("nama") === null) {
    return {
      code: 400,
      message: "nama is required",
    };
  }

  if (formData.get("image") !== null) {
    const image = formData.get("image") as unknown as Blob;
    if (
      !image.name.includes("jpg") &&
      !image.name.includes("jpeg") &&
      !image.name.includes("webp") &&
      !image.name.includes("png")
    ) {
      return {
        code: 400,
        message: "image is only allowed for jpg/jpeg/png/webp",
      };
    }
  }

  if (formData.get("video") !== null) {
    const video = formData.get("video") as unknown as Blob;
    if (!video.name.includes("gif")) {
      return {
        code: 400,
        message: "video is only allowed for gif",
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

  if (formData.get("slider_id") === null) {
    return {
      code: 400,
      message: "slider_id is required",
    };
  }

  if (formData.get("image") !== null) {
    const image = formData.get("image") as unknown as Blob;
    if (
      !image.name.includes("jpg") &&
      !image.name.includes("jpeg") &&
      !image.name.includes("webp") &&
      !image.name.includes("png")
    ) {
      return {
        code: 400,
        message: "image is only allowed for jpg/jpeg/png/webp",
      };
    }
  }

  if (formData.get("video") !== null) {
    const video = formData.get("video") as unknown as Blob;
    if (!video.name.includes("gif")) {
      return {
        code: 400,
        message: "video is only allowed for gif",
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
