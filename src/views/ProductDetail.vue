<script setup>
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

import data_json from '../assets/data/product_detail.json'
import product_1_1_1 from '../assets/image/product/product1/product_1_1_1.jpg'
import product_1_1_2 from '../assets/image/product/product1/product_1_1_2.jpg'
import product_1_1_3 from '../assets/image/product/product1/product_1_1_3.jpg'
import product_1_1_4 from '../assets/image/product/product1/product_1_1_4.jpg'
import product_1_1_5 from '../assets/image/product/product1/product_1_1_5.jpg'
import product_1_2_1 from '../assets/image/product/product1/product_1_2_1.jpg'
import product_1_3_1 from '../assets/image/product/product1/product_1_3_1.jpg'
import product_1_3_2 from '../assets/image/product/product1/product_1_3_2.jpg'
import product_1_4_1 from '../assets/image/product/product1/product_1_4_1.jpg'
import product_1_5_1 from '../assets/image/product/product1/product_1_5_1.jpg'
import product_1_6_1 from '../assets/image/product/product1/product_1_6_1.jpg'
import product_2_1_1 from '../assets/image/product/product2/product_2_1_1.jpg'
import product_2_1_2 from '../assets/image/product/product2/product_2_1_2.jpg'
import product_2_1_3 from '../assets/image/product/product2/product_2_1_3.jpg'
import product_2_1_4 from '../assets/image/product/product2/product_2_1_4.jpg'
import product_2_1_5 from '../assets/image/product/product2/product_2_1_5.jpg'
import product_2_2_1 from '../assets/image/product/product2/product_2_2_1.jpg'
import product_2_2_2 from '../assets/image/product/product2/product_2_2_2.jpg'
import product_2_2_3 from '../assets/image/product/product2/product_2_2_3.jpg'
import product_2_2_4 from '../assets/image/product/product2/product_2_2_4.jpg'
import product_2_2_5 from '../assets/image/product/product2/product_2_2_5.jpg'
import product_2_3_1 from '../assets/image/product/product2/product_2_3_1.jpg'
import product_2_4_1 from '../assets/image/product/product2/product_2_4_1.jpg'
import product_2_5_1 from '../assets/image/product/product2/product_2_5_1.jpg'
import product_2_5_2 from '../assets/image/product/product2/product_2_5_2.jpg'
import product_2_5_3 from '../assets/image/product/product2/product_2_5_3.jpg'
import product_2_5_4 from '../assets/image/product/product2/product_2_5_4.jpg'
import product_2_5_5 from '../assets/image/product/product2/product_2_5_5.jpg'
import product_2_5_6 from '../assets/image/product/product2/product_2_5_6.jpg'

import { useRoute } from 'vue-router'
import { watch } from 'vue'


const route = useRoute()
var data = data_json[(parseInt(route.params.id_1) - 1)][(parseInt(route.params.id_2) - 1)]

watch(()=> route.params.id_2, (newValue, _)=> {
    data = data_json[(parseInt(route.params.id_1) - 1)][(parseInt(newValue) - 1)]
    window.scrollTo(0, 0)
})
window.scrollTo(0, 0)


function getImage(id) {
    switch (id) {
        case "product_1_1_1":
            return product_1_1_1
        case "product_1_1_2":
            return product_1_1_2
        case "product_1_1_3":
            return product_1_1_3
        case "product_1_1_4":
            return product_1_1_4
        case "product_1_1_5":
            return product_1_1_5
        case "product_1_2_1":
            return product_1_2_1
        case "product_1_3_1":
            return product_1_3_1
        case "product_1_3_2":
            return product_1_3_2
        case "product_1_4_1":
            return product_1_4_1
        case "product_1_5_1":
            return product_1_5_1
        case "product_1_6_1":
            return product_1_6_1
        case "product_2_1_1":
            return product_2_1_1
        case "product_2_1_2":
            return product_2_1_2
        case "product_2_1_3":
            return product_2_1_3
        case "product_2_1_4":
            return product_2_1_4
        case "product_2_1_5":
            return product_2_1_5
        case "product_2_2_1":
            return product_2_2_1
        case "product_2_2_2":
            return product_2_2_2
        case "product_2_2_3":
            return product_2_2_3
        case "product_2_2_4":
            return product_2_2_4
        case "product_2_2_5":
            return product_2_2_5
        case "product_2_3_1":
            return product_2_3_1
        case "product_2_4_1":
            return product_2_4_1
        case "product_2_5_1":
            return product_2_5_1
        case "product_2_5_2":
            return product_2_5_2
        case "product_2_5_3":
            return product_2_5_3
        case "product_2_5_4":
            return product_2_5_4
        case "product_2_5_5":
            return product_2_5_5
        case "product_2_5_6":
            return product_2_5_6
    }
}
</script>

<template>
    <div class="home-view">
        <Header></Header>
        <div class="position-relative">
            <Navbar></Navbar>
            <div class="home-intro">
                <p class="fs-1 fw-bold">Chi tiết sản phẩm</p>
            </div>
        </div>
    </div>

    <div class="product-view">
        <div class="product-content">
            <div class="product-item">
                <!-- <div class="product-img">
                    <img :src="getImage('product_1_1_1')">
                </div> -->
                <div class="content">
                    <p>Tác giả: <span class="primary">Nanovast</span> Ngày: <span class="primary">01-06-2024</span></p>
                    <p class="header-custom fs-4 fw-bold mb-2">{{ data.header }}</p>
                    <template v-for="i in data.content">
                        <div  class="d-flex p-3 pb-0" v-if="i.split(':')[0] == '_img'">
                            <img :src="getImage(i.split(':')[1])">
                        </div>
                        <div v-html="i" v-else></div>
                    </template>
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

.product-view {
    padding: 70px 0;
    display: flex;
    justify-content: center;
    background-color: var(--color_white);
    width: 100vw;

    .product-content {
        @include desktop {
            width: 80%;
        }
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        .product-item {
            @include desktop {
                max-width: 1000px;
            }
            @include mobile {
                width: 100%;
                padding: 0 10px 10px 10px;
            }
            width: 90%;
            padding: 0 15px 15px 15px;
            background-color: #EFF4F8;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            .product-img {
                @include mobile {
                    height: 200px;
                }
                height: 400px;
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
                    padding: 10px 10px;
                    // margin-top: 150px;
                    margin-top: 10px;
                }
                // margin-top: 330px;
                margin-top: 15px;
                height: max-content;
                z-index: 10;
                background-color: var(--color_white);
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
        }
    }
}
</style>