export default (async () => {
    try {
        await $fetch('/bnovo/auth', {method: 'GET'});
        const response = await $fetch('/bnovo/roomTypes')
        const roomTypesPublic = await $fetch('/bnovo/roomTypesPublic');
        const roomsWithPhotoes = roomTypesPublic.roomTypesPublic.rooms.map((room) => {
            const result = {};
            result.id = room.id;
            result.photos = room.photos ? room.photos : [];
            result.name = room.name;
            return result;
        })
        const apartments = response.roomTypes.roomtypes
        if (apartments.length === 0) {
            return apartments
        }
        apartments.forEach(async(apartment) => {
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
            apartment.geo_data.x = Number(apartment.geo_data.x)
            apartment.geo_data.y = Number(apartment.geo_data.y)
        })
        //по непонятной причине в bnovo айди не совпадают с внутренним и паблик api
        //приходится сравнивать по названию, что мдаа.
        apartments.map((apartment) => {
            apartment.photos = roomsWithPhotoes.find((room) => room.name === apartment.name).photos
            return apartment
        })
        return apartments
    }
    catch (e) {
        console.log(e)
        return e
    }
})