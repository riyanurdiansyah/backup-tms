import AuthService from "@/services/auth-service";
import SigninValidation from "@/validation/signin-validation";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const id = uuidv4();
    const email = body["email"];
    const username = body["username"];
    const password = body["password"];

    const errorValidation = await SigninValidation.registValidation(
      username,
      password,
      email
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, { status: errorValidation.code });
    }

    const checkUser = await AuthService.getUserByUsername(username);

    if (checkUser !== null) {
      return NextResponse.json(
        {
          code: 400,
          message: "username is already registered",
        },
        { status: 400 }
      );
    }

    const hashPassword = await AuthService.encryptPassword(password);

    const user: User = {
      user_id: id,
      email: email,
      username: username,
      password: hashPassword,
    };

    await AuthService.register(user);

    const secretKey = process.env.JWT_SECRET_KEY as string;

    const timezone = "Asia/Jakarta";
    const token = jwt.sign({ username, timezone }, secretKey, {
      expiresIn: "1h",
    });

    return NextResponse.json(
      {
        code: 201,
        message: "Data has been created",
        user: {
          user_id: id,
          email: email,
          username: username,
        },
        token: token,
      },
      { status: 201 }
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
