import { defineCronHandler } from '#nuxt/cron';

export default defineCronHandler('everyThirtyMinutes', () => {
    $fetch('/bnovo/auth', {method: 'GET'})
    .then(() => {
        console.log('bnovo auth success')
    })
    .catch((e) => {
        console.warn('bnovo auth failed')
    })
}, {runOnInit: true})