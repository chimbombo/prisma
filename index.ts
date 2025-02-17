import { PrismaClient } from "@prisma/client";
import { log } from "console";

const db = new PrismaClient();

const main = async () => {
    const response = await db.user_prisma.create({
        data: {
            email: "jojo@jojo.com",
            name: "Jojo",
            lastname: "Jojoland",
        },
    });
    console.log({ response });
};
main()