import authService from "@/services/auth-service";
import {
  ProductContent,
  ProductSpecification,
  ProductType,
} from "@prisma/client";

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

  if (formData.get("image_bg") === null) {
    return {
      code: 400,
      message: "image_bg is required",
    };
  }

  if (formData.get("gvw") === null) {
    return {
      code: 400,
      message: "gvw is required",
    };
  }

  if (formData.get("cabin") === null) {
    return {
      code: 400,
      message: "cabin is required",
    };
  }

  if (formData.get("max_power") === null) {
    return {
      code: 400,
      message: "max_power is required",
    };
  }

  if (formData.get("max_torque") === null) {
    return {
      code: 400,
      message: "max_torque is required",
    };
  }

  if (formData.get("name") === null) {
    return {
      code: 400,
      message: "name is required",
    };
  }

  if (formData.get("product_type_id") === null) {
    return {
      code: 400,
      message: "product_type_id is required",
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
        cek: image,
      };
    }
  }

  if (formData.get("image_bg") !== null) {
    const image = formData.get("image_bg") as unknown as Blob;
    if (
      !image.name.includes("jpg") &&
      !image.name.includes("jpeg") &&
      !image.name.includes("webp") &&
      !image.name.includes("png")
    ) {
      return {
        code: 400,
        message: "image is only allowed for jpg/jpeg/png/webp",
        cek: image,
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

  if (formData.get("product_id") === null) {
    return {
      code: 400,
      message: "product_id is required",
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
        cek: image,
      };
    }
  }

  if (formData.get("image_bg") !== null) {
    const image = formData.get("image_bg") as unknown as Blob;
    if (
      !image.name.includes("jpg") &&
      !image.name.includes("jpeg") &&
      !image.name.includes("webp") &&
      !image.name.includes("png")
    ) {
      return {
        code: 400,
        message: "image is only allowed for jpg/jpeg/png/webp",
        cek: image,
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
      message: "id is required",
    };
  }

  return null;
};

const addValidationSpecification = async (
  request: Request,
  specification: ProductSpecification
) => {
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

  if (specification.product_id === undefined) {
    return {
      code: 400,
      message: "product_id is required",
    };
  }

  if (specification.category === undefined) {
    return {
      code: 400,
      message: "category is required",
    };
  }

  if (specification.satuan === undefined) {
    return {
      code: 400,
      message: "satuan is required",
    };
  }

  if (specification.title === undefined) {
    return {
      code: 400,
      message: "title is required",
    };
  }

  if (specification.keterangan === undefined) {
    return {
      code: 400,
      message: "keterangan is required",
    };
  }

  return null;
};

const updateValidationSpecification = async (
  request: Request,
  specification: ProductSpecification
) => {
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

  if (specification.product_id === undefined) {
    return {
      code: 400,
      message: "product_id is required",
    };
  }

  if (specification.product_spesification_id === undefined) {
    return {
      code: 400,
      message: "product_spesification_id is required",
    };
  }

  return null;
};

const updateContent = async (request: Request, content: ProductContent) => {
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
  if (content.product_content_id === undefined) {
    return {
      code: 400,
      message: "product_content_id is required",
    };
  }

  return null;
};

const deleteContent = async (request: Request, id: String) => {
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
      message: "product_content_id is required",
    };
  }

  return null;
};
const addTypeValidation = async (request: Request, type: ProductType) => {
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

  if (type.product_type_name === undefined || type.product_type_name === null) {
    return {
      code: 400,
      message: "product_type_name is required",
    };
  }

  return null;
};

const updateTypeValidation = async (request: Request, type: ProductType) => {
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

  if (type.product_type_id === undefined || type.product_type_id === null) {
    return {
      code: 400,
      message: "product_type_id is required",
    };
  }

  return null;
};

const addContentValidation = async (request: Request, formData: FormData) => {
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

  if (formData.get("product_id") === null) {
    return {
      code: 400,
      message: "product_id is required",
    };
  }

  if (formData.get("text") === null) {
    return {
      code: 400,
      message: "text is required",
    };
  }

  if (formData.get("position") === null) {
    return {
      code: 400,
      message: "position is required",
    };
  }
  if (formData.get("image") === null) {
    return {
      code: 400,
      message: "image is required",
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
        cek: image,
      };
    }
  }

  return null;
};

export default {
  addValidation,
  updateValidation,
  deleteValidation,
  addValidationSpecification,
  updateValidationSpecification,
  addTypeValidation,
  updateTypeValidation,
  addContentValidation,
  updateContent,
  deleteContent,
};
