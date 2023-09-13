import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import PartnerService from "@/services/partner-service";
import authService from "@/services/auth-service";

export async function GET(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  try {
    const partner = await PartnerService.getById(id);

    if (partner === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "partner_id is not found",
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
  } catch (e) {
    return NextResponse.json(
      {
        code: 500,
        message: "Failed connect to server",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  try {
    const token = req.headers.get("Authorization");
    if (token === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "Unauthorized: Token is missing",
        },
        { status: 404 }
      );
    }

    const checkToken = await authService.verifyJWT(token.split("Bearer ")[1]);

    if (!checkToken) {
      return NextResponse.json(
        {
          code: 404,
          message: "Unauthorized: Token is invalid",
        },
        { status: 404 }
      );
    }
    const partner = await PartnerService.getById(id);

    if (partner === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "partner_id is not found",
        },
        { status: 404 }
      );
    }

    if (partner === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "partner_id is not found",
        },
        { status: 404 }
      );
    } else {
      await PartnerService.deleteById(id);

      fs.unlink(process.cwd() + "/public" + partner.image);
      return NextResponse.json(
        {
          code: 200,
          message: "Data has been deleted",
        },
        { status: 200 }
      );
    }
  } catch (e) {
    return NextResponse.json(
      {
        code: 500,
        message: "Failed connect to server",
      },
      { status: 500 }
    );
  }
}
