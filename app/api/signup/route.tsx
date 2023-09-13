import AuthService from "@/services/auth-service";
import SigninValidation from "@/validation/signin-validation";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import errorValidation from "@/validation/error-validation";

export async function POST(req: Request) {
  try {
    const userBody: User = await req.json();
    const id = uuidv4();

    const errorValidation = await SigninValidation.registValidation(
      userBody
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, { status: errorValidation.code });
    }

    const checkUser = await AuthService.getUserByUsername(userBody.username);

    if (checkUser !== null) {
      return NextResponse.json(
        {
          code: 400,
          message: "username is already registered",
        },
        { status: 400 }
      );
    }

    const hashPassword = await AuthService.encryptPassword(userBody.password);
    const user: User = {
      user_id: id,
      email: userBody.email,
      username: userBody.username,
      password: hashPassword,
      role_id: userBody.role_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await AuthService.register(user);

    const secretKey = process.env.JWT_SECRET_KEY as string;

    const username = userBody.username

    const timezone = "Asia/Jakarta";
    const token = jwt.sign({ username, timezone }, secretKey, {
      expiresIn: "24h",
    });

    return NextResponse.json(
      {
        code: 201,
        message: "Data has been created",
        data: user,
        token: token,
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
