<script setup>
import Slider from '../components/slide.vue'
// import Prize from '../components/prize.vue'
import Footer from '../components/footer.vue'
import Preveiw from '../components/preveiw.vue'
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import blog1 from '../assets/image/blog/blog1.jpg'

import { reactive } from 'vue'


const show_image = reactive({
    status: false,
    src: ''
})

function showImage(src) {
    show_image.status = true
    show_image.src = src
}

window.scrollTo(0, 0);

const getImgUrl = (name) => {
  return new URL(`../assets/image/gallery/${name}.jpg`, import.meta.url).href
}

</script>

<template>
    <div class="home-view">
        <Header></Header>
        <div class="position-relative">
            <Navbar></Navbar>
            <Slider></Slider>
        </div>
    </div>

    <!-- ---------------------------------infor view---------------------------------- -->
    <div class="infor-view" id="infor">
        <div class="infor-content">
            <div class="gallery">
                <img src="../assets/image/about/about1.jpg">
                <div class="gallery-tag">
                    <p class="fs-4 fw-bold white">10 +</p>
                    <p class="fs-4 fw-bold white">Năm</p>
                    <p class="fs-4 fw-bold white">Nghiên cứu</p>
                </div>
            </div>
            <div class="infor-right">
                <div>
                    <p class="fs-3 fw-bold">Về chúng tôi</p>
                    <p>Phòng Hoá vô cơ - Hoá lý, Viện Hóa học - Viện Hàn lâm Khoa học và Công nghệ Việt Nam</p>
                </div>
                <div class="infor-list">
                    <div>
                        <div class="icon mb-1">
                            <img src="../assets/image/icon/icon1.jpg">
                        </div>
                        <div>
                            <p class="fs-5 fw-bold">Nhiệm vụ</p>
                            <p>Nghiên cứu tổng hợp các chất, các vật liệu vô cơ tiên tiến có tính năng đặc biệt</p>
                        </div>
                    </div>
                    <div>
                        <div class="icon mb-1">
                            <img src="../assets/image/icon/icon1.jpg">
                        </div>
                        <div>
                            <p class="fs-5 fw-bold">Lĩnh vực nghiên cứu</p>
                            <p>Nghiên cứu chế tạo các vật liệu ứng dụng trong y sinh và dược học, các vật liệu chuyển hoá và tích trữ năng lượng, các vật liệu tiền tiến và công nghệ tương ứng trong xử lý môi trường</p>
                        </div>
                    </div>
                    <div>
                        <div class="icon mb-1">
                            <img src="../assets/image/icon/icon1.jpg">
                        </div>
                        <div>
                            <p class="fs-5 fw-bold">Thành tựu</p>
                            <p>Nhiều đề tài dự án nghiên cứu đã được nghiệm thu. Nhiều sản phẩm đã được ứng dụng trong thực tế</p>
                        </div>
                    </div>
                    <div>
                        <div class="icon mb-1">
                            <img src="../assets/image/icon/icon1.jpg">
                        </div>
                        <div>
                            <p class="fs-5 fw-bold">Triển khai thực tế</p>
                            <p>Đã đưa nhiều sản phẩm ra thị trường với kết quả tốt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ------------------------------------member view--------------------------------- -->
    <!-- <div class="member-view" id="member">
        <div class="member-content">
            <div class="text-center w-50">
                <p class="fs-3 fw-bold">Thành viên</p>
                <p class="">Conveniently customize proactives into everaged interfaces without Globally</p>
            </div>
            <div class="member-list">
                <div class="member-item">
                    <div class="member-img">
                        <img src="../assets/image/member/member1.jpg">
                    </div>
                    <p class="fs-4 fw-bold mt-3">Alex smith</p>
                    <p>Co Founder</p>
                    <div class="d-flex gap-2 align-items-center p-1">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-behance"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-vimeo-v"></i>
                    </div>
                </div>
                <div class="member-item">
                    <div class="member-img">
                        <img src="../assets/image/member/member1.jpg">
                    </div>
                    <p class="fs-4 fw-bold mt-3">Alex smith</p>
                    <p>Co Founder</p>
                    <div class="d-flex gap-2 align-items-center p-1">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-behance"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-vimeo-v"></i>
                    </div>
                </div>
                <div class="member-item">
                    <div class="member-img">
                        <img src="../assets/image/member/member1.jpg">
                    </div>
                    <p class="fs-4 fw-bold mt-3">Alex smith</p>
                    <p>Co Founder</p>
                    <div class="d-flex gap-2 align-items-center p-1">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-behance"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-vimeo-v"></i>
                    </div>
                </div>
                <div class="member-item">
                    <div class="member-img">
                        <img src="../assets/image/member/member1.jpg">
                    </div>
                    <p class="fs-4 fw-bold mt-3">Alex smith</p>
                    <p>Co Founder</p>
                    <div class="d-flex gap-2 align-items-center p-1">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-behance"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-vimeo-v"></i>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- ---------------------------------gallery view-------------------------------- -->
    <div class="gallery-view" id="gallery">
        <div class="gallery-content">
            <div class="text-center w-50">
                <p class="fs-3 fw-bold">Bộ sưu tập</p>
            </div>
            <div class="gallery-list">
                <div class="gallery-item" v-for="i in 10">
                    <div class="gallery-img">
                        <img :src="getImgUrl(`gallery${i}`)">
                    </div>
                    <div class="gallery-link">
                        <div class="icon" @click="showImage(getImgUrl(`gallery${i}`))">
                            <i class="fa-solid fa-link fs-5 primary"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ------------------------------------blog view--------------------------------- -->
    <!-- <div class="blog-view">
        <div class="blog-content">
            <div class="text-center w-50">
                <p class="fs-3 fw-bold">Bài viết của chúng tôi</p>
            </div>
            <div class="blog-list">
                <div class="blog-item">
                    <div class="blog-img">
                        <img :src="blog1">
                    </div>
                    <div class="p-4">
                        <div class="d-flex gap-3 mb-3">
                            <div class="d-flex align-items-center gap-2">
                                <i class="fas fa-calendar-alt primary"></i>
                                <p class="primary">01-06-2024</p>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <i class="far fa-user primary"></i>
                                <p class="primary">Nanovast</p>
                            </div>
                        </div>
                        <div>
                            <p class="fs-5 fw-bold mb-2">Nước nhiễm sắt là gì? Cách nhận biết và phương pháp xử lý nước bị nhiễm sắt.</p>
                            <p>Ở Việt Nam, vẫn còn rất nhiều nơi sử dụng nguồn nước giếng khoan bị nhiễm sắt nặng, gây ...
                            </p>
                        </div>
                        <div class="mt-4">
                            <router-link class="button-custom" to="/blog/1">Đọc thêm</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- ------------------------------------prize view--------------------------------- -->
    <!-- <div class="prize-view">
        <div class="prize-content">
            <Prize></Prize>
        </div>
    </div> -->

    <!-- ------------------------------------footer view--------------------------------- -->
    <Footer></Footer>

    <!-- ------------------------components --------------------------->
    <Preveiw :src="show_image.src" @close="show_image.status = false" v-if="show_image.status"></Preveiw>
</template>


<style scoped lang="scss">
@import '../assets/css/mixins.scss';

.infor-view {
    background: url('../assets/background/home_infor.jpg');
    background-size: cover;
    background-position: center;
    padding: 70px 0;
    display: flex;
    justify-content: center;

    .infor-content {
        width: 80%;
        display: flex;
        @include desktop {
            flex-direction: row;
        }
        flex-direction: column;
        align-items: center;
        gap: 40px;
        height: max-content;
        min-width: 950px; 

        .gallery {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            @include mobile {
                width: 300px;
                min-width: 300px;
                height: 370px;
            }
            width: 500px;
            min-width: 500px;
            height: 550px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .gallery-tag {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: var(--primary_color);
            padding: 10px 20px;
            width: max-content;
        }
        .infor-right {
            @include desktop {
                width: auto;
            }
            @include mobile {
                width: 330px;
                max-width: 330px;
            }
            width: 70% !important;

            .infor-list {
                width: 100%;
                margin-top: 30px;
                height: 400px;
                overflow-y: scroll;
                display: flex;
                flex-direction: column;
                gap: 15px;
                padding-right: 30px;

                &::-webkit-scrollbar {
                    width: 7px;
                }
                &::-webkit-scrollbar-thumb {
                    background: var(--primary_color);
                    border-radius: 10px;
                }
                .icon {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
}

.member-view {
    display: flex;
    padding: 70px 0;
    justify-content: center;
    background-color: var(--color_white);

    .member-content {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;

        .member-list {
            display: flex;
            gap: 40px;
            flex-wrap: wrap;
            max-height: 900px;
            overflow-y: auto;
            justify-content: center;
            padding: 20px;

            &::-webkit-scrollbar {
                width: 7px;
            }
            &::-webkit-scrollbar-thumb {
                background: transparent;
                border-radius: 10px;
            }
            &:hover {
                &::-webkit-scrollbar-thumb {
                    background: var(--primary_color);
                }
            }
            .member-item {
                background-color: var(--color_white);
                box-shadow: 0 0 10px rgba(202, 202, 202, 0.8);
                padding: 30px 40px;
                display: flex;
                flex-direction: column;
                gap: 5px;
                align-items: center;

                &:hover {
                    .member-img {
                        img {
                            height: 110%;
                            width: 110%;
                        }
                    }
                    p {
                        color: var(--primary_color);
                    }
                }
                .member-img {
                    overflow: hidden;
                    width: 200px;
                    aspect-ratio: 1/1;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: all 0.3s ease;
                    }
                }
            }
        }
    }
}

.gallery-view {
    display: flex;
    padding: 70px 0;
    justify-content: center;
    background: url('../assets/background/home_gallery.jpg');
    background-size: cover;
    background-position: center;

    .gallery-content {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;

        .gallery-list {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;

            .gallery-item {
                position: relative;
                width: 230px;
                height: 230px;
                overflow: hidden;
                border-radius: 10px;

                .gallery-img {
                    width: 100%;
                    aspect-ratio: 1/1;
                    display: flex;
                    justify-content: center;

                    img {
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                }
                &:hover {
                    .gallery-link {
                        width: 100%;
                        margin-left: 0;

                        .icon {
                            width: 50px;
                            height: 50px;
                            display: grid;
                            place-items: center;
                            cursor: pointer;
                        }
                    }
                }
                .gallery-link {
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin-left: -100px;
                    width: 0;
                    height: 100%;
                    display: grid;
                    place-items: center;
                    background-image: linear-gradient(to right, rgba(0, 255, 76, 0.5), rgba(0, 255, 238, 0.5));
                    transition: all 0.3s;

                    .icon {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background-color: var(--color_white);
                    }
                }
            }
        }
    }
}

.blog-view {
    display: flex;
    padding: 70px 0;
    justify-content: center;
    background-color: var(--color_white);

    .blog-content {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        max-width: 1500px;
        align-items: center;

        .blog-list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;

            .blog-item {
                background-color: var(--color_white);
                box-shadow: 0 0 10px rgba(202, 202, 202, 0.8);
                display: flex;
                flex-direction: column;
                gap: 5px;
                align-items: center;
                @include mobile {
                    width: 320px;
                }
                width: 370px;
                overflow: hidden;

                &:hover {
                    .blog-img {
                        width: 110%;
                    }
                }
                .blog-img {
                    width: 100%;
                    height: 220px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
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