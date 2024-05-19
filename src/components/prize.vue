<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

</script>

<template>
    <div class="w-100">
        <swiper :slides-per-view="4" :space-between="50" :loop="true"
            :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
            }" :modules="[Autoplay]" :speed="1000">
            <swiper-slide>
                <div class="icon-slot">
                    <img src="../assets/price1.png">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon-slot">
                    <img src="../assets/price1.png">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon-slot">
                    <img src="../assets/price1.png">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon-slot">
                    <img src="../assets/price1.png">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon-slot">
                    <img src="../assets/price1.png">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon-slot">
                    <img src="../assets/price1.png">
                </div>
            </swiper-slide>
        </swiper>                
    </div>
</template>

<style scoped lang="scss">
@import '../assets/css/mixins.scss';

.icon-slot {
    @include mobile {
        width: 90px;
        height: 90px;
    }
    width: 150px;
    height: 150px;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-slot img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>