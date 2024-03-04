export default defineEventHandler(async (event) => {
    try {
        const response = await axiosInstance({
            url: 'roomTypes/get',
            method: 'GET'
        })
        return {
            roomTypes : response.data
        }
    }
    catch(e) {
        throw new createError({
            statusCode: 400,
            statusMessage: e.message
        })
    }
})