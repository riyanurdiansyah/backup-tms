import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import CareerService from "@/services/career-service";
import CareerValidation from "@/validation/career-validation";
import AuthService from "@/services/auth-service";
import errorValidation from "@/validation/error-validation";
import { Career } from "@prisma/client";

export async function GET() {
  try {
    const result = await CareerService.get();

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
    const career: Career = await req.json();
    career.career_id = uuidv4();

    const errorValidation = await CareerValidation.addValidation(req, career);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const result = await CareerService.post(career);

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
    const careerNew: Career = await req.json();

    const errorValidation = await CareerValidation.updateValidation(
      req,
      careerNew
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const careerOld = await CareerService.getById(careerNew.career_id);

    if (careerOld === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "career_id is not found " + careerNew.career_id,
        },
        { status: 404 }
      );
    }

    const career: Career = {
      career_id: careerNew.career_id,
      description: careerNew.description ?? careerOld.description,
      expired: careerNew.expired ?? careerOld.expired,
      link: careerNew.link ?? careerOld.link,
      location: careerNew.location ?? careerOld.location,
      published: careerNew.published ?? careerOld.published,
      status: careerNew.status ?? careerOld.status,
      subtitle: careerNew.subtitle ?? careerOld.subtitle,
      title: careerNew.title ?? careerOld.title,
      kualifikasi: careerNew.kualifikasi ?? careerOld.kualifikasi,
      benefit: careerNew.benefit ?? careerOld.benefit,
      persyaratan: careerNew.persyaratan ?? careerOld.persyaratan,
    };

    const result = await CareerService.put(career);

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
