import { defineMongooseModel } from '#nuxt/mongoose';

export const UserSchema = defineMongooseModel({
    name: 'User',
    schema: {
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
    }
    
})
