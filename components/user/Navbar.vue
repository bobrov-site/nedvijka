<template>
    <div>
        <ul v-if="user.user.role === 'guest'" class="nav nav-tabs">
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
        <ul v-if="user.user.role === 'renter' || user.user.role === 'admin'" class="nav nav-tabs">
            <li class="nav-item">
                <NuxtLink to="/renter/objects" :class="{ 'active': route.name === 'renter-objects' }" class="nav-link">
                    Мои обьекты
                </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/renter/schedule" :class="{ 'active': route.name === 'renter-schedule' }" class="nav-link">
                    Шахматка
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