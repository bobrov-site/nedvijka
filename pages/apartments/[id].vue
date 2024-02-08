<template>
    <div class="apartmentId row mt-4">
        <div class="col-12 col-md-6">
            <div class="card">
                <div class="card-body">
                    <h1>Название квартиры</h1>
                    <Swiper :navigation="true" :modules="[SwiperNavigation, SwiperThumbs, SwiperFreeMode, SwiperZoom]"
                    :thumbs="{ swiper: thumbsSwiper }" class="swiper-slider" :autoHeight="true" :zoom="true"
                    >
                        <SwiperSlide>
                            <div class="swiper-zoom-container">
                                <NuxtImg src="/images/apartment_1.jpg" alt="Квартира" class="img-fluid rounded"
                                sizes="md:600px" />
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="swiper-zoom-container">
                                <NuxtImg src="/images/apartment_2.jpg" alt="Квартира" class="img-fluid rounded"
                                sizes="md:600px" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="swiper-zoom-container">
                                <NuxtImg src="/images/apartment_3.jpg" alt="Квартира" class="img-fluid rounded"
                                sizes="md:600px" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
                        :watchSlidesProgress="true" class="swiper-slider-thumbs mt-2" :autoHeight="true">
                        <SwiperSlide>
                            <NuxtImg src="/images/apartment_1.jpg" alt="Квартира" class="img-slider-thumb img-fluid w-100 rounded border-2"
                                sizes="md:300px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NuxtImg src="/images/apartment_2.jpg" alt="Квартира" class="img-slider-thumb img-fluid w-100 rounded"
                                sizes="md:300px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NuxtImg src="/images/apartment_3.jpg" alt="Квартира" class="img-slider-thumb img-fluid w-100 rounded"
                                sizes="md:300px" />
                        </SwiperSlide>        
                    </Swiper>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6"></div>
    </div>
</template>

<script setup>
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
};
</script>

<style lang="scss" scoped></style>