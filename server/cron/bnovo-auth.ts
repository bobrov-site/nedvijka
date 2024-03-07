import { defineCronHandler } from '#nuxt/cron';

export default defineCronHandler('everyMinute', () => {
    $fetch('/bnovo/auth', {method: 'GET'})
    .then((response) => {
        console.log(response, 'bnovo response')
        console.log('bnovo auth success')
    })
    .catch((e) => {
        console.log('bnovo auth failed')
    })
}, {runOnInit: true})