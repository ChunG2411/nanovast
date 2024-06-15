<script setup>
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

import data_json from '../assets/data/product_detail.json'

import { useRoute } from 'vue-router'
import { watch } from 'vue'


const route = useRoute()
var data = data_json[(parseInt(route.params.id_1) - 1)][(parseInt(route.params.id_2) - 1)]

watch(()=> route.params.id_2, (newValue, _)=> {
    data = data_json[(parseInt(route.params.id_1) - 1)][(parseInt(newValue) - 1)]
    window.scrollTo(0, 0)
})
window.scrollTo(0, 0)

const getImgUrl = (name) => {
  return new URL(`../assets/image/product/${name}.jpg`, import.meta.url).href
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
                    <p>Tác giả: <span class="primary">Nanovast</span> Ngày: <span class="primary">01-04-2024</span></p>
                    <p class="header-custom fs-4 fw-bold mb-2">{{ data.header }}</p>
                    <template v-for="i in data.content">
                        <div class="content-img" v-if="i.split(':')[0] == '_img'">
                            <img :src="getImgUrl(i.split(':')[1])">
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

                .content-img {
                    justify-content: center;
                    display: flex;

                    img {
                        width: 70%;
                        @include mobile {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>