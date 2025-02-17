import { PrismaClient } from "@prisma/client";
import { log } from "console";

const db = new PrismaClient();

const main = async () => {

    // CREATE
    // const response = await db.user_prisma.create({
    //     data: {
    //         email: "jojo@jojo.com",
    //         name: "Jojo",
    //         lastname: "Jojoland",
    //     },
    // });

    // FIND ALL
    // const response = await db.user_prisma.findMany();

    // FIND ONE
    const response = await db.user_prisma.findFirst({
        where: {
            id: 1
        }
    })
    console.log({ response });
};
main();
