import { NextResponse } from "next/server";
import { query } from "@/config/db";
import { NextApiRequest } from "next";
import { useRouter } from "next/router";
import { promises as fs } from "fs";
import authService from "@/services/auth-service";
import sliderService from "@/services/slider-service";
import sliderValidation from "@/validation/slider-validation";
import s3Service from "@/services/s3-service";

export async function GET(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  try {
    const slider = await sliderService.getById(id);

    if (slider === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "Slider id is not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        code: 200,
        message: "Data has been listed",
        data: slider,
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

export async function DELETE(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  try {
    const errorValidation = await sliderValidation.deleteValidation(req, id);
    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, { status: errorValidation.code });
    }

    const slider = await sliderService.getById(id);

    if (slider === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "Slider id is not found",
        },
        { status: 404 }
      );
    } else {
      await sliderService.deleteById(id);
      await s3Service.deleteFile(slider.image);
      await s3Service.deleteFile(slider.video);
      return NextResponse.json(
        {
          code: 200,
          message: "Data has been deleted",
        },
        { status: 200 }
      );
    }
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
