import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Create Tag
export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        let result = await prisma.tag.create({
            data: reqBody,
        });
        return NextResponse.json({
            status: "Success",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}

// Read Tag
export async function GET(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        let result = await prisma.tag.findMany();
        return NextResponse.json({
            status: "Success",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}

// Update Tag
export async function PUT(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        let id = searchParams.get("id");
        let result = await prisma.tag.update({
            where: {
                id: id,
            },
            data: {
                title: "History",
                metaTitle: "Lorem ipsum dolor sit amet.",
                slug: "Lorem ipsum dolor sit amet.",
                content: "Lorem ipsum dolor sit amet.",
            },
        });
        return NextResponse.json({
            status: "Success",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}
// Delete Tag
export async function DELETE(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        let id = searchParams.get("id");
        let result = await prisma.tag.delete({
            where: {
                id: id,
            },
        });
        return NextResponse.json({
            status: "Success",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Fail",
            data: error.toString(),
        });
    }
}
