<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Название</th>
                    <th scope="col">Адрес</th>
                    <th scope="col">Пользователь</th>
                    <th scope="col">ID Пользователя</th>
                    <th scope="col">Подробнее</th>
                    <th scope="col">Опубликован</th>
                    <th scope="col">Дата и время публикации</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Название квартиры</td>
                    <td>Рогожникова 7</td>
                    <td>Иван Иванов</td>
                    <td>1</td>
                    <td>
                        <button class="btn btn-outline-primary">Подробнее</button>
                    </td>
                    <td>
                        <button class="w-100 btn btn-outline-primary">Действие</button>
                        <span class="badge text-bg-danger">Не опубликован</span>
                    </td>
                    <td>
                        02.02.2024 16:54
                    </td>
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

<style lang="scss" scoped></style>