<template>
    <div>
        <div ref="gantt"></div>
    </div>
</template>

<script setup>
onMounted(() => {
    const convertTimeDate = (date) => {
        const dates = date.split('-')
        const year = dates[2]
        const month = dates[1]
        const day = dates[0]
        console.log(date)
        return `${year}-${month}-${day}`
    }
    const config = {
        licenseKey: useRuntimeConfig().public.ganttSecretKey,
        locale: {
            name: 'ru',
            weekdays: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split(
                '_'
            ),
            weekdaysShort: 'Вск_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
            weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split(
                '_'
            ),
            monthsShort: 'Янв_Фев_Март_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Ноя_Дек'.split('_'),
        },
        list: {
            columns: {
                data: {
                    [$GSTC.api.GSTCID("id")]: {
                        id: $GSTC.api.GSTCID("id"),
                        width: 200,
                        data: ({ row }) => $GSTC.api.sourceID(row.label),
                        header: {
                            content: "Название",
                        },
                    },
                },
            },
            row: {
                height: 80,
            },
            rows: generateRows(),
        },
        chart: {
            item: {
                height: 50,
            },
            items: generateItems(),
            time: {
                from: $GSTC.api.date(convertTimeDate(props.firstDayCurrentMonth)).valueOf(),
                to: $GSTC.api.date(convertTimeDate(props.lastDayCurrentMonth)).valueOf()
            }
        },
    };

    state.value = $GSTC.api.stateFromConfig(config);
    gstc.value = $GSTC({
        element: gantt.value,
        state: state.value
    });
})
const props = defineProps({
    tasks: {
        type: Array,
        default: () => {
            return []
        }
    },
    lastDayCurrentMonth: {
        type: String,
    },
    firstDayCurrentMonth: {
        type: String,
    }
})
const { $GSTC } = useNuxtApp();
const gantt = ref(null)
const state = ref(null)
const gstc = ref(null)

const generateRows = () => {
    const rows = {};
    for (let i = 0; i < props.tasks.length; i++) {
        const id = $GSTC.api.GSTCID(props.tasks[i].id)
        const label = props.tasks[i].name
        rows[id] = {
            id,
            label
        };
    }
    return rows;
}
const formatDate = (date) => {
    const dates = date.split(' ')[0]
    const day = dates.split('-')[2]
    const month = dates.split('-')[1]
    const year = dates.split('-')[0]
    return `${day}-${month}-${year} ${date.split(' ')[1]}`
}
const generateItems = () => {
    const result = {}
    const changedItems = props.tasks.map((task) => {
        const start = formatDate(task.time.start)
        const end = formatDate(task.time.end)
        task.id = $GSTC.api.GSTCID(task.id)
        task.time.start = $GSTC.api.date(start).valueOf()
        task.time.end = $GSTC.api.date(end).valueOf()
        task.label = task.title
        return task
    })
    console.log(changedItems, 'items')
    for (let i = 0; i < changedItems.length; i++) {
        const id = $GSTC.api.GSTCID(`${changedItems[i].id}-index-${i}`);
        const rowId = $GSTC.api.GSTCID(changedItems[i].id);
        result[id] = {
            id,
            label: changedItems[i].label,
            rowId,
            style: {
                background: changedItems[i].backgroundColor
            },
            time: {
                start: changedItems[i].time.start,
                end: changedItems[i].time.end,
            },
        };
    }
    return result;
}
</script>

<style lang="scss" scoped></style>