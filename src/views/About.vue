<script setup>
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import Prize from '../components/prize.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

window.scrollTo(0, 0);

</script>

<template>
    <div class="home-view">
        <Header></Header>
        <div class="position-relative">
            <Navbar></Navbar>
            <div class="home-intro">
                <p class="fs-1 fw-bold">Về chúng tôi</p>
            </div>
        </div>
    </div>

    <div class="contact-view">
        <div class="contact-content">
            <div class="left">
                <p class="fs-4 fw-bold">Welcome to Our Gowala Dairy Farm</p>
                <p>Continually productize compelling quality for packed with Elated productize compelling quality for packed with all Elated Them Setting up to website and creating pages.</p>
                <div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fa-regular fa-square-check primary"></i>
                        <p>We are providing different services</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fa-regular fa-square-check primary"></i>
                        <p>We are one of leading company</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fa-regular fa-square-check primary"></i>
                        <p>Profitability is the primary goal of all business</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fa-regular fa-square-check primary"></i>
                        <p>Professional solutions for your business</p>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="img-slot">
                    <img src="../assets/image/about/about1.jpg">
                </div>
            </div>
        </div>
    </div>

    <div class="history-view">
        <div class="history-content">
            <div class="mb-4">
                <p class="fs-2">History</p>
                <p class="fs-1 fw-bold">40 Years Farm Traditions</p>
            </div>
            <div class="history-slide">
                <div class="left">
                    <swiper :slides-per-view="1" :space-between="50" :loop="true"
                        :autoplay="{
                            delay: 2000,
                            disableOnInteraction: false,
                        }" :modules="[Autoplay]" :speed="500">
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history1.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2">Since</p>
                                        <p class="fs-0 fw-bold">1980</p>
                                    </div>
                                    <p>Continually productize compelling quality elated them setting up to website with 
                                        all them imperdiet molestieo continually productize compelling quality for packedq
                                        for  packed with all elated themes setting up to website and creating pages 
                                        compelling quality for packed with all elated themes setting up to website.
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history1.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2">Since</p>
                                        <p class="fs-0 fw-bold">2000</p>
                                    </div>
                                    <p>Continually productize compelling quality elated them setting up to website with 
                                        all them imperdiet molestieo continually productize compelling quality for packedq
                                        for  packed with all elated themes setting up to website and creating pages 
                                        compelling quality for packed with all elated themes setting up to website.
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history1.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2">Since</p>
                                        <p class="fs-0 fw-bold">2020</p>
                                    </div>
                                    <p>Continually productize compelling quality elated them setting up to website with 
                                        all them imperdiet molestieo continually productize compelling quality for packedq
                                        for  packed with all elated themes setting up to website and creating pages 
                                        compelling quality for packed with all elated themes setting up to website.
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="right">
                    <p class="fs-3 fw-bold white w-75">Our Achievement</p>
                    <div class="right-column">
                        <div class="d-flex flex-column align-items-center mb-3">
                            <div class="icon">
                                <img src="../assets/image/icon/icon2.png">
                            </div>
                            <p class="fs-4 white fw-bold">28+</p>
                            <p class="fs-5 white">Customers</p>
                        </div>
                        <div class="d-flex flex-column align-items-center mb-3">
                            <div class="icon">
                                <img src="../assets/image/icon/icon2.png">
                            </div>
                            <p class="fs-4 white fw-bold">1+</p>
                            <p class="fs-5 white">Award</p>
                        </div>
                        <div class="d-flex flex-column align-items-center mb-3">
                            <div class="icon">
                                <img src="../assets/image/icon/icon2.png">
                            </div>
                            <p class="fs-4 white fw-bold">12+</p>
                            <p class="fs-5 white">Volunteer</p>
                        </div>
                        <div class="d-flex flex-column align-items-center mb-3">
                            <div class="icon">
                                <img src="../assets/image/icon/icon2.png">
                            </div>
                            <p class="fs-4 white fw-bold">0+</p>
                            <p class="fs-5 white">Cow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="prize-view">
        <div class="prize-content">
            <Prize></Prize>
        </div>
    </div>
    <!-- ------------------------footer----------------------- -->
    <Footer></Footer>
</template>

<style scoped lang="scss">
@import '../assets/css/mixins.scss';

.home-intro {
    background: url('../assets/background/about.jpg');
    background-size: cover;
    background-position: center;
    padding: 160px 0;
    display: flex;
    justify-content: center;
}

.contact-view {
    padding: 70px 0;
    display: flex;
    justify-content: center;
    background-color: var(--color_white);

    .contact-content {
        width: 85%;
        display: flex;
        @include desktop {
            flex-direction: row;
        }
        flex-direction: column;
        gap: 40px;

        .left {
            background-color: #EFF4F8;
            @include mobile {
                padding: 40px 20px;
            }
            padding: 50px 30px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            @include desktop {
                min-width: 400px;
            }
        }
        .right {
            @include desktop {
                width: 400px;
                min-width: 400px;
                height: 400px;
            }
            width: 100%;
            height: calc(250px + 30vw);
            min-height: 300px;

            .img-slot {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                border-radius: 10px;

                &:hover {
                    img {
                        height: 120%;
                        width: 120%;
                    }
                }
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    transition: all 0.5s ease;
                }
            }
        }
    }
}

.history-view {
    background-color: var(--color_white);
    display: flex;
    justify-content: center;
    padding: 50px 0 70px 0;

    .history-content {
        @include desktop {
            width: 80%;
        }
        width: 90%;

        .history-slide {
            width: 100%;
            display: flex;
            @include desktop {
                flex-direction: row;
            }
            flex-direction: column;

            .left {
                background-color: #EFF4F8;
                @include desktop {
                    width: 65%;
                }
                width: 100%;
                padding: 30px;

                .history-card {
                    .img-slot {
                        width: 100%;
                        @include desktop {
                            height: 270px;
                        }
                        height: 300px;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 10px;
                    }
                    .history-slot {
                        display: flex;
                        gap: 20px;
                        @include mobile {
                            flex-direction: column;
                        }
                    }
                }
            }
            .right {
                @include desktop {
                    width: 35%;
                }
                width: 100%;
                background-color: var(--primary_color);
                padding: 50px 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 30px;
                text-align: center;

                .right-column {
                    column-count: 2;
                    column-gap: 20px;
                }
            }
        }
    }
}

.prize-view {
    display: flex;
    padding: 70px 0;
    justify-content: center;
    background-color: var(--color_white);

    .prize-content {
        width: 90%;
        display: flex;
        flex-direction: column;
        max-width: 800px;
        align-items: center;
        position: relative;
    }
}

</style>