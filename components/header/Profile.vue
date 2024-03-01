<script setup>
onMounted(() => {
    showDropdown(dropdown.value)
})
const dropdown = ref(null)
const user = useUserStore();
const { signOut } = useAuth();
const logOut = async() => {
    await signOut({redirect: false});
    await navigateTo({path: '/', query: {isLogout: true}});
}
const getProfileLink = () => {
    if (user.auth.isGuest) {
        return '/guest/favorites'
    }
    if (user.auth.isRenter) {
        return '/renter/objects'
    }
}
</script>
<template>
    <div ref="dropdown" class="dropdown profile">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon class="user" :icon="['far', 'user']" />
        </a>
        <div class="dropdown-menu dropdown-menu-end profile-dropdown-menu">
            <!-- Авторизован -->
            <div v-if="user.auth.isAuth">
                <NuxtLink v-if="user.auth.isAdmin" class="dropdown-item text-danger" to="/admin/apartments">Админка
                </NuxtLink>
                <NuxtLink class="dropdown-item" :to="getProfileLink()">Профиль</NuxtLink>
                <button @click="logOut()" type="button" class="dropdown-item">Выйти</button>
            </div>
            <!-- Не Авторизован -->
            <div v-else>
                <div class="dropdown-header">
                    Войдите или создайте аккаунт, чтобы использовать все возможности сервиса
                </div>
                <div class="dropdown-item">
                    <button type="btn" class="w-100 btn btn-lg btn-primary" data-bs-toggle="modal"
                        data-bs-target="#authModal">
                        Войдите
                    </button>
                </div>

            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>