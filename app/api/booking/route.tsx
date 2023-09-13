import { NextResponse } from "next/server";
import errorValidation from "@/validation/error-validation";
import { Booking, Sosmed } from "@prisma/client";
import sosmedValidation from "@/validation/sosmed-validation";
import { v4 as uuidv4 } from "uuid";
import bookingValidation from "@/validation/booking-validation";
import bookingService from "@/services/booking-service";

export async function GET() {
  try {
    const result = await bookingService.get();

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
    const booking: Booking = await req.json();
    booking.booking_id = uuidv4();

    const errorValidation = await bookingValidation.addValidation(booking);

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const result = await bookingService.post(booking);

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
    const bookingNew: Booking = await req.json();

    const errorValidation = await bookingValidation.updateValidation(
      req,
      bookingNew
    );

    if (errorValidation != null) {
      return NextResponse.json(errorValidation, {
        status: errorValidation.code,
      });
    }

    const bookingOld = await bookingService.getById(bookingNew.booking_id);

    if (bookingOld === null) {
      return NextResponse.json(
        {
          code: 404,
          message: "booking_id is not found",
        },
        { status: 404 }
      );
    }

    const booking: Booking = {
      booking_id: bookingNew.booking_id,
      no_hp: bookingNew.no_hp ?? bookingOld.no_hp,
      email: bookingNew.email ?? bookingOld.email,
      date: bookingNew.date ?? bookingOld.date,
      time: bookingNew.time ?? bookingOld.time,
      location: bookingNew.location ?? bookingOld.location,
      outlet_id: bookingNew.outlet_id ?? bookingOld.outlet_id,
      no_kendaraan: bookingNew.no_kendaraan ?? bookingOld.no_kendaraan,
      model: bookingNew.model ?? bookingOld.model,
      tahun: bookingNew.tahun ?? bookingOld.tahun,
      jenis_service: bookingNew.jenis_service ?? bookingOld.jenis_service,
    };

    const result = await bookingService.put(booking);

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
