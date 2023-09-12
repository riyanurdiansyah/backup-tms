import { NextResponse } from "next/server";
import CareerService from "@/services/career-service";
import errorValidation from "@/validation/error-validation";
import serviceService from "@/services/service-service";
import { Service } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import serviceValidation from "@/validation/service-validation";

export async function GET() {
  try {
    const result = await serviceService.get();
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
    const service: Service = await req.json();
    service.service_id = uuidv4();

    const errorValidation = await serviceValidation.addValidation(req, service);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const result = await serviceService.post(service);

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
    const service: Service = await req.json();

    const errorValidation = await serviceValidation.updateValidation(
      req,
      service.service_id
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const serviceOld = await serviceService.getById(service.service_id);

    if (serviceOld === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "service_id is not found",
        },
        { status: 404 }
      );
    }

    const serviceNew: Service = {
      service_id: service.service_id,
      title: service.title ?? serviceOld.title,
      description: service.description ?? serviceOld.description,
    };

    const result = await serviceService.put(serviceNew);

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
