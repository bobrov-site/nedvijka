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
        return {
            error: e.message
        };
    }
})