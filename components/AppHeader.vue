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
                <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul class="navbar-nav align-items-center mb-2 mb-lg-0">
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
                            <!-- TODO решить вопрос с соцсетями -->
                            <!-- <div class="dropdown-center">
                                <button class="btn dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false"></button>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">
                                        <h3 class="fs-6">Свяжитесь с нами</h3>
                                    </li>
                                    <li class="dropdown-item d-flex">
                                        <NuxtLink class="nav-link" to="/">
                                            <FontAwesomeIcon class="nav-link-icons whatsapp" :icon="['fab', 'whatsapp']" />
                                        </NuxtLink>
                                        <NuxtLink class="nav-link" to="/">
                                            <FontAwesomeIcon class="nav-link-icons telegram" :icon="['fab', 'telegram']" />
                                        </NuxtLink>
                                        <NuxtLink class="nav-link" to="/">
                                            <FontAwesomeIcon class="nav-link-icons viber" :icon="['fab', 'viber']" />
                                        </NuxtLink>
                                    </li>
                                    <li class="dropdown-item d-flex">
                                        <NuxtLink class="nav-link" to="/">
                                            <FontAwesomeIcon class="nav-link-icons whatsapp" :icon="['fab', 'whatsapp']" />
                                        </NuxtLink>
                                        <NuxtLink class="nav-link" to="/">
                                            <FontAwesomeIcon class="nav-link-icons telegram" :icon="['fab', 'telegram']" />
                                        </NuxtLink>
                                        <NuxtLink class="nav-link" to="/">
                                            <FontAwesomeIcon class="nav-link-icons viber" :icon="['fab', 'viber']" />
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div> -->
                        </li>
                    </ul>
                    <nav>
                        <ul class="navbar-nav align-items-center mb-2 mb-lg-0">
                            <li class="nav-item me-2">
                                <NuxtLink v-if="!user.auth.isAuth" role="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#authModal">Сдать жилье</NuxtLink>
                            </li>
                            <li v-if="!user.auth.isAuth" class="nav-item">
                                <NuxtLink class="btn btn-outline-primary" role="button" data-bs-toggle="modal" data-bs-target="#authModal">Бронирование</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <!-- profile -->
                    <div class="socials">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item me-4">
                                <NuxtLink v-if="user.auth.isAuth && user.user.role === 'renter'" class="btn btn-outline-primary" to="/renter/objects">Сдать жилье</NuxtLink>
                            </li>
                            <li v-if="user.auth.isAuth && user.role === 'guest'" class="nav-item me-4">
                                <NuxtLink class="btn btn-outline-primary" to="/guest/bookings">Бронирование</NuxtLink>
                            </li>
                            <li class="nav-item me-4">
                                <NuxtLink v-if="!user.auth.isAuth" data-bs-toggle="modal" data-bs-target="#authModal" class="btn btn-outline-primary">
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