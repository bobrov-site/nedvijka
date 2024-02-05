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
                <div class="dropstart">
                    <div class="d-flex">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <div
                                class="user-background bg-secondary-subtle rounded-circle d-flex justify-content-center align-items-center">
                                <ClientOnly>
                                    <FontAwesomeIcon :icon="['far', 'user']" />
                                </ClientOnly>
                            </div>
                        </a>
                        <div class="dropdown-menu profile-dropdown-menu">
                            <!-- Авторизован -->
                            <a class="dropdown-item" href="#">Кабинет</a>
                            <a class="dropdown-item" href="#">Выйти</a>
                            <!-- Не Авторизован -->
                            <a class="dropdown-item" href="#">Войти</a>
                            <form class="px-3 py-3">
                                <div class="mb-3">
                                    <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                                        placeholder="email@example.com">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                                        placeholder="Password">
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                        <label class="form-check-label" for="dropdownCheck">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </form>
                            
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>