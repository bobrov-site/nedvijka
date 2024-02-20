export const useUserStore = defineStore('userStore', {
    state: () => ({
        auth: {
            isAuth: true,
            isAdmin: false,
            isGuest: true,
            isRenter: false,
        },
    }),
    actions: {

    }
})