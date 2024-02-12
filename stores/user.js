export const useUserStore = defineStore('userStore', {
    state: () => ({
        auth: {
            isAuth: false,
        },
        activeTab: 1
    }),
    actions: {

    }
})