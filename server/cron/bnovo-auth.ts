import { defineCronHandler } from '#nuxt/cron';

export default defineCronHandler('hourly', () => {
    $fetch('/bnovo/auth', {method: 'GET'})
    .then(() => {
        console.log('bnovo auth success')
    })
    .catch((e) => {
        console.warn('bnovo auth failed')
    })
}, {runOnInit: true})