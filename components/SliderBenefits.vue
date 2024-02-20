<template>
    <div id="sliderBenefits" ref="sliderContainer" class="carousel slide carousel-dark">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#sliderBenefits" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#sliderBenefits" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#sliderBenefits" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="i in 3" :key="i" class="carousel-item active">
                <div class="card">
                    <NuxtImg src="/images/support.jpg" alt="Круглосуточная поддержка" class="card-img-top" sizes="md:300px"/>
                    <div class="card-body">
                        <h4 class="card-title">Преимущества сервиса</h4>
                        <p class="card-text">
                            Круглосуточная поддержка
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-split position-absolute w-100 h-100 top-0 d-flex">
            <div @mouseover="toggleSlide(index)" v-for="(col, index) in 3" :key="index" class="col h-100"></div>
        </div>
    </div>
</template>

<script setup>
const { $bootstrap } = useNuxtApp();
const sliderContainer = ref(null)
const carousel = ref(null)
onMounted(() => {
    carousel.value = new $bootstrap.Carousel(sliderContainer.value)
})

const toggleSlide = (index) => {
    carousel.value.to(index);
}
</script>

<style lang="scss" scoped></style>
