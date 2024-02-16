<script setup></script>
<template>
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
                            <li class="nav-item d-flex">
                                <NuxtLink class="nav-link me-2" to="/">
                                    <FontAwesomeIcon class="nav-link-icons whatsapp" :icon="['fab', 'whatsapp']" />
                                </NuxtLink>
                                <NuxtLink class="nav-link me-2" to="/">
                                    <FontAwesomeIcon class="nav-link-icons telegram" :icon="['fab', 'telegram']" />
                                </NuxtLink>
                                <NuxtLink class="nav-link" to="/">
                                    <FontAwesomeIcon class="nav-link-icons viber" :icon="['fab', 'viber']" />
                                </NuxtLink>
                            </li>
                            <li class="nav-item nav-item-profile">
                                <HeaderProfile />
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>