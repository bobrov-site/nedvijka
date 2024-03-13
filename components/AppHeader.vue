<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
onMounted(() => {
    showDropdown(dropdownSupport.value);
})
const user = useUserStore();
const dropdownSupport = ref();
</script>
<template>
    <AuthModal />
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <NuxtLink class="navbar-brand" to="/">Fridda</NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav align-items-lg-center mb-2 mb-lg-0">
                        <li class="nav-item me-4">
                            <a href="tel:+7(962)-425-88-45" class="text-decoration-none">
                                <ClientOnly>
                                    <FontAwesomeIcon :icon="['fas', 'phone']" />
                                </ClientOnly>
                                + 7(962)-425-88-45
                            </a>
                        </li>
                        <li class="nav-item d-flex">
                            <NuxtLink class="nav-link" to="/">
                                <ClientOnly>
                                    <FontAwesomeIcon class="nav-link-icons whatsapp" :icon="['fab', 'whatsapp']" />
                                </ClientOnly>

                            </NuxtLink>
                            <NuxtLink class="nav-link" to="/">
                                <ClientOnly>
                                    <FontAwesomeIcon class="nav-link-icons telegram" :icon="['fab', 'telegram']" />
                                </ClientOnly>

                            </NuxtLink>
                            <NuxtLink class="nav-link" to="/">
                                <ClientOnly>
                                    <FontAwesomeIcon class="nav-link-icons viber" :icon="['fab', 'viber']" />
                                </ClientOnly>
                            </NuxtLink>
                        </li>
                    </ul>
                    <nav class="me-lg-auto ms-lg-auto">
                        <ul class="navbar-nav align-items-lg-center mb-2 mb-lg-0">
                            <li class="nav-item me-lg-2 me-0 mb-2 mb-lg-0">
                                <NuxtLink v-if="!user.auth.isAuth" role="button" class="btn btn-outline-primary d-block d-lg-inline-block" data-bs-toggle="modal" data-bs-target="#authModal">Сдать жилье</NuxtLink>
                            </li>
                            <li v-if="!user.auth.isAuth" class="nav-item">
                                <NuxtLink class="btn btn-outline-primary d-block d-lg-inline-block" role="button" data-bs-toggle="modal" data-bs-target="#authModal">Бронирование</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <!-- profile -->
                    <div class="socials ms-lg-auto">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li v-if="user.auth.isAuth && user.user.role === 'renter'" class="nav-item me-4 mb-4 mb-lg-0">
                                <NuxtLink class="btn btn-outline-primary d-block d-lg-inline-block" to="/renter/objects">Сдать жилье</NuxtLink>
                            </li>
                            <li v-if="user.auth.isAuth && user.role === 'guest'" class="nav-item me-4">
                                <NuxtLink class="btn btn-outline-primary d-block d-lg-inline-block" to="/guest/bookings">Бронирование</NuxtLink>
                            </li>
                            <li class="nav-item me-lg-4 me-0">
                                <NuxtLink v-if="!user.auth.isAuth" data-bs-toggle="modal" data-bs-target="#authModal" class="btn btn-outline-primary d-block d-lg-inline-block">
                                    <ClientOnly>
                                        <FontAwesomeIcon :icon="['fas', 'heart']" />
                                    </ClientOnly>
                                    Избранное
                                </NuxtLink>
                                <NuxtLink v-if="user.auth.isAuth && user.user.role === 'guest'" to="/guest/favorites" class="btn btn-outline-primary">
                                    <ClientOnly>
                                        <FontAwesomeIcon :icon="['fas', 'heart']" />
                                    </ClientOnly>
                                    Избранное
                                </NuxtLink>
                            </li>
                            <li class="nav-item nav-item-profile">
                                <HeaderProfile />
                            </li>
                            <li class="nav-item">
                                <div ref="dropdownSupport" class="dropdown">
                                    <button class="nav-link btn dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <ClientOnly>
                                            <FontAwesomeIcon :icon="['far', 'circle-question']" />
                                        </ClientOnly>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li class="dropdown-item">
                                            <NuxtLink class="text-decoration-none" to="/support">
                                                Поддержка
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>