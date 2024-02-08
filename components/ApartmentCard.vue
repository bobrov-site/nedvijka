<template>
    <div class="card">
        <div class="row">
            <div class="col-12" :class="{ 'col-md-6': isVerticalLayout}">
                <!-- TODO для каждого слайдера свой айди -->
                <div id="sliderApartmentCard" class="sliderApartmentCard carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#sliderApartmentCard" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#sliderApartmentCard" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#sliderApartmentCard" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <NuxtImg src="/images/apartment_1.jpg" alt="Квартира" class="img-slider card-img-top"
                                sizes="md:300px" />
                        </div>
                        <div class="carousel-item">
                            <NuxtImg src="/images/apartment_2.jpg" alt="Квартира" class="img-slider card-img-top"
                                sizes="md:300px" />
                        </div>
                        <div class="carousel-item">
                            <NuxtImg src="/images/apartment_3.jpg" alt="Квартира" class="img-slider card-img-top"
                                sizes="md:300px" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" :class="{ 'col-md-6 d-flex align-items-center': isVerticalLayout,}">
                <div class="card-body">
                    <h5 class="card-title">Название квартиры</h5>
                    <!-- кол-во человек, колво-кроватей, квадратура -->
                    <div class="d-flex mb-2">
                        <span class="badge rounded-pill text-bg-light me-2">2 гостя</span>
                        <span class="badge rounded-pill text-bg-light me-2">1 кровать</span>
                        <span class="badge rounded-pill text-bg-light me-2">32 кв.м</span>
                    </div>
                    <p class="card-text mb-2">Ставрополь, Рогожникова 7</p>
                    <!-- <p class="card-text fw-bold text-primary mb-2">2 099₽ <span class="fw-light">за сутки</span></p> -->
                    <!-- <p class="card-text">Всего 4 198₽</p> -->
                    <a href="#" class="btn btn-primary">2 099₽ за сутки</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    apartment: {
        type: Object
    },
    isVerticalLayout: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped></style>