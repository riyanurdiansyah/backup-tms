import authService from "@/services/auth-service";
import bankService from "@/services/bank-service";
import DealerService from "@/services/dealer-service";
import bankValidation from "@/validation/bank-validation";
import errorValidation from "@/validation/error-validation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  try {
    const dealer = await bankService.getById(id);

    if (dealer === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "Bank id is not found",
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

   
    const errorValidation = await bankValidation.deleteValidation(
      req,
      id
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, { status: errorValidation.code });
    }

    await bankService.deleteById(id);

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been deleted",
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
