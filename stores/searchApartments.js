export const useSearchApartmentsStore = defineStore('searchApartmentsStore', {
    state: () => ({
        apartments: [],
        markers: [],
        cityPoint: {
            x: 0,
            y: 0,
        }
    }),
    actions: {
        async buildGeoPoint(query) {
            try {
                const response = await $fetch('/api/map/geocode', {
                    params: {
                        geocode: query
                    }
                })
                return response.geocode
            }
            catch (e) {
                throw new createError({
                    statusCode: 400,
                    statusMessage: e.message
                })
            }
        },
        async getGeoDataCity(city) {
            try {
                const response = await this.buildGeoPoint(city)
                this.cityPoint = response;
            }
            catch(e) {
                throw new createError({
                    statusCode: 400,
                    statusMessage: e.message
                })
            }
        },
        async getGeoDataFromApartments() {
            const marks = this.apartments.map(async(apartment) => {
                if (apartment.geo_data.x === 0 && apartment.geo_data.y === 0) {
                    apartment.geo_data = await this.buildGeoPoint(`${apartment.city} ${apartment.address}`)
                    let x = apartment.geo_data.x
                    apartment.geo_data.x = apartment.geo_data.y
                    apartment.geo_data.y = x
                }
                const geo = {
                    x: apartment.geo_data.x,
                    y: apartment.geo_data.y,
                    title: apartment.price,
                }
                return geo
            });
            this.markers = await Promise.all(marks)
        },
        async loadSearchApartments(start, end) {
            try {
                const dashboard = await $fetch('/bnovo/dashboard', {
                    method: 'GET',
                    params: {
                        start: start,
                        end: end,
                    }
                })
                const response = await loadApartmentsBnovo();
                if (dashboard.dashboard.bookings.length !== 0) {
                    const filtred = response.filter((apartment) => {
                        dashboard.dashboard.bookings.forEach((booking) => {
                            if (booking.initial_room_type_name === apartment.name) {
                                apartment = false;
                                return;
                            }
                            apartment = true
                        })
                        return apartment
                    })
                    console.log(filtred);
                    this.apartments = filtred
                }
                else {
                    this.apartments = response;
                }
            }
            catch(e) {
                throw new createError({
                    statusCode: 500,
                    statusMessage: e.message
                })
            }
        }
    }
})