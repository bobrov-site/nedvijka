export const useUserStore = defineStore('userStore', {
    state: () => ({
        auth: {
            isAuth: true,
        },
        activeTab: 1
    }),
    actions: {

    }
})