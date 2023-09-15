import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import DealerService from "@/services/dealer-service";
import DealerValidation from "@/validation/dealer-validation";
import authService from "@/services/auth-service";
import errorValidation from "@/validation/error-validation";
import { Dealer } from "@prisma/client";

export async function GET() {
  try {
    const result = await DealerService.get();

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

export async function PUT(req: Request) {
  try {
    const dealerNew: Dealer = await req.json();

    const errorValidation = await DealerValidation.updateValidation(
      req,
      dealerNew
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, { status: errorValidation.code });
    }

    const dealerOld = await DealerService.getById(dealerNew.dealer_id);

    if (dealerOld === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "dealer_id is not found",
        },
        { status: 404 }
      );
    }

    const dealer: Dealer = {
      dealer_id: dealerOld.dealer_id,
      name: dealerNew.name ?? dealerOld.name,
      phone: dealerNew.phone ?? dealerOld.phone,
      subtitle: dealerNew.subtitle ?? dealerOld.subtitle,
      latitude: dealerNew.latitude ?? dealerOld.latitude,
      longitude: dealerNew.longitude ?? dealerOld.longitude,
      location: dealerNew.location ?? dealerOld.location,
    };

    await DealerService.put(dealer);

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been updated",
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
    const dealer: Dealer = await req.json();
    dealer.dealer_id = uuidv4();

    const errorValidation = await DealerValidation.addValidation(req, dealer);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, { status: errorValidation.code });
    }

    await DealerService.post(dealer);

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
