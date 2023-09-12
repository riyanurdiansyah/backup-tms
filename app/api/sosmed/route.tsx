import { NextResponse } from "next/server";
import errorValidation from "@/validation/error-validation";
import sosmedService from "@/services/sosmed-service";
import { Sosmed } from "@prisma/client";
import sosmedValidation from "@/validation/sosmed-validation";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  try {
    const result = await sosmedService.get();

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been listed",
        data: result[0],
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
    const sosmed: Sosmed = await req.json();
    sosmed.sosmed_id = uuidv4();

    const errorValidation = await sosmedValidation.addValidation(req, sosmed);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const result = await sosmedService.post(sosmed);

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
    const sosmedNew: Sosmed = await req.json();

    const errorValidation = await sosmedValidation.updateValidation(
      req,
      sosmedNew
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const sosmedOld = await sosmedService.getById(sosmedNew.sosmed_id);

    if (sosmedOld === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "sosmed_id is not found",
        },
        { status: 404 }
      );
    }

    const sosmed: Sosmed = {
      sosmed_id: sosmedNew.sosmed_id,
      facebook: sosmedNew.facebook ?? sosmedOld.facebook,
      whatsapp: sosmedNew.whatsapp ?? sosmedOld.whatsapp,
      email: sosmedNew.email ?? sosmedOld.email,
      twitter: sosmedNew.twitter ?? sosmedOld.twitter,
      instagram: sosmedNew.instagram ?? sosmedOld.instagram,
    };

    const result = await sosmedService.put(sosmed);

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
