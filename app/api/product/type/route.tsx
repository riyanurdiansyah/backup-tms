import { NextResponse } from "next/server";
import productService from "@/services/product-service";
import { v4 as uuidv4 } from "uuid";
import globalValidation from "@/validation/global-validation";
import productValidation from "@/validation/product-validation";
import s3Service from "@/services/s3-service";
import errorValidation from "@/validation/error-validation";
import { Product, ProductSpecification, ProductType } from "@prisma/client";

export async function GET() {
  try {
    const result = await productService.getType();
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
    const productType: ProductType = await req.json();
    productType.product_type_id = uuidv4();

    const errorValidation = await productValidation.addTypeValidation(
      req,
      productType
    );

    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const result = await productService.postType(productType);

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
    const productType: ProductType = await req.json();

    const errorValidation = await productValidation.updateTypeValidation(
      req,
      productType
    );

    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }
    const typeOld = await productService.getByIdType(
      productType.product_type_id
    );
    if (typeOld === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "Product Type id is not found",
        },
        { status: 404 }
      );
    }
    const newType: ProductType = {
      product_type_id: typeOld.product_type_id,
      product_type_name:
        productType.product_type_name ?? typeOld.product_type_name,
    };

    const result = await productService.putType(newType);

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
