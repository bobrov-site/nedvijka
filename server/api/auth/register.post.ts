import { UserSchema } from "~/server/models/user.schema";
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const hashedPassword = bcrypt.hashSync(body.password, 10)
    body.password = hashedPassword
    try {
        await UserSchema.find({email: body.email})
        await UserSchema.create({...body});
    }
    catch (e) {
        throw createError({
            statusCode: 400,
            statusMessage: 'User already exists',
        })
    }
})