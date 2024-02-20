<template>
    <div>
        <ul v-if="user.auth.isGuest" class="nav nav-tabs">
            <li class="nav-item">
                <NuxtLink to="/guest/favorites" :class="{ 'active': route.name === 'guest-favorites' }" class="nav-link">
                    Избранное
                </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/guest/bookings" :class="{ 'active': route.name === 'guest-bookings' }" class="nav-link">
                    Мои брони
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const user = useUserStore();
const route = useRoute();
</script>

<style lang="scss" scoped></style>