<script setup></script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <NuxtLink class="navbar-brand" to="/">Название и логотип</NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/">
                            <ClientOnly>
                                <FontAwesomeIcon :icon="['far', 'message']" />
                            </ClientOnly>
                            Поддержка
                        </NuxtLink>
                    </li>
                </ul>
                <!-- profile -->
                <div class="socials me-4">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/">
                                <ClientOnly>
                                    <FontAwesomeIcon class="nav-link-icons whatsapp" :icon="['fab', 'whatsapp']" />
                                </ClientOnly>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/">
                                <ClientOnly>
                                    <FontAwesomeIcon class="nav-link-icons telegram" :icon="['fab', 'telegram']" />
                                </ClientOnly>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/">
                                <ClientOnly>
                                    <FontAwesomeIcon class="nav-link-icons viber" :icon="['fab', 'viber']" />
                                </ClientOnly>
                            </NuxtLink>
                        </li>
                        <li class="nav-item nav-item-profile">
                            <HeaderProfile/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>