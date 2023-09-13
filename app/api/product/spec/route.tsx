import { NextResponse } from "next/server";
import productService from "@/services/product-service";
import { v4 as uuidv4 } from "uuid";
import globalValidation from "@/validation/global-validation";
import productValidation from "@/validation/product-validation";
import s3Service from "@/services/s3-service";
import errorValidation from "@/validation/error-validation";
import { Product, ProductSpecification } from "@prisma/client";

export async function GET() {
  try {
    const result = await productService.getSpecification();
    return NextResponse.json(
      {
        code: 200,
        message: "Data has been listed",
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

export async function POST(req: Request) {
  try {
    const specification: ProductSpecification = await req.json();
    specification.product_spesification_id = uuidv4();

    const errorValidation = await productValidation.addValidationSpecification(
      req,
      specification
    );

    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const result = await productService.postSpecification(specification);

    return NextResponse.json(
      {
        code: 201,
        message: "Data has been created",
        data: result,
      },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = errorValidation.errorMessage(error);
    return NextResponse.json(errorMessage, {
      status: errorMessage["code"],
    });
  }
}

export async function PUT(req: Request) {
  try {
    const specification: ProductSpecification = await req.json();

    const errorValidation =
      await productValidation.updateValidationSpecification(req, specification);

    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }
    const result = await productService.putSpecification(specification);

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been updated",
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
