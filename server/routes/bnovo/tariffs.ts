export default defineEventHandler(async() => {
    const response = await $fetch('https://online.bnovo.ru/tariff/tariffs', {
        method: 'GET',
        headers: {
            "Accept" : 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return {
        tariffs : response
    }
})