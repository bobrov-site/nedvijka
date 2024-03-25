export default defineEventHandler(async() => {
    try {
        const response = await axiosInstance({
            url: 'tariff/tariffs',
            method: 'GET'
        })
        console.log(response)
        return {
            tariffs : response.data
        }
    }
    catch(e) {

    }
})