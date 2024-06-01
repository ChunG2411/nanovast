<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="custom ' + className +
                '" style="width:40px; height:3px; border-radius:0; background-color:#5d9913"></span>';
        }
    }
</script>

<template>
    <div class="slide">
        <swiper :slides-per-view="1" :space-between="-1" :loop="true" :pagination="pagination"
            :autoplay="{ delay: 4000, disableOnInteraction: false,}"
            :modules="[Autoplay, Pagination]" :speed="700">
            <swiper-slide>
                <div class="slide-card">
                    <div class="image-slot">
                        <div class="cover-image"></div>
                        <img src="../assets/image/slide/slide1.jpg">
                    </div>
                    <div class="content-slot">
                        <p class="white fs-0 fw-bold content-head">Máy lọc nước đạt quy chuẩn quốc gia</p>
                        <p class="white fs-4 mt-3 content-body">Máy lọc nước Nanovast tích hợp các vật liệu và công nghệ tiên tiến nhất của các nhà khoa học Việt nam và các sản phẩm nổi tiếng trên thế giới trong một máy lọc - Công nghệ Nano</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide-card">
                    <div class="image-slot">
                        <div class="cover-image"></div>
                        <img src="../assets/image/slide/slide2.jpg">
                    </div>
                    <div class="content-slot">
                        <p class="white fs-0 fw-bold content-head">Gọn, nhẹ, tiện dụng, đảm bảo an toàn</p>
                        <p class="white fs-4 mt-3 content-body">Máy lọc nước Nanovast gọn, nhẹ, tiện dụng, đảm bảo an toàn về nước ăn uống trong một phổ rộng các nguồn nước. Với khoảng 80% các vật liệu lọc tiên tiến được các nhà khoa học nghiên cứu, sản xuất trong nước</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide-card">
                    <div class="image-slot">
                        <div class="cover-image"></div>
                        <img src="../assets/image/slide/slide3.jpg">
                    </div>
                    <div class="content-slot">
                        <p class="white fs-0 fw-bold content-head">Công nghệ diệt khuẩn bằng nano bạc</p>
                        <p class="white fs-4 mt-3 content-body">Có khả năng loại bỏ toàn bộ các vi khuẩn có hại cho con người bằng cách sử dụng công nghệ diệt khuẩn bằng nano bạc. Do đó nước sau lọc có thể uống trực tiếp mà không cần đun sôi</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide-card">
                    <div class="image-slot">
                        <div class="cover-image"></div>
                        <img src="../assets/image/slide/slide4.jpg">
                    </div>
                    <div class="content-slot">
                        <p class="white fs-0 fw-bold content-head">Công suất lọc trung bình</p>
                        <p class="white fs-4 mt-3 content-body">Cung cấp ngay lập tức 10 lít nước sạch đủ để một gia đình 6 người chuẩn bị một bữa ăn gia đình</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>                
    </div>
</template>

<style scoped lang="scss">
@import '../assets/css/mixins.scss';

.slide {
    width: 100%;
    height: 700px;

    .slide-card {
        width: 100%;
        @include mobile {
            height: 600px;
        }
        height: 700px;
        position: relative;

        .image-slot {
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            .cover-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
            }
        }
        .content-slot {
            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            z-index: 10;
            top: 10%;
            left: 0;
            text-align: center;

            .content-head {
                @include desktop {
                    width: 70%;
                }
                @include mobile {
                    font-size: 35px !important;
                }
                width: 90%;
            }
            .content-body {
                @include desktop {
                    width: 70%;
                }
                @include mobile {
                    font-size: 20px !important;
                }
                width: 90%;
            }
        }
    }
    .swiper-slide-active {
        .content-head {
            animation-name: show-head;
            animation-duration: 0.5s;
            margin-bottom: 0;
            @keyframes show-head {
                from {
                    margin-bottom: 100%;
                }
                to {
                    margin-bottom: 0;
                }
            }
        }
        .content-body {
            animation-name: show-content;
            animation-duration: 0.5s;
            margin-top: 0;
            @keyframes show-content {
                from {
                    margin-top: 100%;
                }
                to {
                    margin-top: 0;
                }
            }
        }
    }
}

</style>