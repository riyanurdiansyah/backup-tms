import { NextResponse } from "next/server";
import productService from "@/services/product-service";
import { v4 as uuidv4 } from "uuid";
import globalValidation from "@/validation/global-validation";
import productValidation from "@/validation/product-validation";
import s3Service from "@/services/s3-service";
import errorValidation from "@/validation/error-validation";
import { Product } from "@prisma/client";

export async function GET() {
  try {
    const result = await productService.get();
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
    const errorValidation = await productValidation.addValidation(
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

    const imageBg = formData.get("image_bg") as unknown as Blob;
    const pathImageBg = await s3Service.uploadFile(id, "bg", imageBg);
    if (pathImageBg === null)
      return NextResponse.json(
        { code: 400, message: "failed upload image to server" },
        { status: 400 }
      );

    var product: Product = {
      product_id: id,
      product_type_id: formData.get("product_type_id") as string,
      image: pathImage,
      image_bg: pathImageBg,
      name: formData.get("name") as string,
      gvw: formData.get("gvw") as string,
      cabin: formData.get("cabin") as string,
      max_power: formData.get("max_power") as string,
      max_torque: formData.get("max_torque") as string,
    };

    const result = await productService.post(product);

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
    ///cek form data null atau tidak
    var formData = await globalValidation.checkFormData(req);
    if (formData === null)
      return NextResponse.json(
        { code: 400, message: "form-data is required" },
        { status: 400 }
      );

    ///cek field mandatory
    const errorValidation = await productValidation.updateValidation(
      req,
      formData
    );
    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    ///upload image file to s3
    const id = formData.get("product_id") as string;

    if (formData.get("image") !== null) {
      const image = formData.get("image") as unknown as Blob;
      const imagePath = await s3Service.uploadFile(id, "img", image);
      if (imagePath === null)
        return NextResponse.json(
          { code: 400, message: "failed upload image to server" },
          { status: 400 }
        );

      const imageBg = formData.get("image_bg") as unknown as Blob;
      const imagePathBg = await s3Service.uploadFile(id, "bg", imageBg);
      if (imagePathBg === null)
        return NextResponse.json(
          { code: 400, message: "failed upload image to server" },
          { status: 400 }
        );
    }

    if (formData.get("image_bg") !== null) {
      const imageBg = formData.get("image_bg") as unknown as Blob;
      const imagePathBg = await s3Service.uploadFile(id, "bg", imageBg);
      if (imagePathBg === null)
        return NextResponse.json(
          { code: 400, message: "failed upload image to server" },
          { status: 400 }
        );
    }

    const productOld = await productService.getById(id);
    if (productOld === null) {
      return NextResponse.json(
        { code: 404, message: "product_id is not found" },
        { status: 404 }
      );
    }
    var product: Product = {
      product_id: id,
      product_type_id:
        formData.get("product_type_id") !== null
          ? (formData.get("product_type_id") as string)
          : productOld.product_type_id,
      image: productOld.image,
      image_bg: productOld.image_bg,
      name:
        formData.get("name") !== null
          ? (formData.get("name") as string)
          : productOld.name,
      gvw:
        formData.get("gvw") !== null
          ? (formData.get("gvw") as string)
          : productOld.gvw,
      cabin:
        formData.get("cabin") !== null
          ? (formData.get("cabin") as string)
          : productOld.cabin,
      max_power:
        formData.get("max_power") !== null
          ? (formData.get("max_power") as string)
          : productOld.max_power,
      max_torque:
        formData.get("max_torque") !== null
          ? (formData.get("max_torque") as string)
          : productOld.max_torque,
    };

    const result = await productService.put(product);

    return NextResponse.json(
      { code: 200, message: "Data has been updated", data: result },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = errorValidation.errorMessage(error);
    return NextResponse.json(errorMessage, {
      status: errorMessage["code"],
    });
  }
}
