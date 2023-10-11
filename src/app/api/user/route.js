import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        const resBody = await req.json();
        let user = await prisma.user.create({
            data: resBody,
        });
        return NextResponse.json({
            status: "Success",
            result: user,
        });
    } catch (err) {
        return NextResponse.json({
            status: "fail",
            result: err.toString(),
        });
    }
}
