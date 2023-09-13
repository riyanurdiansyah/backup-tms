import productService from "@/services/product-service";
import s3Service from "@/services/s3-service";
import errorValidation from "@/validation/error-validation";
import productValidation from "@/validation/product-validation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  try {
    const type = await productService.getByIdType(id);

    if (type === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "Product Type id is not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been listed",
        data: type,
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
    const errorValidation = await productValidation.deleteValidation(req, id);
    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const product = await productService.getByIdType(id);

    if (product === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "Product id is not found",
        },
        { status: 404 }
      );
    } else {
      await productService.deleteByIdType(id);

      return NextResponse.json(
        {
          code: 200,
          message: "Data has been deleted",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    const errorMessage = errorValidation.errorMessage(error);
    return NextResponse.json(errorMessage, {
      status: errorMessage["code"],
    });
  }
}
