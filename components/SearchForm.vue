<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

onMounted(() => {
    setFormInitialData();
})
const props = defineProps({
    formTitle: {
        type: String,
        required: true,
    },
})
const isShowDropdown = ref(false)
const isDisabledButton = ref(false);
const errors = ref({
    errorCityNotOnList: false,
})
const citiesList = ref([
    'Ставрополь',
    'Пятигорск',
    'Кисловодск'
])
const queries = useRoute().query
const searchApartments = useSearchApartmentsStore()
const { errorCityNotOnList } = getErrorsCodes();
const setFormInitialData = () => {
    if (Object.keys(queries).length === 0) {
        searchApartments.setInitialDate();
        return;
    }
    searchApartments.adult = queries.adult ? Number(queries.adult) : 1
    searchApartments.children = queries.children ? Number(queries.children) : 0
    searchApartments.city = queries.city ? queries.city : ''
    searchApartments.setInitialDate(queries.start, queries.end)
}

const handleDate = (modelData) => {
    searchApartments.date[0] = modelData[0];
    searchApartments.date[1] = modelData[1];
}
const resetErrors = () => {
    Object.keys(errors.value).forEach((key) => errors.value[key] = false)
}

const submitForm = async () => {
    resetErrors();
    isDisabledButton.value = true;
    const isCityOnList = citiesList.value.some((city) => searchApartments.city === city)
    if (!isCityOnList) {
        isDisabledButton.value = false;
        errors.value.errorCityNotOnList = true
        return
    }
    try {
        useSearchApartmentsStore().process = 'loading';
        await useSearchApartmentsStore().getGeoDataCity(searchApartments.city);
        await useSearchApartmentsStore().loadSearchApartments(parseDate(searchApartments.date[0]), parseDate(searchApartments.date[1]));
        await useSearchApartmentsStore().getGeoDataFromApartments();
        useSearchApartmentsStore().process = 'loaded';
        navigateTo({
            path: '/search',
            query: {
                city: searchApartments.city,
                adult: searchApartments.adult,
                children: searchApartments.children,
                start: parseDate(searchApartments.date[0]),
                end: parseDate(searchApartments.date[1])
            }
        })
        
    }
    catch(e) {
        console.log(e)
    }
    finally {
        isDisabledButton.value = false;
    }
}
</script>

<template>
    <div class="row mb-3">
        <div class="col-12">
            <h2>{{ props.formTitle }}</h2>
        </div>
    </div>
    <form @submit.prevent="submitForm" class="row g-3">
        <div class="col-md-6">
            <label for="datalist" class="form-label">Выберите город</label>
            <input v-model="searchApartments.city" class="form-control" :class="{ 'is-invalid': errors.errorCityNotOnList }"
                list="datalistOptions" id="datalist" required>
            <datalist id="datalistOptions">
                <option v-for="(city, index) in citiesList" :key="index" :value="city" />
            </datalist>
            <div class="invalid-feedback">{{ errorCityNotOnList }}</div>
        </div>
        <div class="col-md-6">
            <label for="guests" class="form-label">Гости</label>
            <div class="position-relative">
                <button @click="isShowDropdown = !isShowDropdown" type="button" class="form-control text-end"
                    id="guests">
                    <span class="d-block w-100 text-start">
                        {{ searchApartments.adult }} взрослых, {{ searchApartments.children }} детей
                    </span>
                    <ClientOnly>
                        <FontAwesomeIcon class="caret-down-icon position-absolute" :icon="['fas', 'caret-down']" />
                    </ClientOnly>
                </button>
            </div>

            <ul :class="{ 'show': isShowDropdown }" class="dropdown-menu">
                <li class="dropdown-item">
                    <div class="row g-3">
                        <div class="col">
                            <h5>Взрослые</h5>
                            <span>От 18 лет</span>
                        </div>
                        <div class="col">
                            <button @click="--searchApartments.adult" :disabled="searchApartments.adult === 0" type="button"
                                class="btn-counter rounded-circle border-0 fs-4 me-2">-</button>
                            <span>{{ searchApartments.adult }}</span>
                            <button @click="++searchApartments.adult" :disabled="searchApartments.adult === 4" type="button"
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
                            <button @click="--searchApartments.children" :disabled="searchApartments.children === 0" type="button"
                                class="btn-counter rounded-circle border-0 fs-4 me-2">-</button>
                            <span>{{ searchApartments.children }}</span>
                            <button @click="++searchApartments.children" :disabled="searchApartments.children === 4" type="button"
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
            <ClientOnly>
                <VueDatePicker v-model="searchApartments.date" @update:model-value="handleDate" :auto-position="false" auto-apply
                    id="start" range text-input :enable-time-picker="false" :clearable="false" locale="ru"
                    :min-date="new Date()">

                    <template #dp-input>
                        <input type="text" :value="parseDate(searchApartments.date[0])" class="form-control" required>
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
                <VueDatePicker v-model="searchApartments.date" @update:model-value="handleDate" :auto-position="false" auto-apply
                    id="end" range text-input :enable-time-picker="false" locale="ru" :clearable="false"
                    :min-date="new Date()">

                    <template #dp-input>
                        <input type="text" :value="parseDate(searchApartments.date[1])" class="form-control" required>
                    </template>

                    <template #input-icon>
                        <FontAwesomeIcon v-if="!searchApartments.date[1]" class="datepicker-calendar-icon"
                            :icon="['far', 'calendar']" />
                    </template>
                </VueDatePicker>
            </ClientOnly>

        </div>
        <div class="col-12">
            <button :disabled="isDisabledButton" type="submit" class="btn btn-lg btn-primary w-100">Поиск</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>