import axios from "axios"

const convertToPoint = (data) => {
    const point = {
        x: '',
        y: '',
    }
    const split = data.pos.split(' ')
    point.x = Number(split[0])
    point.y = Number(split[1])
    return point
}
export default defineEventHandler(async (event) => {
    const { geocode } = getQuery(event)
    if (!geocode) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Geocode is required'
        })
    }
    try {
        const response = await axios.get('https://geocode-maps.yandex.ru/1.x', {
            params: {
                apikey: useRuntimeConfig().yandexGeocode,
                geocode: geocode,
                lang: 'ru_RU',
                format: 'json'
            }
        })
        const point = convertToPoint(response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point)
        return {
            geocode: point
        }
    }
    catch(e) {
        throw createError({
            statusCode: 500,
            statusMessage: e.message
        })
    }
})