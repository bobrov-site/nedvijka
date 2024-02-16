<script setup>
const user = useUserStore();
</script>
<template>
    <div class="dropdown profile">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon class="user" :icon="['far', 'user']" />
        </a>
        <div class="dropdown-menu dropdown-menu-end profile-dropdown-menu">
            <!-- Авторизован -->
            <div v-if="user.auth.isAuth">
                <NuxtLink v-if="user.auth.isAdmin" class="dropdown-item text-danger" to="/admin/apartments">Админка</NuxtLink>
                <NuxtLink class="dropdown-item" to="/apartments/create">Добавить</NuxtLink>
                <NuxtLink class="dropdown-item" to="/users/id=1">Профиль</NuxtLink>
                <NuxtLink class="dropdown-item">Выйти</NuxtLink>
            </div>
            <!-- Не Авторизован -->
            <div v-else>
                <NuxtLink class="dropdown-item" to="/auth/login">Войти</NuxtLink>
                <NuxtLink class="dropdown-item" to="/auth/registration">Зарегистрироваться</NuxtLink>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped></style>