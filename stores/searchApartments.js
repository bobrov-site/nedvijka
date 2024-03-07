export const useSearchApartmentsStore = defineStore('searchApartmentsStore', {
    state: () => ({
        apartments: [],
        dashboard: null
    }),
    actions: {
        setSearch(apartments, dashboard) {
            this.apartments = apartments;
            this.dashboard = dashboard
        }
    }
})