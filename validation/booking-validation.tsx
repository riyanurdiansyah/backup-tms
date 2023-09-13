import authService from "@/services/auth-service";
import { Booking, Sosmed } from "@prisma/client";

const addValidation = async (booking: Booking) => {

  if (booking.date === undefined) {
    return {
      code: 400,
      message: "date is required",
    };
  }

  if (booking.email === undefined) {
    return {
      code: 400,
      message: "email is required",
    };
  }

  if (booking.jenis_service === undefined) {
    return {
      code: 400,
      message: "jenis_service is required",
    };
  }

  if (booking.location === undefined) {
    return {
      code: 400,
      message: "location is required",
    };
  }

  if (booking.model === undefined) {
    return {
      code: 400,
      message: "model is required",
    };
  }
  if (booking.no_hp === undefined) {
    return {
      code: 400,
      message: "no_hp is required",
    };
  }

  if (booking.no_kendaraan === undefined) {
    return {
      code: 400,
      message: "no_kendaraan is required",
    };
  }

  if (booking.outlet_id === undefined) {
    return {
      code: 400,
      message: "outlet_id is required",
    };
  }

  if (booking.tahun === undefined) {
    return {
      code: 400,
      message: "tahun is required",
    };
  }

  if (booking.time === undefined) {
    return {
      code: 400,
      message: "time is required",
    };
  }

  return null;
};

const updateValidation = async (request: Request, booking: Booking) => {
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

  if (booking.booking_id === undefined) {
    return {
      code: 400,
      message: "booking_id is required",
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
