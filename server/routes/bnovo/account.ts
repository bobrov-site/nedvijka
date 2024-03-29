export default defineEventHandler(async() => {
    const response = await axiosInstance({
        url: 'account/current',
        method: 'GET'
    })
    return {
        account : response.data
    }
})