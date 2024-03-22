<template>
    <div class="schedule">
        <div v-if="process === 'loading'" class="row mt-4">
            <div class="col-12">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-if="process === 'loaded'" class="row mt-4">
            <GanttSchedule :tasks="tasks" :firstDayCurrentMonth="formatDate(firstDayCurrentMonth)" :lastDayCurrentMonth="formatDate(lastDayCurrentMonth)" />
        </div>
    </div>
</template>
<script setup>

definePageMeta({
    layout: 'user'
})
onMounted(async () => {
    await loadData();
})

const tasks = ref([])
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
            if (!bookings.value.bookings.result) {
                return
            }
            const items = bookings.value.bookings.result.map((booking) => {
                const item = {}
                item.price = booking.amount;
                item.time = {
                    start : booking.real_arrival_format,
                    end: booking.real_departure_format
                }
                item.id = booking.dual_roomtype_id
                item.backgroundColor = markersColors[booking.dual_roomtype_id % 5]
                item.label = `${booking.customer}`
                item.name = apartments.value.find((aparment) => aparment.id === booking.dual_roomtype_id).name
                return item
            })
            tasks.value = items
            process.value = 'loaded'
        }
        catch (e) {
            process.value = 'loaded'
            console.log(e)
        }

    }
    //TODO добавить способ подругзки от пользователей не админ 
}
</script>

<style></style>