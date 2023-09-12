import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import CareerService from "@/services/career-service";
import CareerValidation from "@/validation/career-validation";
import AuthService from "@/services/auth-service";
import errorValidation from "@/validation/error-validation";
import { CareerRank, CareerRankBase } from "@prisma/client";

export async function GET() {
  try {
    const result = await CareerService.getRank();
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
    const careerRank: CareerRankBase = await req.json();
    careerRank.career_rank_id = uuidv4();

    const errorValidation = await CareerValidation.addRankValidation(
      req,
      careerRank
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const result = await CareerService.postRank(careerRank);

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
