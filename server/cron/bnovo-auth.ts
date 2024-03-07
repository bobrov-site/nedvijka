import { defineCronHandler } from '#nuxt/cron';

export default defineCronHandler('everyMinute', () => {
    $fetch('/bnovo/auth', {method: 'GET'})
    .then((response) => {
        console.log('cron works nice. bnovo auth')
    })
    .catch((e) => {
        console.log('bnovo auth failed')
    })
}, {runOnInit: true})