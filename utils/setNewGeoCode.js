export default (async(apartment) => {
    const point = {
        x: '',
        y: '',
    }
    const geoCode = await $fetch('/api/map/geocode', {params: {geocode: `${apartment.city} ${apartment.address}`}})
    point.x = Number(geoCode.geocode.y)
    point.y = Number(geoCode.geocode.x)
    return point;
})