import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import sliderService from "@/services/slider-service";

import sliderValidation from "@/validation/slider-validation";
import globalValidation from "@/validation/global-validation";
import errorValidation from "@/validation/error-validation";
import { Slider } from "@prisma/client";
import s3Service from "@/services/s3-service";

export async function GET() {
  try {
    const slider = await sliderService.get();
    return NextResponse.json(
      {
        code: 200,
        message: "Data has been listed",
        data: slider,
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

export async function PUT(req: Request) {
  try {
    var pathVideo: string = "";
    ///cek form data null atau tidak
    var formData = await globalValidation.checkFormData(req);
    if (formData === null)
      return NextResponse.json(
        { code: 400, message: "form-data is required" },
        { status: 400 }
      );

    ///cek field mandatory
    const errorValidation = await sliderValidation.updateValidation(
      req,
      formData
    );
    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const sliderId = formData.get("slider_id") as string;
    const sliderOld = await sliderService.getById(sliderId);
    if (sliderOld === null)
      return NextResponse.json(
        { code: 400, message: "slider_id is not found" },
        { status: 400 }
      );

    ///upload image file to s3
    if (formData.get("image") !== null) {
      const image = formData.get("image") as unknown as Blob;
      const pathImage = await s3Service.uploadFile(sliderId, "img", image);
      if (pathImage === null)
        return NextResponse.json(
          { code: 400, message: "failed upload image to server" },
          { status: 400 }
        );
    }

    ///upload video file to s3 jika tidak null
    if (formData.get("video") !== null) {
      const video = formData.get("video") as unknown as Blob;
      pathVideo = (await s3Service.uploadFile(sliderId, "video", video)) ?? "";
    }

    var sliderNew: Slider = {
      slider_id: sliderId,
      nama: (formData.get("nama") as string) ?? sliderOld.nama,
      image: sliderOld.image,
      video:
        sliderOld.video === "" && formData.get("video") !== null
          ? pathVideo
          : sliderOld.video,
    };

    const result = await sliderService.put(sliderNew);
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

export async function POST(req: Request) {
  try {
    const id = uuidv4();
    var pathVideo: string = "";

    ///cek form data null atau tidak
    var formData = await globalValidation.checkFormData(req);
    if (formData === null)
      return NextResponse.json(
        { code: 400, message: "form-data is required" },
        { status: 400 }
      );

    ///cek field mandatory
    const errorValidation = await sliderValidation.addValidation(req, formData);
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

    ///upload video file to s3 jika tidak null
    if (formData.get("video") !== null) {
      const video = formData.get("video") as unknown as Blob;
      pathVideo = (await s3Service.uploadFile(id, "video", video)) ?? "";
    }

    var slider: Slider = {
      slider_id: id,
      nama: formData.get("nama") as string,
      image: pathImage,
      video: pathVideo,
    };

    const result = await sliderService.post(slider);

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
