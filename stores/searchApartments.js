export const useSearchApartmentsStore = defineStore('searchApartmentsStore', {
    state: () => ({
        apartments: [],
        markers: [],
        cityPoint: {
            x: 0,
            y: 0,
        },
        city: '',
        process: 'loading',
        children: 0,
        adult: 0,
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
                this.city = city
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
            const filterApartmetments = (apartments, bookings) => {
                const maxGuests = this.children + this.adult
                this.apartments = []
                if (!apartments.some((apartment) => apartment.city === this.city)) {
                    return
                }
                const filtredBookings = bookings.filter((booking) => {
                    const arrivalDate = booking.real_arrival_format.split(' ')[0]
                    const departureDate = booking.real_departure_format.split(' ')[0]
                    if (departureDate === start || end === arrivalDate) {
                        return false
                    }
                    return true
                })
                const filtred = apartments
                .filter((apartment) => apartment.maxGuests >= maxGuests)
                .filter((apartment) => {
                    return !filtredBookings
                    .some((booking) => {
                        console.log(booking.dual_roomtype_id, apartment.id)
                        return booking.dual_roomtype_id === apartment.id
                    })
                })
                this.apartments = filtred
            }
            try {
                const response = await loadApartmentsBnovo();
                const bookings = await $fetch('/bnovo/bookings', {
                    method: 'POST',
                    body: {
                        start: start,
                        end: end,
                    }
                })
                filterApartmetments(response, bookings.bookings.result)
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