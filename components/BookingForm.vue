<script setup>
onMounted(async () => {
    setInitialState();
    await checkBookingForm();
})

const searchApartments = useSearchApartmentsStore()
const user = useUserStore()
const isShowDropdown = ref(false)
const queries = useRoute().query
const process = ref(null);
const errorsCodes = getErrorsCodes();
const error = ref(null)
const isDisabledButton = ref(false)
const setInitialState = () => {
    if (Object.keys(queries).length !== 0) {
        searchApartments.adult = queries.adult ? Number(queries.adult) : 1
        searchApartments.children = queries.children ? Number(queries.children) : 0
        searchApartments.setInitialDate(queries.start, queries.end)
    }
    else {
        searchApartments.setInitialDate();
    }
}

const checkBookingForm = async () => {
    process.value = 'loading'
    isDisabledButton.value = true;
    await searchApartments.loadSearchApartments(parseDate(searchApartments.date[0]), parseDate(searchApartments.date[1]))
    const checkedApartment = searchApartments.apartments.find((apartment) => searchApartments.currentApartment.id === apartment.id)
    if (!checkedApartment) {
        process.value = 'error'
        error.value = errorsCodes['errorBookingNotFound']
    }
    else {
        process.value = 'loaded'
    }
    isDisabledButton.value = false;
    navigateTo({
        path: '/apartments/' + searchApartments.currentApartment.id,
        query: {
            adult: searchApartments.adult,
            children: searchApartments.children,
            start: parseDate(searchApartments.date[0]),
            end: parseDate(searchApartments.date[1])
        }
        })
}

const handleDate = (modelData) => {
    searchApartments.date[0] = modelData[0];
    searchApartments.date[1] = modelData[1];
    process.value = 'changed'
}

const increment = (person) => {
    if (person === 'adult') {
        ++searchApartments.adult
    }
    if (person === 'children') {
        ++searchApartments.children
    }
    process.value = 'changed'
}

const decrement = (person) => {
    if (person === 'adult') {
        --searchApartments.adult
    }
    if (person === 'children') {
        --searchApartments.children
    }
    process.value = 'changed'
}

const submitBooking = () => {
    isDisabledButton.value = true;
    if (!user.auth.isAuth) {
        process.value = 'error'
        error.value = errorsCodes['errorBookingNotAuth']
        isDisabledButton.value = false;
        return
    }
    isDisabledButton.value = false;
    console.log('hello')
    
}
</script>

<template>
    <div class="card p-4 search-form position-sticky top-0">
        <div v-if="process === 'error'" class="row mb-2">
            <div class="col-12">
                <div class="alert alert-danger d-flex justify-content-between" role="alert">
                    <div>{{ error }}</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                <h3>Информация по бронированию</h3>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-12">
                <form @submit.prevent="checkBookingForm" class="row g-3">
                    <div class="col-md-6">
                        <label for="start" class="form-label">Заезд</label>
                        <ClientOnly>
                            <VueDatePicker v-model="searchApartments.date" @update:model-value="handleDate"
                                :auto-position="false" auto-apply id="start" range text-input
                                :enable-time-picker="false" :clearable="false" :min-date="new Date()" locale="ru">
                                <template #dp-input>
                                    <input type="text" :value="parseDate(searchApartments.date[0])"
                                        class="form-control">
                                </template>
                                <template #input-icon>
                                    <FontAwesomeIcon v-if="!searchApartments.date[0]" class="datepicker-calendar-icon"
                                        :icon="['far', 'calendar']" />
                                </template>
                            </VueDatePicker>
                        </ClientOnly>
                    </div>
                    <div class="col-md-6">
                        <label for="end" class="form-label">Выезд</label>
                        <ClientOnly>
                            <VueDatePicker v-model="searchApartments.date" @update:model-value="handleDate"
                                :auto-position="false" auto-apply id="end" range text-input :enable-time-picker="false"
                                locale="ru" :clearable="false" :min-date="new Date()">
                                <template #dp-input>
                                    <input type="text" :value="parseDate(searchApartments.date[1])"
                                        class="form-control">
                                </template>
                                <template #input-icon>
                                    <FontAwesomeIcon v-if="!searchApartments.date[1]" class="datepicker-calendar-icon"
                                        :icon="['far', 'calendar']" />
                                </template>
                            </VueDatePicker>
                        </ClientOnly>
                    </div>
                    <div class="col-12">
                        <label for="guests" class="form-label">Гости</label>
                        <div class="position-relative">
                            <button @click="isShowDropdown = !isShowDropdown" type="button"
                                class="form-control text-end" id="guests">
                                <span class="d-block w-100 text-start">
                                    {{ searchApartments.adult }} взрослых, {{ searchApartments.children }} детей
                                </span>
                                <ClientOnly>
                                    <FontAwesomeIcon class="caret-down-icon position-absolute"
                                        :icon="['fas', 'caret-down']" />
                                </ClientOnly>

                            </button>
                        </div>
                        <ul :class="{ 'show': isShowDropdown }" class="counter-menu dropdown-menu">
                            <li class="dropdown-item">
                                <div class="row g-3">
                                    <div class="col">
                                        <h5>Взрослые</h5>
                                        <span>От 18 лет</span>
                                    </div>
                                    <div class="col">
                                        <button @click="decrement('adult')" :disabled="searchApartments.adult === 1"
                                            type="button"
                                            class="btn-counter rounded-circle border-0 fs-4 me-2">-</button>
                                        <span>{{ searchApartments.adult }}</span>
                                        <button @click="increment('adult');" :disabled="searchApartments.adult === 4"
                                            type="button"
                                            class="btn-counter rounded-circle border-0 fs-4 ms-2">+</button>
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
                                        <button @click="decrement('children')"
                                            :disabled="searchApartments.children === 0" type="button"
                                            class="btn-counter rounded-circle border-0 fs-4 me-2">-</button>
                                        <span>{{ searchApartments.children }}</span>
                                        <button @click="increment('children')"
                                            :disabled="searchApartments.children === 4" type="button"
                                            class="btn-counter rounded-circle border-0 fs-4 ms-2">+</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li class="dropdown-item">
                                <div class="d-grid">
                                    <button @click="isShowDropdown = false" type="button"
                                        class="btn btn-primary ">Сохранить</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div v-if="process === 'error' || process === 'changed'" class="col-12">
                        <button class="btn btn-lg btn-primary w-100" :disabled="isDisabledButton">Проверить</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-if="process === 'loading'" class="row">
            <div class="col-12">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-if="process === 'loaded' && process !== 'changed'" class="row">
            <div class="col-12 mt-2">
                <h4>Стоимость:</h4>
                <div class="d-flex justify-content-between mb-2">
                    <span class="fw-bold text-primary text-uppercase">Итого всего:</span>
                    <span class="fw-bold text-primary text-uppercase">5 033₽</span>
                </div>
                <p class="card-text text-secondary fw-lighter fs-6">
                    Нажимая кнопку Забронировать, вы соглашаетесь с условиями <a href="#">пользовательского
                        соглашения</a> и
                    на <a href="#">обработку персональных данных</a>
                </p>
                <button @click="submitBooking" type="button" :disabled="isDisabledButton"
                    class="btn btn-primary w-100">Забронировать</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>