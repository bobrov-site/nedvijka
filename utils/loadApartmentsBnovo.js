export default (async () => {
    try {
        const response = await $fetch('/bnovo/roomTypes')
        const apartments = response.roomTypes.roomtypes
        apartments.forEach((apartment) => {
            let maxGuestsCount = 0;
            apartment.subrooms.forEach((subroom) => {
                maxGuestsCount += Number(subroom.children) + Number(subroom.adults)
            })
            apartment.maxGuests = maxGuestsCount
            apartment.roomsCount = apartment.subrooms.length
            if (apartment.extra.beds) {
                apartment.bedsCount = Number(Object.keys(apartment.extra.beds)[0])
            }
            apartment.bedsCount = null
        })
        return apartments
    }
    catch (e) {
        console.log(e)
        return e
    }
})