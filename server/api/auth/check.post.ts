import { UserSchema } from "~/server/models/user.schema";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const user = await UserSchema.findOne({email: body.email})
    if (user) {
        throw createError({
            statusCode: 400,
            statusMessage: 'User exist',
        })
    }
    return true
})