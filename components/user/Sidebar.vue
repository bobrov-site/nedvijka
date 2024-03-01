<script setup>
const { user } = useUserStore();
const getUserName = () => {
    const secondName = user.secondName ? user.secondName : 'Бобров'
    const firstName = user.firstName ? user.firstName : 'Даниил'
    const middleName = user.middleName ? user.middleName : 'Русланович'
    return `${firstName} ${secondName} ${middleName}`
}
</script>
<template>
    <div class="users-sidebar">
        <div class="default-avatar bg-primary text-white fw-bold fs-1 rounded-circle d-flex justify-content-center align-items-center mb-2">
            ИИ
        </div>
        <div class="d-flex justify-content-between mb-2">
            <span class="fw-light">Имя:</span>
            <span class="fw-bold">
                {{ getUserName() }}
            </span>
        </div>
        <div class="d-flex justify-content-between mb-2">
            <span class="fw-light">Дата регистрации:</span>
            <span class="fw-bold">02.02.2024</span>
        </div>
        <button class="btn btn-outline-primary" type="button">Изменить</button>
    </div>
</template>

<style lang="scss" scoped></style>