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
                <a class="dropdown-item" href="#">Профиль</a>
                <a class="dropdown-item" href="#">Выйти</a>
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