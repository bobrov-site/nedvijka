<script setup>
const form = ref({
    email: '',
    password: '',
    passwordConfirm: '',
})

const errors = ref({
    errorRequired: false,
    errorPasswordNotMatch: false,
    errorPasswordLength: false,
})

const errorCodes = {
    errorRequired: 'Это поле обязательное',
    errorPasswordNotMatch: 'Пароль подтверждения должен совпадать',
    errorPasswordLength: 'Пароль должен быть минимум из 6 символов'
}

const isLoading = ref(false);

const resetErrors = () => {
    Object.keys(errors.value).forEach((key) => errors.value[key] = false)
}

const submitForm = () => {
    isLoading.value = true;
    resetErrors();
    validateRegisterForm(form.value)
        .then((error) => {
            if (error) {
                errors.value[error.message] = true
                return;
            }
            $fetch('/api/auth/register', {
                method: 'POST',
                body: form.value
            })
                .then(() => {
                    isLoading.value = false;
                    console.log('user created')
                    navigateTo({
                        path: '/',
                        query: {
                            isRegistred: true
                        }
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
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <div class="form-error">
                <h1>Пользователь не найден! Зарегистрируйтесь</h1>
                <form @submit.prevent="submitForm">
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
                        <div v-if="errors.errorPasswordLength" class="invalid-feedback">{{ errorCodes.errorPasswordLength }}
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
                        <div v-if="errors.errorPasswordLength" class="invalid-feedback">{{ errorCodes.errorPasswordLength }}
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
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>