<template>
    <div class="card review-card">
        <div class="card-body">
            <h4 class="card-title">
                {{ props.name }}
            </h4>
            <div class="d-flex mb-2">
                <FontAwesomeIcon v-for="i in 5" :key="i" :icon="['fas', 'star']" class="review-icon me-1"/>
            </div>
            <p class="card-text">{{ props.text }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String
    },
    text: {
        type: String
    }
})
</script>

<style lang="scss" scoped></style>