<script setup>
import { signIn } from 'next-auth/react';

const user = useUserStore();

const form = ref({
    email: '',
    password: '',
})

const errors = ref({
    errorRequired: false,
    errorPasswordWrong: false,
    errorPasswordLength: false,
    errorPasswordNotMatch: false
})

const isButtonDisabled = ref(false);
const isEmailExist = ref(null);
const checkEmail = async ($event) => {
    isButtonDisabled.value = true;
    try {
        await $fetch('/api/auth/check', {
            method: 'POST',
            body: { email: form.value.email }
        })
        isButtonDisabled.value = false;
        // TODO добавить редирект на страницу ошибки
    }
    catch (e) {
        isEmailExist.value = true
        isButtonDisabled.value = false;
    }
}

const errorsCodes = getErrorsCodes()
const resetErrors = () => {
    Object.keys(errors.value).forEach((key) => errors.value[key] = false)
}

const logIn = () => {
    resetErrors();
    signIn('credentials', {email: form.value.email, password: form.value.password, redirect: false})
    .then((credentials) => {
        if (credentials.error) {
            errors.value[credentials.error] = true
            return
        }
        const { getSession } = useAuth();        
        getSession().then((session) => {
            user.authUser(session.user);
            navigateTo('/'); 
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
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form v-if="!isEmailExist" @submit.prevent="checkEmail($event)">
                        <div class="mb-3">
                            <label for="email" class="form-label">Адрес электронной
                                почты</label>
                            <input v-model="form.email" type="email" class="form-control" id="email">
                        </div>
                        <button :disabled="isButtonDisabled" type="submit" class="btn btn-primary">Далее</button>
                    </form>
                    <form v-if="isEmailExist" @submit.prevent="logIn()">
                        <div class="mb-3">
                            <label for="email" class="form-label">Адрес электронной
                                почты</label>
                            <input v-model="form.email" type="email" class="form-control" id="email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Пароль</label>
                            <input v-model="form.password" type="password" required :class="{'is-invalid': errors.errorPasswordWrong}" class="form-control" id="password">
                            <div class="invalid-feedback">{{ errorsCodes.errorPasswordWrong }}</div>
                        </div>
                        <button :disabled="isButtonDisabled" type="submit" class="btn btn-primary">Войти</button>
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