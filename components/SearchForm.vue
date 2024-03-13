<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

onMounted(() => {
    setFormInitialData();
})
const queries = useRoute().query
const setFormInitialData = () => {
    if (Object.keys(queries).length === 0) {
        form.value = {
            city: '',
            adult: adult.value,
            children: children.value,
            date: {
                start: '',
                end: ''
            }
        }
        return;
    }
    form.value = {
        city: queries.city ? queries.city : '',
        adult: queries.adult ? Number(queries.adult) : 1,
        children: queries.children ? Number(queries.children) : 0,
        date: {
            start: queries.start ? queries.start : '',
            end: queries.end ? queries.end : ''
        }
    }
}
const props = defineProps({
    formTitle: {
        type: String,
        required: true,
    },
})
const adult = ref(1)
const children = ref(0)
const isShowDropdown = ref(false)
const isDisabledButton = ref(false);
const { errorCityNotOnList } = getErrorsCodes();
const errors = ref({
    errorCityNotOnList: false,
})

const handleDate = (modelData) => {
    form.value.date.start = parseDate(modelData[0]);
    form.value.date.end = parseDate(modelData[1]);
}

const form = ref({
    city: '',
    adult: 1,
    children: 0,
    date: {
        start: '',
        end: ''
    }
})
const resetErrors = () => {
    Object.keys(errors.value).forEach((key) => errors.value[key] = false)
}

const submitForm = async () => {
    resetErrors();
    isDisabledButton.value = true;
    const isCityOnList = citiesList.value.some((city) => form.value.city === city)
    if (!isCityOnList) {
        isDisabledButton.value = false;
        errors.value.errorCityNotOnList = true
        return
    }
    try {
        useSearchApartmentsStore().adult = Number(form.value.adult);
        useSearchApartmentsStore().children = Number(form.value.children);
        useSearchApartmentsStore().process = 'loading';
        await useSearchApartmentsStore().getGeoDataCity(form.value.city);
        await useSearchApartmentsStore().loadSearchApartments(form.value.date.start, form.value.date.end);
        await useSearchApartmentsStore().getGeoDataFromApartments();
        useSearchApartmentsStore().process = 'loaded';
        navigateTo({
            path: '/search',
            query: {
                city: form.value.city,
                adult: form.value.adult,
                children: form.value.children,
                start: form.value.date.start,
                end: form.value.date.end
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

const citiesList = ref([
    'Ставрополь',
    'Пятигорск',
    'Кисловодск'
])
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
            <input v-model="form.city" class="form-control" :class="{ 'is-invalid': errors.errorCityNotOnList }"
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
                        {{ form.adult }} взрослых, {{ form.children }} детей
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
                            <button @click="--form.adult" :disabled="form.adult === 0" type="button"
                                class="btn-counter rounded-circle border-0 fs-4 me-2">-</button>
                            <span>{{ form.adult }}</span>
                            <button @click="++form.adult" :disabled="form.adult === 4" type="button"
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
                            <button @click="--form.children" :disabled="form.children === 0" type="button"
                                class="btn-counter rounded-circle border-0 fs-4 me-2">-</button>
                            <span>{{ form.children }}</span>
                            <button @click="++form.children" :disabled="form.children === 4" type="button"
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
                <VueDatePicker v-model="form.date" @update:model-value="handleDate" :auto-position="false" auto-apply
                    id="start" range text-input :enable-time-picker="false" :clearable="false" locale="ru"
                    :min-date="new Date()">

                    <template #dp-input>
                        <input type="text" :value="form.date.start" class="form-control" required>
                    </template>

                    <template #input-icon>
                        <FontAwesomeIcon v-if="!form.date.start" class="datepicker-calendar-icon"
                            :icon="['far', 'calendar']" />
                    </template>
                </VueDatePicker>
            </ClientOnly>

        </div>
        <div class="col-md-6">
            <label for="end" class="form-label">Выезд</label>
            <ClientOnly>
                <VueDatePicker v-model="form.date" @update:model-value="handleDate" :auto-position="false" auto-apply
                    id="end" range text-input :enable-time-picker="false" locale="ru" :clearable="false"
                    :min-date="new Date()">

                    <template #dp-input>
                        <input type="text" :value="form.date.end" class="form-control" required>
                    </template>

                    <template #input-icon>
                        <FontAwesomeIcon v-if="!form.date.end" class="datepicker-calendar-icon"
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