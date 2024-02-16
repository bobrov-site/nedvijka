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
                <tr>
                    <th class="bg-danger text-white" scope="row">1</th>
                    <td class="bg-danger text-white">Иван Иванов</td>
                    <td class="bg-danger text-white">example@example.com</td>
                    <td class="bg-danger text-white">02.02.2024 16:54</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Петр Петров</td>
                    <td>example@example.com</td>
                    <td>02.03.2024 16:56</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})
</script>

<style lang="scss" scoped>

</style>