import axios from "axios"

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
                apikey: 'd03416db-7b20-44b0-a7c2-297b4e834328',
                geocode: geocode,
                lang: 'ru_RU',
                format: 'json'
            }
        })
        console.log(response, 'response')
        return {
            geocode: response.data
        }
    }
    catch(e) {
        throw createError({
            statusCode: 500,
            statusMessage: e.message
        })
    }
})