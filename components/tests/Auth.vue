<template>
    <div class="container">
        <div class="row">
            <div class="col-2">
                Тестовая зона
            </div>
            <div class="col-10">
                <button @click="authToggle()" :class="{'btn-outline-warning' : !user.auth.isAuth, 'btn-warning' : user.auth.isAuth}" class="btn">Авторизован</button>
                <button @click="user.auth.isGuest = !user.auth.isGuest" :disabled="!user.auth.isAuth" :class="{'btn-outline-warning' : !user.auth.isGuest, 'btn-warning' : user.auth.isGuest}" class="btn">Гость</button>
                <button @click="user.auth.isAdmin = !user.auth.isAdmin" :disabled="!user.auth.isAuth" :class="{'btn-outline-warning' : !user.auth.isAdmin, 'btn-warning' : user.auth.isAdmin}" class="btn">Админ</button>
                <button @click="user.auth.isRenter = !user.auth.isRenter" :disabled="!user.auth.isAuth" :class="{'btn-outline-warning' : !user.auth.isRenter, 'btn-warning' : user.auth.isRenter}" class="btn">Арендатор</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const user = useUserStore();
const roles = {
    admin : user.auth.isAdmin,
    guest : user.auth.isGuest,
    renter : user.auth.isRenter
}
const authToggle = () => {
    if (user.auth.isAuth) {
        user.auth.isAuth = false
        user.auth.isGuest = false
        user.auth.isAdmin = false
        user.auth.isRenter = false
    }
    else {
        user.auth.isAuth = true
    }
}
</script>

<style lang="scss" scoped></style>