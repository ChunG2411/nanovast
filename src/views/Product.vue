<script setup>
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

import data_json from '../assets/data/product.json'
import image_1_1 from '../assets/image/product/card/product_1_1.jpg'
import image_1_2 from '../assets/image/product/card/product_1_2.jpg'
import image_1_3 from '../assets/image/product/card/product_1_3.jpg'
import image_1_4 from '../assets/image/product/card/product_1_4.jpg'
import image_1_5 from '../assets/image/product/card/product_1_5.jpg'
import image_1_6 from '../assets/image/product/card/product_1_6.jpg'
import image_2_1 from '../assets/image/product/card/product_2_1.jpg'
import image_2_2 from '../assets/image/product/card/product_2_2.jpg'
import image_2_3 from '../assets/image/product/card/product_2_3.jpg'
import image_2_4 from '../assets/image/product/card/product_2_4.jpg'
import image_2_5 from '../assets/image/product/card/product_2_5.jpg'
import image_3_1 from '../assets/image/product/card/product_3_1.jpg'
import image_3_2 from '../assets/image/product/card/product_3_2.jpg'

import { useRoute } from 'vue-router'
import { watch } from 'vue'


const route = useRoute()
var data = data_json[(parseInt(route.params.id) - 1)]

watch(()=> route.params.id, (newValue, _)=> {
    data = data_json[(parseInt(newValue) - 1)]
    window.scrollTo(0, 0)
})
window.scrollTo(0, 0)


function getImage(id) {
    switch (route.params.id + '_' + id) {
        case "1_1":
            return image_1_1
        case "1_2":
            return image_1_2
        case "1_3":
            return image_1_3
        case "1_4":
            return image_1_4
        case "1_5":
            return image_1_5
        case "1_6":
            return image_1_6
        case "2_1":
            return image_2_1
        case "2_2":
            return image_2_2
        case "2_3":
            return image_2_3
        case "2_4":
            return image_2_4
        case "2_5":
            return image_2_5
        case "3_1":
            return image_3_1
        case "3_2":
            return image_3_2
    }
}
</script>

<template>
    <div class="home-view">
        <Header></Header>
        <div class="position-relative">
            <Navbar></Navbar>
            <div class="home-intro">
                <p class="fs-1 fw-bold">Sản phẩm</p>
            </div>
        </div>
    </div>

    <div class="blog-view">
        <div class="blog-content">
            <div class="blog-item" v-for="i in data">
                <div class="blog-img">
                    <img :src="getImage(i.id)">
                </div>
                <div class="content">
                    <p>Tác giả: <span class="primary">Nanovast</span> Ngày: <span class="primary">01-06-2024</span></p>
                    <p class="header-custom fs-4 fw-bold">{{ i.header }}</p>
                    <p class="body-custom">{{ i.content }}</p>
                    <router-link class="button-custom mt-3" :to="`/product/${route.params.id}/` + i.id">Đọc thêm</router-link>
                </div>
            </div>
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

.blog-view {
    padding: 70px 0;
    display: flex;
    justify-content: center;
    background-color: var(--color_white);
    width: 100vw;

    .blog-content {
        @include desktop {
            width: 80%;
        }
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        .blog-item {
            @include desktop {
                width: 700px;
            }
            @include mobile {
                width: 100%;
            }
            width: 90%;
            padding: 0 15px 15px 15px;
            background-color: #EFF4F8;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            &:hover {
                .blog-img img {
                    width: 110%;
                    height: 110%;
                }
                .header-custom {
                    cursor: pointer;
                    color: var(--primary_color);
                }
            }

            .blog-img {
                @include mobile {
                    height: 200px;
                }
                height: 320px;
                width: 100%;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                z-index: 5;

                img {
                    transition: all 0.5s ease;
                }
            }
            .content {
                padding: 30px 40px;
                @include mobile {
                    padding: 20px 20px;
                    margin-top: 150px;
                }
                margin-top: 260px;
                height: max-content;
                z-index: 10;
                background-color: var(--color_white);
                display: flex;
                flex-direction: column;
                gap: 10px;

                .body-custom {
                    max-height: 100px;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>