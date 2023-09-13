import { NextResponse } from "next/server";
import { query } from "@/config/db";
import { promises as fs } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import authService from "@/services/auth-service";
import bookService from "@/services/book-service";
import { Book } from "@prisma/client";
import errorValidation from "@/validation/error-validation";
import globalValidation from "@/validation/global-validation";
import bookValidation from "@/validation/book-validation";
import sliderService from "@/services/slider-service";
import s3Service from "@/services/s3-service";

export async function GET() {
  try {
    const slider = await bookService.get();
    return NextResponse.json(
      {
        code: 200,
        message: "Data has been listed",
        data: slider,
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
    const id = uuidv4();
    var formData = await globalValidation.checkFormData(req);
    if (formData === null)
      return NextResponse.json(
        { code: 400, message: "form-data is required" },
        { status: 400 }
      );

    ///cek field mandatory
    const errorValidation = await bookValidation.addValidation(req, formData);
    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const file = formData.get("file") as unknown as Blob;
    const pathFile = await s3Service.uploadFile(id, "file", file);
    if (pathFile === null)
      return NextResponse.json(
        { code: 400, message: "failed upload file to server" },
        { status: 400 }
      );

    var book: Book = {
      book_id: id,
      nama: formData.get("nama") as string,
      file: pathFile,
    };

    const result = await bookService.post(book);

    return NextResponse.json(
      { code: 201, message: "Data has been created", data: result },
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
    ///cek form data null atau tidak
    var formData = await globalValidation.checkFormData(req);
    if (formData === null)
      return NextResponse.json(
        { code: 400, message: "form-data is required" },
        { status: 400 }
      );

    ///cek field mandatory
    const errorValidation = await bookValidation.updateValidation(
      req,
      formData
    );
    if (errorValidation !== null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const bookId = formData.get("book_id") as string;
    const bookOld = await bookService.getById(bookId);
    if (bookOld === null)
      return NextResponse.json(
        { code: 400, message: "book_id is not found" },
        { status: 400 }
      );

    if (formData.get("image") !== null) {
      const file = formData.get("file") as unknown as Blob;
      const pathFile = await s3Service.uploadFile(bookId, "file", file);
      if (pathFile === null)
        return NextResponse.json(
          { code: 400, message: "failed upload file to server" },
          { status: 400 }
        );
    }

    var bookNew: Book = {
      book_id: bookId,
      file: bookOld.file,
      nama: (formData.get("nama") as string) ?? bookOld.nama,
    };

    const result = await bookService.put(bookNew);
    return NextResponse.json(
      { code: 200, message: "Data has been updated", data: result },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = errorValidation.errorMessage(error);
    return NextResponse.json(errorMessage, {
      status: errorMessage["code"],
    });
  }
}
