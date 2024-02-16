<script setup>
const props = defineProps({
    formTitle: {
        type: String,
        required: true,
    },
    isProcecced: {
        type: Boolean,
    }
})
const date = ref()
const start = ref()
const end = ref()

const handleDate = (modelData) => {
    date.value = modelData;
    start.value = parseDate(modelData[0])
    end.value = parseDate(modelData[1])
}
</script>

<template>
    <div class="card p-4 search-form h-100" :class="{'position-sticky top-0' : isProcecced}">
        <div class="row mb-3">
            <div class="col-12">
                <h2>{{ props.formTitle }}</h2>
            </div>
        </div>
        <form class="row g-3">
            <div class="col-md-6">
                <label for="datalist" class="form-label">Выберите город</label>
                <input class="form-control" list="datalistOptions" id="datalist" placeholder="Ставрополь">
                <datalist id="datalistOptions">
                    <option value="Ставрополь" />
                    <option value="Пятигорск" />
                    <option value="Кисловодск" />
                </datalist>
            </div>
            <div class="col-md-6">
                <label for="guests" class="form-label">Гости</label>
                <button type="button" class="form-control dropdown-toggle text-end" id="guests" data-bs-toggle="dropdown"
                    data-bs-auto-close="false" aria-expanded="false"></button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item">
                        <div class="row g-3">
                            <div class="col">
                                <h5>Взрослые</h5>
                                <span>От 18 лет</span>
                            </div>
                            <div class="col">
                                <button type="button" class="btn-counter rounded-circle border-0 fs-4 me-2">-</button>
                                <span>33</span>
                                <button type="button" class="btn-counter rounded-circle border-0 fs-4 ms-2">+</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li class="dropdown-item">
                        <div class="row g-3">
                            <div class="col">
                                <h5>Дети</h5>
                                <span>От 0 до 17 лет</span>
                            </div>
                            <div class="col">
                                <button type="button" class="btn-counter rounded-circle border-0 fs-4 me-2">-</button>
                                <span>33</span>
                                <button type="button" class="btn-counter rounded-circle border-0 fs-4 ms-2">+</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li class="dropdown-item">
                        <div class="d-grid">
                            <button class="btn btn-primary ">Изменить</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <label for="start" class="form-label">Заезд</label>
                <VueDatePicker v-model="date" @update:model-value="handleDate" :auto-position="false" auto-apply
                    id="start" range text-input :enable-time-picker="false" :clearable="false" locale="ru">

                    <template #dp-input>
                        <input type="text" :value="start" class="form-control">
                    </template>
                    <template #input-icon>
                        <FontAwesomeIcon v-if="!start" class="datepicker-calendar-icon" :icon="['far', 'calendar']" />
                    </template>
                </VueDatePicker>
            </div>
            <div class="col-md-6">
                <label for="end" class="form-label">Выезд</label>
                <VueDatePicker v-model="date" @update:model-value="handleDate" :auto-position="false" auto-apply
                    id="end" range text-input :enable-time-picker="false" locale="ru" :clearable="false">
                    <template #dp-input>
                        <input type="text" :value="end" class="form-control">
                    </template>
                    <template #input-icon>
                        <FontAwesomeIcon v-if="!end" class="datepicker-calendar-icon" :icon="['far', 'calendar']" />
                    </template>
                </VueDatePicker>
            </div>
            <div v-if="!isProcecced" class="col-12">
                <!--TODO добавить изменение кнопки только в том случае, если данные были получены--> 
                <button v-if="!date" type="submit" class="btn btn-lg btn-primary w-100">Поиск</button>
                <button v-else type="submit" class="btn btn-lg btn-primary w-100">Изменить</button>
            </div>
            <div v-if="isProcecced" class="col-12">
                <h4>Стоимость:</h4>
                <div class="d-flex justify-content-between mb-2">
                    <span class="fw-light">Итого за сутки:</span>
                    <span class="fw-light">2 033₽</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                    <span class="fw-bold text-primary text-uppercase">Итого всего:</span>
                    <span class="fw-bold text-primary text-uppercase">5 033₽</span>
                </div>
                <p class="card-text text-secondary fw-lighter fs-6">
                    Нажимая кнопку Забронировать, вы соглашаетесь с условиями <a href="#">пользовательского соглашения</a> и на <a href="#">обработку персональных данных</a>
                </p>
                <button class="btn btn-primary w-100">Забронировать</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>