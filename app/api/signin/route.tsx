import AuthService from "@/services/auth-service";
import SigninValidation from "@/validation/signin-validation";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const body: User = await req.json();

    const errorValidation = await SigninValidation.loginValidation(body);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const userWithoutPassword =
      await AuthService.getUserByUsernameWithoutPassword(body.username);
    const user = await AuthService.getUserByUsername(body.username);

    if (user === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "username is not found",
        },
        { status: 404 }
      );
    }

    const checkPassword = await AuthService.decryptPassword(
      body.password,
      user.password
    );

    if (!checkPassword) {
      return NextResponse.json(
        {
          code: 400,
          message: "password is wrong",
        },
        { status: 400 }
      );
    }

    const secretKey = process.env.JWT_SECRET_KEY as string;

    const username = body.username;

    const timezone = "Asia/Jakarta";
    const token = jwt.sign({ username, timezone }, secretKey);

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been created",
        data: userWithoutPassword,
        accessToken: token,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        code: 500,
        message: "Failed to execution request ",
        e,
      },
      { status: 500 }
    );
  }
}
