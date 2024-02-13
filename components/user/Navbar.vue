<template>
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <button @click="changeTab(1)" :class="{'active': user.activeTab === 1}" class="nav-link" type="button">Мои квартиры</button>
        </li>
        <li class="nav-item">
            <button @click="changeTab(0)" :class="{'active': user.activeTab === 0}" class="nav-link" type="button">Избранное</button>
        </li>
    </ul>
</template>

<script setup>
const user = useUserStore();
const changeTab = (id) => {
    if (id !== user.activeTab) {
        user.activeTab = id
    }
}
</script>

<style lang="scss" scoped></style>