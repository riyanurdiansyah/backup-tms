import brochureService from "@/services/brochure-service";
import brochureValidation from "@/validation/brochure-validation";
import errorValidation from "@/validation/error-validation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  try {
    const partner = await brochureService.getById(id);

    if (partner === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "Product id is not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been listed",
        data: partner,
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


export async function DELETE(req: Request) {
    const id = req.url.slice(req.url.lastIndexOf("/") + 1);
    try {
      const errorValidation = await brochureValidation.deleteValidation(req, id);
      if (errorValidation !== null) {
        return NextResponse.json(errorValidation, { status: errorValidation.code });
      }
  
      const service = await brochureService.getById(id);
  
      if (service === null) {
        return NextResponse.json(
          {
            code: 404,
            message: "Brochure id is not found",
          },
          { status: 404 }
        );
      } else {
        await brochureService.deleteById(id);
  
        return NextResponse.json(
          {
            code: 200,
            message: "Data has been deleted",
          },
          { status: 200 }
        );
      }
    } catch (error) {
      const errorMessage = errorValidation.errorMessage(error);
      return NextResponse.json(errorMessage, {
        status: errorMessage["code"],
      });
    }
  }
  