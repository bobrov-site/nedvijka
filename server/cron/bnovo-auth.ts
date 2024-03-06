import { defineCronHandler } from '#nuxt/cron';

export default defineCronHandler('everyTenMinutes', () => {
    $fetch('/bnovo/auth', {method: 'GET'})
    .then(() => {
        console.log('bnovo auth success')
    })
    .catch((e) => {
        console.log('bnovo auth failed')
    })
}, {runOnInit: true})