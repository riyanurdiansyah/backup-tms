import userService from "@/services/user-service";
import errorValidation from "@/validation/error-validation";
import userValidation from "@/validation/user-validation";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  try {
    const result = await userService.get();

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
    const user: User = await req.json();

    const errorValidation = await userValidation.updateValidation(req, user);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const oldUser = await userService.getByIdWithPass(user.user_id);
    if (oldUser === null)
      return NextResponse.json(
        { code: 400, message: "user_id is not found" },
        { status: 400 }
      );

    const newUser: User = {
      user_id: oldUser.user_id,
      email: user.email ?? oldUser.email,
      role_id: user.role_id ?? oldUser.role_id,
      password: oldUser.password,
      username: oldUser.username,
      createdAt: oldUser.createdAt,
      updatedAt: new Date(),
    };

    await userService.put(newUser);

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
