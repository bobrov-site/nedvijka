export const useUserStore = defineStore('userStore', {
    state: () => ({
        auth: {
            isAuth: false,
            isAdmin: false,
            isGuest: false,
            isRenter: false,
        },
        user: {
            id: null,
            email: null,
        }
    }),
    actions: {
        authUser(user) {
            this.auth.isAuth = true
            this.user.id = user._id
            this.user.email = user.email
        }
    }
})