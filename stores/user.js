export const useUserStore = defineStore('userStore', {
    state: () => ({
        auth: {
            
            isAuth: false,
        },
        user: {
            id: null,
            email: null,
            role: null,
        }
    }),
    actions: {
        authUser(user) {
            this.auth.isAuth = true
            this.user.role = user.role
            this.user.id = user._id
            this.user.email = user.email
        },
        reset() {
            this.auth.isAuth = false;
            this.user.role = null;
            this.user.email = null;
            this.user.id = null;   
        }
    }
})