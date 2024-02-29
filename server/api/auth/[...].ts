import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt'

export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    pages: {
        error: '/auth/error'
    },
    providers: [CredentialsProvider.default({
        name: 'credentials',
        credentials: {},
        async authorize(credentials: {email: string, password: string}){
            const user = await UserSchema.findOne({email: credentials.email})
            if (!user) {
                throw createError({
                    statusCode: 401,
                    statusMessage: 'User is not found',
                })
            }
            const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
            console.log(isPasswordValid, 'isPasswordValid')
            if (!isPasswordValid) {
                throw createError({
                    statusCode: 401,
                    statusMessage: 'errorPasswordWrong',
                })
            }
            return {
                ...user.toObject(),
                password: ''
            }
        }
    })],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.user = user
            }
            return token
        },
        async session({ session, token }) {
            session.user = token.user
            return session
        },
    }
});