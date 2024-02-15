<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

definePageMeta({
    layout: 'admin'
})
</script>

<template>
    <AdminModal/>
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
                    <th scope="col">Действия</th>
                    <th scope="col">Дата и время публикации</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Название квартиры</td>
                    <td>г. Ставрополь, Рогожникова 7</td>
                    <td>Иван Иванов</td>
                    <td>1</td>
                    <td>
                        <button class="btn btn-outline-primary" data-bs-toggle="modal"
                            data-bs-target="#apartmentModal">Подробнее</button>
                    </td>
                    <td>
                        <div class="d-flex">
                            <button type="button" class="btn btn-outline-success me-4" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Опубликовать квартиру">
                                <FontAwesomeIcon :icon="['fas', 'check']" />
                            </button>
                            <button type="button" class="btn btn-outline-primary me-4" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Редактировать квартиру">
                                <FontAwesomeIcon :icon="['fas', 'edit']" />
                            </button>
                            <button type="button" class="btn btn-outline-danger" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Удалить квартиру из базы">
                                <FontAwesomeIcon :icon="['fas', 'trash-can']" />
                            </button>
                        </div>
                    </td>
                    <td>
                        02.02.2024 16:54
                        <span class="badge text-bg-danger">Не опубликован</span>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Название квартиры</td>
                    <td>г.Ставрополь, Рогожникова 11</td>
                    <td>Петр Петрович</td>
                    <td>2</td>
                    <td>
                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                            data-bs-target="#apartmentModal">Подробнее</button>
                    </td>
                    <td>
                        <div class="d-flex">
                            <button type="button" class="btn btn-outline-secondary me-4" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Добавить квартиру в архив">
                                <FontAwesomeIcon :icon="['fas', 'box-archive']" />
                            </button>
                            <button type="button" class="btn btn-outline-primary me-4" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Редактировать квартиру">
                                <FontAwesomeIcon :icon="['fas', 'edit']" />
                            </button>
                            <button type="button" class="btn btn-outline-danger" data-bs-toggle="tooltip"
                                data-bs-placement="top" data-bs-title="Удалить квартиру из базы">
                                <FontAwesomeIcon :icon="['fas', 'trash-can']" />
                            </button>
                        </div>
                    </td>
                    <td>
                        02.02.2024 16:54
                        <span class="badge text-bg-success">Опубликован</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss" scoped></style>