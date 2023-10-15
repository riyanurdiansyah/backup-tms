import roleService from "@/services/role-service";
import errorValidation from "@/validation/error-validation";
import roleValidation from "@/validation/role-validation";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  try {
    const result = await roleService.get();

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
    const role: UserRole = await req.json();

    const errorValidation = await roleValidation.addValidation(req, role);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    await roleService.post(role);

    return NextResponse.json(
      {
        code: 201,
        message: "Data has been created",
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
    const role: UserRole = await req.json();

    const errorValidation = await roleValidation.updateValidation(req, role);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const oldRole = await roleService.getById(role.role_id);
    if (oldRole === null)
      return NextResponse.json(
        { code: 400, message: "role_id is not found" },
        { status: 400 }
      );

    const newRole: UserRole = {
      role: role.role ?? oldRole.role,
      role_id: role.role_id,
    };

    await roleService.put(newRole);

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
