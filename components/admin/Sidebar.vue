<template>
    <div class="admin-sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100">
        <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 mb-md-0 text-white text-decoration-none">
            <span v-if="!admin.isWrapped" class="fs-4">Админ панель</span>
            <button @click="toggleSidebar()" class="btn-toggler d-none d-md-block" type="button">
                <FontAwesomeIcon class="icon" :icon="['fas', 'bars']" />
            </button>
        </div>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <NuxtLink class="nav-link text-white" to="/">
                    <FontAwesomeIcon class="me-2" :icon="['fas', 'house']" />
                    <span v-if="!admin.isWrapped">На сайт</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink @click="changeTab(1)" to="/admin/users" :class="setActiveTab('users')" class="nav-link">
                    <FontAwesomeIcon class="me-2" :icon="['fas', 'users']" />
                    <span v-if="!admin.isWrapped">Пользователи</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink @click="changeTab(2)" to="/admin/apartments" :class="setActiveTab('apartments')" class="nav-link">
                    <FontAwesomeIcon class="me-2" :icon="['fas', 'building']" />
                    <span v-if="!admin.isWrapped">Квартиры</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const admin = useAdminStore();
onMounted(() => {
    const route = useRoute();
    const name = route.name.split('-')[1]
    const key = Object.keys(tabs).find(key => tabs[key] === name)
    activeTab.value = Number(key)
})
const tabs = {
    1: 'users',
    2: 'apartments'
}
const activeTab = ref()
const changeTab = (id) => {
    activeTab.value = id
}

const setActiveTab = (name) => {
    if (name === tabs[activeTab.value]) {
        return 'active'
    }
    if (name !== tabs[activeTab.value]) {
        return 'text-white'
    }
}

const toggleSidebar = () => {
    admin.isWrapped = !admin.isWrapped
}
</script>

<style lang="scss" scoped></style>