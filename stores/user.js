export const useUserStore = defineStore('userStore', {
    state: () => ({
        auth: {
            isAuth: true,
            isAdmin: true,
        },
        activeTab: 1
    }),
    actions: {

    }
})