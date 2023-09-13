import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import DealerService from "@/services/dealer-service";
import DealerValidation from "@/validation/dealer-validation";
import authService from "@/services/auth-service";
import errorValidation from "@/validation/error-validation";
import { Bank, Dealer } from "@prisma/client";
import bankService from "@/services/bank-service";
import bankValidation from "@/validation/bank-validation";

export async function GET() {
  try {
    const result = await bankService.get();

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
    const bankNew: Bank = await req.json();

    const errorValidation = await bankValidation.updateValidation(
      req,
      bankNew
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, { status: errorValidation.code });
    }

    const bankOld = await bankService.getById(bankNew.bank_id);

    if (bankOld === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "dealer_id is not found",
        },
        { status: 404 }
      );
    }

    const bodyBank: Bank = {
      bank_id: bankOld.bank_id,
      nama: bankNew.nama ?? bankOld.nama,
      bunga: bankNew.bunga ?? bankOld.bunga,
      bunga12: bankNew.bunga12 ?? bankOld.bunga12,
      bunga24: bankNew.bunga24 ?? bankOld.bunga24,
      bunga36: bankNew.bunga36 ?? bankOld.bunga36,
      bunga48: bankNew.bunga48 ?? bankOld.bunga48,
      bunga60: bankNew.bunga60 ?? bankOld.bunga60,
      createdAt: bankOld.createdAt,
      updatedAt: new Date(),
    };

    await bankService.put(bodyBank);

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
    const bank: Bank = await req.json();
    bank.bank_id = uuidv4();

    const errorValidation = await bankValidation.addValidation(req, bank);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, { status: errorValidation.code });
    }

    await bankService.post(bank);

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
