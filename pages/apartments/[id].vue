<script setup>
onMounted(async () => {
    await loadApartment();
})
const date = ref()
const start = ref()
const end = ref()
const adult = ref(1)
const children = ref(0)
const isShowDropdown = ref(false)
const apartment = ref({})

const handleDate = (modelData) => {
    date.value = modelData;
    start.value = parseDate(modelData[0])
    end.value = parseDate(modelData[1])
}

const loadApartment = async () => {
    //мы должны сделать запрос в бд на проверку есть ли такой апартамент по id
    //так же мы должны убедиться что provider === bnovo или provider === fridda
    //если есть такой, то мы загружаем апарты
    //если такого id нет, выкидываем ошибку 404

    //поскольку пока нет базы данных, то мы загружаем апартаменты из bnovo
    const { id } = useRoute().params
    try {
        const apartments = await loadApartmentsBnovo();
        apartment.value = apartments.find((apartment) => apartment.id == id)
        if (!apartment.value) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Page Not Found'
            })
        }
    }
    catch (e) {
        console.log(e)
    }

}

</script>

<template>
    <div class="apartmentId row">
        <div class="col-12 col-md-7">
            <ApartmentCard
            :name="apartment.name"
            :address="apartment.address"
            :city="apartment.city"
            :max-guests="apartment.maxGuests"
            :photos="apartment.photos"
            :rooms-count="Number(apartment.roomsCount)"
            :description="apartment.description"
            :geo-data="apartment.geo_data"
            />
        </div>
        <div class="col-12 col-md-5">
            <div class="card p-4 search-form position-sticky top-0">
                <div class="row mb-3">
                    <div class="col-12">
                        <h2>Информация по бронированию</h2>
                    </div>
                </div>
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="datalist" class="form-label">Выберите город</label>
                        <input class="form-control" list="datalistOptions" id="datalist">
                        <datalist id="datalistOptions">
                            <option value="Ставрополь" />
                            <option value="Пятигорск" />
                            <option value="Кисловодск" />
                        </datalist>
                    </div>
                    <div class="col-md-6">
                        <label for="guests" class="form-label">Гости</label>
                        <div class="position-relative">
                            <button @click="isShowDropdown = !isShowDropdown" type="button"
                                class="form-control text-end" id="guests">
                                <span class="d-block w-100 text-start">
                                    {{ adult }} взрослых, {{ children }} детей
                                </span>
                                <template>
                                    <FontAwesomeIcon class="caret-down-icon position-absolute"
                                        :icon="['fas', 'caret-down']" />
                                </template>
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
                                        <button @click="--adult" :disabled="adult === 0" type="button"
                                            class="btn-counter rounded-circle border-0 fs-4 me-2">-</button>
                                        <span>{{ adult }}</span>
                                        <button @click="++adult" :disabled="adult === 4" type="button"
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
                                        <button @click="--children" :disabled="adult === 0" type="button"
                                            class="btn-counter rounded-circle border-0 fs-4 me-2">-</button>
                                        <span>{{ children }}</span>
                                        <button @click="++children" :disabled="adult === 4" type="button"
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
                    <div class="col-md-6">
                        <label for="start" class="form-label">Заезд</label>
                        <VueDatePicker v-model="date" @update:model-value="handleDate" :auto-position="false" auto-apply
                            id="start" range text-input :enable-time-picker="false" :clearable="false" locale="ru">

                            <template #dp-input>
                                <input type="text" :value="start" class="form-control">
                            </template>

                            <template #input-icon>
                                <FontAwesomeIcon v-if="!start" class="datepicker-calendar-icon"
                                    :icon="['far', 'calendar']" />
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
                                <FontAwesomeIcon v-if="!end" class="datepicker-calendar-icon"
                                    :icon="['far', 'calendar']" />
                            </template>
                        </VueDatePicker>
                    </div>
                </form>
                <div class="col-12 mt-2">
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
                        Нажимая кнопку Забронировать, вы соглашаетесь с условиями <a href="#">пользовательского
                            соглашения</a> и
                        на <a href="#">обработку персональных данных</a>
                    </p>
                    <button class="btn btn-primary w-100">Забронировать</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>