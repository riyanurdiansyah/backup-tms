import { NextResponse } from "next/server";
import productService from "@/services/product-service";
import { v4 as uuidv4 } from "uuid";
import globalValidation from "@/validation/global-validation";
import productValidation from "@/validation/product-validation";
import s3Service from "@/services/s3-service";
import errorValidation from "@/validation/error-validation";
import { Product, ProductContent, ProductSpecification } from "@prisma/client";

export async function GET() {
  try {
    const result = await productService.getContent();
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
    const id = uuidv4();

    ///cek form data null atau tidak
    var formData = await globalValidation.checkFormData(req);
    if (formData === null)
      return NextResponse.json(
        { code: 400, message: "form-data is required" },
        { status: 400 }
      );

    ///cek field mandatory
    const errorValidation = await productValidation.addContentValidation(
      req,
      formData
    );
    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    ///upload image file to s3
    const image = formData.get("image") as unknown as Blob;
    const pathImage = await s3Service.uploadFile(id, "img", image);
    if (pathImage === null)
      return NextResponse.json(
        { code: 400, message: "failed upload image to server" },
        { status: 400 }
      );

    var content: ProductContent = {
      product_content_id: id,
      product_id: formData.get("product_id") as string,
      image: pathImage,
      text: formData.get("text") as string,
      position: formData.get("position") as string,
    };

    const result = await productService.postContent(content);

    return NextResponse.json(
      { code: 201, message: "Data has been created", data: result },
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
    var formData = await globalValidation.checkFormData(req);
    if (formData === null)
      return NextResponse.json(
        { code: 400, message: "form-data is required" },
        { status: 400 }
      );

    const errorValidation = await productValidation.updateContent(
      req,
      formData
    );

    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const contentId = formData.get("product_content_id") as string;
    const contentOld = await productService.getByIdContent(contentId);

    if (contentOld === null)
      return NextResponse.json(
        { code: 400, message: "product_content_id is not found" },
        { status: 400 }
      );

    if (formData.get("image") !== null) {
      const image = formData.get("image") as unknown as Blob;
      const pathImage = await s3Service.uploadFile(contentId, "img", image);
      if (pathImage === null)
        return NextResponse.json(
          { code: 400, message: "failed upload image to server" },
          { status: 400 }
        );
    }

    var contentNew: ProductContent = {
      product_content_id: contentId,
      image: contentOld.image,
      position: (formData.get("position") as string) ?? contentOld.position,
      product_id: contentOld.product_id,
      text: (formData.get("text") as string) ?? contentOld.text,
    };
    const result = await productService.putContent(contentNew);

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
