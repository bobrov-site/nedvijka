import { defineCronHandler } from '#nuxt/cron'
import { useFetch } from 'nuxt/app'

export default defineCronHandler('hourly', () => {
    $fetch('/bnovo/auth', {method: 'GET'})
    .then(() => {
        console.log('bnovo auth success')
    })
    .catch((e) => {
        console.warn('bnovo auth failed')
    })
}, {runOnInit: true})