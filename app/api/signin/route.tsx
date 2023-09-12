import AuthService from "@/services/auth-service";
import SigninValidation from "@/validation/signin-validation";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const username = body["username"];
    const password = body["password"];

    const errorValidation = await SigninValidation.loginValidation(
      username,
      password
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const user = await AuthService.getUserByUsername(username);

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
      password,
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

    const timezone = "Asia/Jakarta";
    const token = jwt.sign({ username, timezone }, secretKey, {
      expiresIn: "24h",
    });

    return NextResponse.json(
      {
        code: 200,
        message: "Data has been created",
        data: user,
        accessToken: token,
      },
      { status: 200 }
    );
  } catch (e) {
    console.log(typeof e);
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
