<template>
    <div class="schedule">
        <div v-if="process === 'loaded'" class="row mt-4">
            <div class="col-12">
                <span v-for="legend in legends" :key="legend.id" :class="`badge ${legend.backgroundColor}`">{{
                    legend.name }}</span>
            </div>
        </div>
        <div v-if="process === 'loading'" class="row mt-4">
            <div class="col-12">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-if="process === 'loaded'" class="row mt-4">
            <FullCalendar ref="calendar" :options="calendarOptions" />
        </div>
    </div>
</template>
<script setup>
import FullCalendar from '@fullcalendar/vue3'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all';

definePageMeta({
    layout: 'user'
})
onMounted(async () => {
    await loadData();
})
const calendar = ref(null)
const tasks = ref([])
const calendarOptions = ref({
    plugins: [interactionPlugin, timeGridPlugin, dayGridPlugin],
    initialView: 'dayGridMonth',
    nowIndicator: true,
    editable: true,
    locales: allLocales,
    locale: 'ru',
    headerToolbar: {
        left: '',
        center: 'title',
        right: ''
    },
    customButtons: {
        prevButton: {
            text: 'Назад',
            click: (async () => {
                calendar.value.calendar.prev()
                date.value = new Date(calendar.value.calendar.getDate())
                await loadData();
            })
        },
        nextButton: {
            text: 'Вперед',
            click: (async () => {
                calendar.value.calendar.next()
                date.value = new Date(calendar.value.calendar.getDate())
                await loadData();
            })
        }
    }
})
const markersColors = {
    0: 'red',
    1: 'green',
    2: 'blue',
    3: 'orange',
    4: 'purple',
}
const config = useRuntimeConfig();
const apartments = ref([])
const process = ref();
const date = ref(new Date())
const firstDayCurrentMonth = ref(null);
const lastDayCurrentMonth = ref(null);
const bookings = ref()
const legends = ref([])
const getCalendarLegend = () => {
    const ids = []
    legends.value = tasks.value
        .filter((task) => {
            if (ids.includes(task.id)) {
                return false
            }
            ids.push(task.id)
            return true
        })
        .map((item) => {
            apartments.value.forEach((apartment) => {
                if (apartment.id === item.id) {
                    item = { ...item, ...apartment }
                }
            })
            return item
        })
}
const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}
const loadData = async () => {
    if (useUserStore().user.id === config.public.adminIde) {
        try {
            process.value = 'loading'
            firstDayCurrentMonth.value = new Date(date.value.getFullYear(), date.value.getMonth(), 1)
            lastDayCurrentMonth.value = new Date(date.value.getFullYear(), date.value.getMonth() + 1, 0);
            apartments.value = await loadApartmentsBnovo();
            bookings.value = await $fetch('/bnovo/bookings', {
                method: 'POST',
                body: {
                    start: formatDate(firstDayCurrentMonth.value),
                    end: formatDate(lastDayCurrentMonth.value),
                }
            })
            setMarkersBnovo();
            process.value = 'loaded'
        }
        catch (e) {
            process.value = 'loaded'
            console.log(e)
        }

    }
    //TODO добавить способ подругзки от пользователей не админ 
}

const setMarkersBnovo = () => {
    const changeFormatDate = (date) => {
        const day = date.split('-')[0]
        const month = date.split('-')[1]
        const year = date.split('-')[2]
        return `${year}-${month}-${day}`;
    }
    if (!bookings.value.bookings.result) {
        return
    }
    const items = bookings.value.bookings.result.map((booking) => {
        const item = {}
        item.price = booking.amount;
        item.start = changeFormatDate(booking.real_arrival_format.split(' ')[0])
        item.end = changeFormatDate(booking.real_departure_format.split(' ')[0])
        item.id = booking.dual_roomtype_id
        item.backgroundColor = markersColors[booking.dual_roomtype_id % 5]
        item.title = `${booking.customer}`
        item.editable = false
        return item
    })
    tasks.value = items
    calendarOptions.value.events = items
    getCalendarLegend();
}
</script>

<style lang="scss" scoped></style>