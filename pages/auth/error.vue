<template>
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <div class="form-error">
                <h1>Пользователь не найден! Зарегистрируйтесь</h1>
                <form>
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
                        <label for="passwordConfirm" class="form-label">Подтвердите пароль</label>
                        <input type="password" class="form-control" id="passwordConfirm">
                    </div>
                    <button type="submit" class="btn btn-primary">Войти</button>
                    <hr>
                    <div class="mb-3">
                        <h4 class="fs-5">Другие способы авторизации:</h4>
                        sberId, vk, ...
                    </div>
                    <hr>
                    <p class="fw-light">
                        Совершая авторизацию, вы соглашаетесь с условиями <a href="#">пользовательского
                            соглашения</a> и
                        на <a href="#">обработку персональных данных</a>
                    </p>
                </form>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>