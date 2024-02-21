export const useUserStore = defineStore('userStore', {
    state: () => ({
        auth: {
            isAuth: true,
            isAdmin: false,
            isGuest: false,
            isRenter: true,
        },
    }),
    actions: {

    }
})