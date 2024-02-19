<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const user = useUserStore();
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
                            <div class="dropdown-center">
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
                            </div>
                        </li>
                    </ul>
                    <nav>
                        <ul class="navbar-nav align-items-center mb-2 mb-lg-0">
                            <li class="nav-item me-2">
                                <NuxtLink :data-bs-toggle="user.auth.isAuth ? '' : 'modal'" data-bs-target="#authModal"
                                    :role="user.auth.isAuth ? '' : 'button'" class="btn btn-outline-primary"
                                    :to="{ '#': !user.auth.isAuth, '#': user.auth.isAuth }">
                                    Сдать жилье
                                </NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink :data-bs-toggle="user.auth.isAuth ? '' : 'modal'" data-bs-target="#authModal"
                                    :role="user.auth.isAuth ? '' : 'button'" class="btn btn-outline-primary" :to="{ '#': !user.auth.isAuth, '#': user.auth.isAuth }
                                        ">Бронирование</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <!-- profile -->
                    <div class="socials">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item me-4">
                                <button class="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                    data-bs-title="Войдите, чтобы посмотреть избранные объекты">
                                    <ClientOnly>
                                        <FontAwesomeIcon :icon="['fas', 'heart']" />
                                    </ClientOnly>
                                    Избранное
                                </button>
                            </li>
                            <li class="nav-item nav-item-profile">
                                <HeaderProfile />
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
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