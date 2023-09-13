import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import DealerService from "@/services/dealer-service";
import DealerValidation from "@/validation/dealer-validation";
import authService from "@/services/auth-service";
import errorValidation from "@/validation/error-validation";
import { DealerCabang } from "@prisma/client";

export async function GET() {
  try {
    const result = await DealerService.getCabang();

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
    const dealer: DealerCabang = await req.json();
    dealer.cabang_id = uuidv4();

    const errorValidation = await DealerValidation.addValidationCabang(
      req,
      dealer
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, { status: errorValidation.code });
    }

    await DealerService.postCabang(dealer);

    return NextResponse.json(
      {
        code: 201,
        message: "Data has been created",
        // data: dealer.dealer_id,
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
