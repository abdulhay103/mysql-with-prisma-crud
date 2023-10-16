import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        let result = await prisma.post.create({
            data: {
                authorId: reqBody["authorId"],
                parentId: reqBody["parentId"],
                title: reqBody["title"],
                metaTitle: reqBody["metaTitle"],
                slug: reqBody["slug"],
                summary: reqBody["summary"],
                published: reqBody["published"],
                content: reqBody["post_content"],
                post_comment: {
                    create: {
                        title: reqBody["comm_title"],
                        content: reqBody["comm_content"],
                        parentId: reqBody["parentId"],
                        published: reqBody["published"],
                    },
                },
                post_category: {
                    create: {
                        categoryId: reqBody["categoryId"],
                    },
                },
                post_meta: {
                    create: {
                        key: reqBody["key"],
                    },
                },
                post_tag: {
                    create: {
                        tagId: reqBody["tagId"],
                    },
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
