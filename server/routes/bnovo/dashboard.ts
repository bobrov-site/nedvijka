export default defineEventHandler(async(event) => {
    const {start, end} = getQuery(event)
    const convertDate = (date) => {
        return date.split('-').join('.')
    }
    if (start && end) {
        try {
            // console.log(convertDate(start), convertDate(end))
            const response = await axiosInstance({
                url: '/dashboard',
                method: 'GET',
                params: {
                    arrival_from: convertDate(start),
                    arrival_to: convertDate(end),
                    advanced_search: 2,
                    
                }
            })
            // console.log(response.data.bookings)
            return {
                dashboard: response.data,
            }
        }
        catch(e){
            throw new createError({
                statusCode: 500,
                statusMessage: e.message,
            })        
        }
    }
    throw new createError({
        statusCode: 400,
        statusMessage: 'start or end not found',
    })
})