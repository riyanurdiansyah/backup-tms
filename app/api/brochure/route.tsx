import { NextResponse } from "next/server";
import CareerService from "@/services/career-service";
import errorValidation from "@/validation/error-validation";
import serviceService from "@/services/service-service";
import { Brochure, Service } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import brochureService from "@/services/brochure-service";
import globalValidation from "@/validation/global-validation";
import brochureValidation from "@/validation/brochure-validation";
import s3Service from "@/services/s3-service";

export async function GET() {
  try {
    const result = await brochureService.get();
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
    const errorValidation = await brochureValidation.addValidation(
      req,
      formData
    );
    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    ///upload image file to s3
    const thumbnail = formData.get("thumbnail") as unknown as Blob;
    const pathThumbnail = await s3Service.uploadFile(id, "img", thumbnail);
    if (pathThumbnail === null)
      return NextResponse.json(
        { code: 400, message: "failed upload thumbnail to server" },
        { status: 400 }
      );

    ///upload video file to s3 jika tidak null
    const brochure = formData.get("brochure") as unknown as Blob;
    const pathBrochure = await s3Service.uploadFile(id, "file", brochure);
    if (pathBrochure === null)
      return NextResponse.json(
        { code: 400, message: "failed upload brochure to server" },
        { status: 400 }
      );

    var broch: Brochure = {
      brochure_id: id,
      brochure: pathBrochure,
      thumbnail: pathThumbnail,
      title: formData.get("title") as string,
    };

    const result = await brochureService.post(broch);

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
    const errorValidation = await brochureValidation.updateValidation(
      req,
      formData
    );
    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }
    const id = formData.get("brochure_id") as string;
    const brochureOld = await brochureService.getById(id);

    if (brochureOld === null) {
      return NextResponse.json(
        { code: 404, message: "brochure_id is not found" },
        { status: 404 }
      );
    }

    ///upload image file to s3
    if (formData.get("thumbnail") !== null) {
      const thumbnail = formData.get("thumbnail") as unknown as Blob;
      const pathThumbnail = await s3Service.uploadFile(id, "img", thumbnail);
      if (pathThumbnail === null)
        return NextResponse.json(
          { code: 400, message: "failed upload thumbnail to server" },
          { status: 400 }
        );
    }

    ///upload video file to s3 jika tidak null
    if (formData.get("brochure") !== null) {
      const brochure = formData.get("brochure") as unknown as Blob;
      const pathBrochure = await s3Service.uploadFile(id, "file", brochure);
      if (pathBrochure === null)
        return NextResponse.json(
          { code: 400, message: "failed upload brochure to server" },
          { status: 400 }
        );
    }

    var broch: Brochure = {
      brochure_id: id,
      brochure: brochureOld.brochure,
      thumbnail: brochureOld.thumbnail,
      title: formData.get("title") as string,
    };

    const result = await brochureService.put(broch);

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
