<template>
    <div class="card p-4 search-form">
        <form class="row g-3">
            <div class="col-md-3">
                <label for="datalist" class="form-label">Выберите город</label>
                <input class="form-control" list="datalistOptions" id="datalist" placeholder="Например: Ставрополь">
                <datalist id="datalistOptions">
                    <option value="Ставрополь" />
                    <option value="Пятигорск" />
                    <option value="Кисловодск" />
                </datalist>
            </div>
            <div class="col-md-3">
                <label for="start" class="form-label">Заезд</label>
                <button type="button" class="datepicker form-control d-flex justify-content-end align-items-center"
                    id="start">
                    <ClientOnly>
                        <FontAwesomeIcon :icon="['far', 'calendar']" />
                    </ClientOnly>
                </button>
            </div>
            <div class="col-md-3">
                <label for="end" class="form-label">Выезд</label>
                <button type="button" class="datepicker form-control d-flex justify-content-end align-items-center"
                    id="end">
                    <ClientOnly>
                        <FontAwesomeIcon :icon="['far', 'calendar']" />
                    </ClientOnly>
                </button>
            </div>
            <div class="col-md-3">
                <label for="guests" class="form-label">Гости</label>
                <button type="button" class="form-control dropdown-toggle text-end" id="guests" data-bs-toggle="dropdown" data-bs-auto-close="false"
                    aria-expanded="false"></button>
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
                    <li><hr class="dropdown-divider"></li>
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
                    <li><hr class="dropdown-divider"></li>
                    <li class="dropdown-item">
                        <div class="d-grid">
                            <button class="btn btn-primary ">Изменить</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary w-100">Поиск</button>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>