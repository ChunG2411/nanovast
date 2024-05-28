<script setup>
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

import data_json from '../assets/data/blog_detail.json'
import blog1 from '../assets/image/blog/blog1.jpg'
import blog1_1 from '../assets/image/blog/blog1_1.jpg'
import blog1_2 from '../assets/image/blog/blog1_2.jpg'
import blog1_3 from '../assets/image/blog/blog1_3.jpg'
import blog1_4 from '../assets/image/blog/blog1_4.jpg'
import blog1_5 from '../assets/image/blog/blog1_5.jpg'
import blog1_6 from '../assets/image/blog/blog1_6.jpg'
import blog1_7 from '../assets/image/blog/blog1_7.jpg'

import { useRoute } from 'vue-router'


const route = useRoute()
var data = data_json[(parseInt(route.params.id) - 1)]

window.scrollTo(0, 0);

function getImage(id) {
    switch (id) {
        case "1":
            return blog1
        case "blog1_1":
            return blog1_1
        case "blog1_2":
            return blog1_2
        case "blog1_3":
            return blog1_3
        case "blog1_4":
            return blog1_4
        case "blog1_5":
            return blog1_5
        case "blog1_6":
            return blog1_6
        case "blog1_7":
            return blog1_7
    }
}
</script>

<template>
    <div class="home-view">
        <Header></Header>
        <div class="position-relative">
            <Navbar></Navbar>
            <div class="home-intro">
                <p class="fs-1 fw-bold">Chi tiết bài viết</p>
            </div>
        </div>
    </div>

    <div class="blog-view">
        <div class="blog-content">
            <div class="blog-item">
                <div class="blog-img">
                    <img :src="getImage(data.id)">
                </div>
                <div class="content">
                    <p>Admin: <span class="primary">Nanovast</span> Date: <span class="primary">14 April 2018</span></p>
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
                max-width: 1000px;
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
                    width: 120%;
                    height: 110%;
                }
            }
            .blog-img {
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
                    padding: 20px 20px;
                    margin-top: 150px;
                }
                margin-top: 330px;
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