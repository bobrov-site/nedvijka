export default defineEventHandler(async (event) => {
    const convertDate = (date:any) => {
        const year =  date.split('-')[2]
        const month = date.split('-')[1]
        const day = date.split('-')[0]
        return `${year}-${month}-${day}`
    }
    const body = await readBody(event);
    if (!body.start && !body.end) {
        throw createError({
            statusCode: 500,
            statusMessage: 'start or end not found',
        })
    }
    try {
        const response = await axiosInstance({
            url: '/planning/bookings',
            headers: {
                'X-Requested-With' : 'XMLHttpRequest'
            },
            method: 'POST',
            data: {
                "dfrom" : convertDate(body.start),
                "dto" : convertDate(body.end),
                "daily" : 0
            }
        })
        return {
            bookings : response.data
        }
    }
    catch(e:any) {
        throw createError({
            statusCode: 500,
            statusMessage: e.message,
        })
    }
})