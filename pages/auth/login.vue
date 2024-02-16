<template>
    <form class="px-3 py-3">
        <div class="mb-3">
            <h4>Вход</h4>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Адрес электронной
                почты</label>
            <input type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
        <p class="mt-2">Еще не зарегистрированы? <NuxtLink to="/auth/registration">Регистрация</NuxtLink></p>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>