<template>
    <ul class="list-group max-w-100 comforts-list">
        <li v-for="(comfort, index) in props.comfortsList" :key="index" class="list-group-item d-flex align-items-center justify-content-between">
            <span>{{ comfort }}</span>
            <FontAwesomeIcon class="square-check-icon text-success" :icon="['far', 'square-check']" />
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    comfortsList: {
        type: Array
    }
})
</script>

<style lang="scss" scoped></style>