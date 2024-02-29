<script setup>
import { signIn } from 'next-auth/react';

const user = useUserStore();
const errorCodes = getErrorsCodes();
const close = ref(null)

const form = ref({
    email: '',
    password: '',
    passwordConfirm: '',
})

const errors = ref({
    errorRequired: false,
    errorPasswordWrong: false,
    errorPasswordLength: false,
    errorPasswordNotMatch: false
})

const isLoading = ref(false);
const process = ref('emailCheck');

const closeModal = () => {
    close.value.click();
}
const checkEmail = async () => {
    resetErrors();
    isLoading.value = true;
    try {
        await $fetch('/api/auth/check', {
            method: 'POST',
            body: { email: form.value.email }
        })
        isLoading.value = false;
        process.value = 'registration';
    }
    catch (e) {
        process.value = 'login'
        isLoading.value = false;
    }
}
const resetErrors = () => {
    Object.keys(errors.value).forEach((key) => errors.value[key] = false)
}

const logIn = () => {
    resetErrors();
    signIn('credentials', { email: form.value.email, password: form.value.password, redirect: false })
        .then((credentials) => {
            if (credentials.error) {
                errors.value[credentials.error] = true
                return
            }
            const { getSession } = useAuth();
            getSession().then((session) => {
                user.authUser(session.user);
                closeModal();
                navigateTo({
                    path: '/',
                    query: {
                        isLogin: true
                    }
                }).then(() => { })
            })
        })
}

const registration = () => {
    isLoading.value = true;
    resetErrors();
    validateRegisterForm(form.value)
        .then((error) => {
            if (error) {
                errors.value[error.message] = true
                isLoading.value = false;
                return;
            }
            $fetch('/api/auth/register', {
                method: 'POST',
                body: form.value
            })
                .then(() => {
                    isLoading.value = false;
                    signIn('credentials', { email: form.value.email, password: form.value.password, redirect: false }).then(() => {
                        const { getSession } = useAuth();
                        getSession().then((session) => {
                            closeModal();
                            user.authUser(session.user);
                            navigateTo({
                                path: '/',
                                query: {
                                    isRegistred: true
                                }
                            }).then(() => { })
                        })
                    })
                })
                .catch((e) => {
                    console.log(e, 'error jopa  ')
                    isLoading.value = false;
                })
        })
}
</script>
<template>
    <div class="modal fade" id="authModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Чтобы воспользоваться всеми возможностями сервиса нужно войти или
                        зарегистрироваться</h1>
                    <button ref="close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form v-if="process === 'emailCheck'" @submit.prevent="checkEmail()">
                        <div class="mb-3">
                            <label for="email" class="form-label">Адрес электронной
                                почты</label>
                            <input v-model="form.email" type="email" class="form-control" id="email">
                        </div>
                        <button :disabled="isLoading" type="submit" class="btn btn-primary">Далее</button>
                    </form>
                    <form v-if="process === 'login'" @submit.prevent="logIn()">
                        <div class="mb-3">
                            <label for="email" class="form-label">Адрес электронной
                                почты</label>
                            <input v-model="form.email" type="email" class="form-control" id="email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Пароль</label>
                            <input v-model="form.password" type="password" required
                                :class="{ 'is-invalid': errors.errorPasswordWrong }" class="form-control" id="password">
                            <div class="invalid-feedback">{{ errorCodes.errorPasswordWrong }}</div>
                        </div>
                        <button :disabled="isLoading" type="submit" class="btn btn-primary">Войти</button>
                    </form>
                    <form v-if="process === 'registration'" @submit.prevent="registration()">
                        <div class="mb-3">
                            <label for="emailRegistration" class="form-label">Адрес электронной
                                почты</label>
                            <input v-model="form.email" type="email" :class="{ 'is-invalid': errors.errorRequired }"
                                class="form-control" id="emailRegistration" required>
                            <div class="invalid-feedback">{{ errorCodes.errorRequired }}</div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Пароль</label>
                            <input v-model="form.password" type="password" required
                                :class="{ 'is-invalid': errors.errorRequired || errors.errorPasswordLength }"
                                class="form-control" id="password">
                            <div v-if="errors.errorRequired" class="invalid-feedback">{{ errorCodes.errorRequired }}</div>
                            <div v-if="errors.errorPasswordLength" class="invalid-feedback">{{
                                errorCodes.errorPasswordLength }}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="passwordConfirm" class="form-label">Подтвердите пароль</label>
                            <input v-model="form.passwordConfirm" type="password" required
                                :class="{ 'is-invalid': errors.errorRequired || errors.errorPasswordLength || errors.errorPasswordNotMatch }"
                                class="form-control" id="passwordConfirm">
                            <div v-if="errors.errorRequired" class="invalid-feedback">{{ errorCodes.errorRequired }}</div>
                            <div v-if="errors.errorPasswordNotMatch" class="invalid-feedback">{{
                                errorCodes.errorPasswordNotMatch }}</div>
                            <div v-if="errors.errorPasswordLength" class="invalid-feedback">{{
                                errorCodes.errorPasswordLength }}
                            </div>
                        </div>
                        <button :disabled="isLoading" type="submit" class="btn btn-primary">Зарегистрироваться</button>
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
                    <hr>
                    <div class="mb-3">
                        <h4 class="fs-5">Другие способы авторизации:</h4>
                        sberId, vk, ...
                    </div>
                </div>
                <div class="modal-footer">
                    <p class="fw-light">
                        Совершая авторизацию, вы соглашаетесь с условиями <a href="#">пользовательского
                            соглашения</a> и
                        на <a href="#">обработку персональных данных</a>
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>