import authService from "@/services/auth-service";
import DealerService from "@/services/dealer-service";
import s3Service from "@/services/s3-service";
import errorValidation from "@/validation/error-validation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  try {
    const dealer = await DealerService.getById(id);

    if (dealer === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "dealer_id is not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been listed",
        data: dealer,
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = errorValidation.errorMessage(error);
    return NextResponse.json(errorMessage, {
      status: errorMessage["code"],
    });
  }
}

export async function DELETE(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  try {
    const token = req.headers.get("Authorization");
    if (token === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "Unauthorized: Token is missing",
        },
        { status: 404 }
      );
    }

    const checkToken = await authService.verifyJWT(token.split("Bearer ")[1]);

    if (!checkToken) {
      return NextResponse.json(
        {
          code: 404,
          message: "Unauthorized: Token is invalid",
        },
        { status: 404 }
      );
    }

    const dealer = await DealerService.getById(id);

    if (dealer === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "dealer_id is not found",
        },
        { status: 404 }
      );
    }

    await DealerService.deleteById(id);

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been deleted",
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        code: 500,
        message: "Failed connect to server",
      },
      { status: 500 }
    );
  }
}
