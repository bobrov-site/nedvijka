<script setup>
const form = ref({
    email: '',
})

const isButtonDisabled = ref(false);
// const isEmailExist = ref(null);
const { signIn } = useAuth();
const checkEmail = async($event) => {
    isButtonDisabled.value = true;
    try {
        await signIn("credentials", form.value);
        isButtonDisabled.value = false;
    }
    catch(e) {
        console.log(e, 'error')
        isButtonDisabled.value = false;
    }
    
}
</script>
<template>
    <div class="modal fade" id="authModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Чтобы воспользоваться всеми возможностями сервиса нужно войти или зарегистрироваться</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="checkEmail($event)">
                        <div class="mb-3">
                            <label for="email" class="form-label">Адрес электронной
                                почты</label>
                            <input v-model="form.email" type="email" class="form-control" id="email">
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