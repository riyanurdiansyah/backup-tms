import { NextResponse } from "next/server";
import errorValidation from "@/validation/error-validation";
import userService from "@/services/user-service";
import userValidation from "@/validation/user-validation";

export async function GET(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  try {
    const career = await userService.getById(id);

    if (career === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "user_id is not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been listed",
        data: career,
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
    const errorValidation = await userValidation.deleteValidation(req, id);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const career = await userService.getById(id);

    if (career === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "user_id is not found",
        },
        { status: 404 }
      );
    }

    const result = await userService.deleteById(id);

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been deleted",
        data: result,
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
