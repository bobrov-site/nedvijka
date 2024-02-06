<template>
    <div class="dropdown profile">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <ClientOnly>
                    <FontAwesomeIcon class="user" :icon="['far', 'user']" />
            </ClientOnly>
        </a>
        <div class="dropdown-menu dropdown-menu-end profile-dropdown-menu">
            <!-- Авторизован -->
            <a class="dropdown-item" href="#">Кабинет</a>
            <a class="dropdown-item" href="#">Выйти</a>
            <!-- Не Авторизован -->
            <div class="dropdown-item">
                <button type="button" class="btn btn-primary">Войти</button>
            </div>
            <form class="px-3 py-3">
                <div class="mb-3">
                    <h4>Не зарегистрированы?</h4>
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
                <div class="mb-3">
                    <label for="passwordConfirm" class="form-label">Подтвердить
                        пароль</label>
                    <input type="password" class="form-control" id="passwordConfirm">
                </div>
                <div class="mb-3">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck">
                        <label class="form-check-label" for="dropdownCheck">
                            <!-- TODO ссылка на политику -->
                            Ознакомился с политикой конфединциальности
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>