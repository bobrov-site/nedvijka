import { defineMongooseModel } from '#nuxt/mongoose';

export const User = defineMongooseModel('User', {
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    }
})
