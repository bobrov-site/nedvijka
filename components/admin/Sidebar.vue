<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">Админ панель</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <NuxtLink class="nav-link text-white" to="/">
                    <FontAwesomeIcon :icon="['fas', 'house']" />
                    На сайт
                </NuxtLink>
            </li>
            <li>
                <NuxtLink @click="changeTab(1)" to="/admin/users"
                    :class="setActiveTab('users')"
                    class="nav-link">
                    <FontAwesomeIcon :icon="['fas', 'users']" />
                    Пользователи
                </NuxtLink>
            </li>
            <li>
                <NuxtLink @click="changeTab(2)" to="/admin/apartments"
                    :class="setActiveTab('apartments')"
                    class="nav-link">
                    <FontAwesomeIcon :icon="['fas', 'building']" />
                    Квартиры
                </NuxtLink>
            </li>
        </ul>
        <hr>
    </div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped></style>