import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST() {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        let result = await prisma.post.create({
            data: {
                authorId: 1,
                parentId: 1,
                title: "Lorem ipsum",
                metaTitle: "Lorem5",
                slug: "lorem Ipsum",
                summary: "Lorem ipsum dolor sit amet, consectetur",
                published: 0,
                content:
                    "Adipisci omnis quibusdam dolorem error corrupti doloribus!",
                post_comment: {
                    title: "Dolor sit amet",
                    content: "Lorem ipsum dolor sit amet, consectetur",
                },
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
