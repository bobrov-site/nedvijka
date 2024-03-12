<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID пользователя</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Email</th>
                    <th scope="col">Дата и время регистрации</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" key="user._id">
                    <th :class="{'bg-danger text-white': user.role === 'admin'}" class="bg-danger text-white" scope="row">{{ user._id }}</th>
                    <td :class="{'bg-danger text-white': user.role === 'admin'}">{{ user.name ? user.name : 'Не указано' }}</td>
                    <td :class="{'bg-danger text-white': user.role === 'admin'}">{{ user.email }}</td>
                    <td :class="{'bg-danger text-white': user.role === 'admin'}">{{ user.registerDate ? user.registerDate : 'Не указано' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
onMounted(async() => {
    users.value = await $fetch('/api/users/getUsers');
})
const users = ref([]);
definePageMeta({
    layout: 'admin'
})
</script>

<style lang="scss" scoped>

</style>