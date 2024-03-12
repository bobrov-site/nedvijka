import { UserSchema } from "~/server/models/user.schema";

export default defineEventHandler(async () => {
    try {
        const users = await UserSchema.find({})
        return users;
    }
    catch(e) {
        throw createError({
            statusCode: 500,
            statusMessage: e.message
        })
    }
})