<script setup>
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

import data_json from '../assets/data/blog.json'
import image_1 from '../assets/image/blog/blog1.jpg'


window.scrollTo(0, 0);

const data = data_json

function getImage(id) {
    if (id=="1") {
        return image_1
    }
    else if (id=="2") {
        return image_1
    }
    else if (id=="3") {
        return image_1
    }
    else if (id=="4") {
        return image_1
    }
    else if (id=="5") {
        return image_1
    }
}
</script>

<template>
    <div class="home-view">
        <Header></Header>
        <div class="position-relative">
            <Navbar></Navbar>
            <div class="home-intro">
                <p class="fs-1 fw-bold">Bài viết</p>
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
                    <p>Tác giả: <span class="primary">Nanovast</span> Ngày: <span class="primary">01-04-2024</span></p>
                    <p class="header-custom fs-4 fw-bold">{{ i.header }}</p>
                    <p class="body-custom">{{ i.content }}</p>
                    <router-link class="button-custom mt-3" :to="'/blog/' + i.id">Đọc thêm</router-link>
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