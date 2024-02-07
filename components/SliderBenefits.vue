<template>
    <div id="sliderBenefits" class="carousel slide carousel-dark" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#sliderBenefits" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#sliderBenefits" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#sliderBenefits" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
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
            <div class="carousel-item">
                <div class="card">
                    <NuxtImg src="/images/support.jpg" alt="Круглосуточная поддержка" class="card-img-top" sizes="md:300px"/>
                    <div class="card-body">
                        <h4 class="card-title">Преимущества сервиса</h4>
                        <p class="card-text">
                            Еще одно преимущество
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="card">
                    <NuxtImg src="/images/support.jpg" alt="Круглосуточная поддержка" class="card-img-top" sizes="md:300px"/>
                    <div class="card-body">
                        <h4 class="card-title">Преимущества сервиса</h4>
                        <p class="card-text">
                            И еще одно преимущество
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
