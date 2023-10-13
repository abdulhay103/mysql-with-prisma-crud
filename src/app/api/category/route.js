import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Create Data
export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        let result = await prisma.category.create({
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

//Read Data
export async function GET() {
    try {
        const prisma = new PrismaClient();
        let result = await prisma.category.findMany({
            where: {
                parentId: 1,
            },
        });
        return NextResponse.json({
            status: "Success",
            data: result,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Success",
            data: error.toString(),
        });
    }
}

//Update Data
export async function PUT() {
    try {
        const prisma = new PrismaClient();
        let result = await prisma.category.update({
            where: {
                id: 5,
            },
            data: {
                parentId: "1",
                title: "Nature",
                metaTitle: "Bangladesh and its Nature",
                slug: " Lorem ipsum dolor sit amet consectetur adipisicing elit Mollitia, ex.",
                content:
                    " Lorem ipsum dolor sit amet consectetur adipisicing Mollitia, ex.",
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

//Delete Data
export async function DELETE() {
    try {
        const prisma = new PrismaClient();
        let result = await prisma.category.delete({
            where: {
                id: 8,
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
