import GSTC from "gantt-schedule-timeline-calendar/dist/gstc.wasm.esm.min.js";
import 'gantt-schedule-timeline-calendar/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.provide('GSTC', GSTC)
})