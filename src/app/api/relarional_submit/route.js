import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { Result } from "postcss";

export async function POST(req) {
    try {
        const prisma = new PrismaClient();
        // const resBody = await req.json();
        let result = await prisma.user.create({
            data: {
                firstName: "Zahid",
                middleName: "Akando",
                lastName: "Hasan",
                mobile: "01712445566",
                email: "hasan@gmail.com",
                passwordHash: "1234",
                intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ex.",
                profile:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ex.",
            },
        });
        return NextResponse.json({
            status: "Success",
            data: result,
        });
    } catch (err) {
        return NextResponse.json({
            status: "Fail",
            data: err.toString(),
        });
    }
}
