<script setup>
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
// import Prize from '../components/prize.vue'

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
                <p class="fs-4 fw-bold">Phòng Hóa vô cơ - Hóa lý</p>
                <div>
                    <div class="d-flex gap-2">
                        <i class="fa-regular fa-square-check primary mt-1"></i>
                        <p>Nghiên cứu tổng hợp các chất, các vật liệu vô cơ tiên tiến có tính năng đặc biệt ứng dụng trong lĩnh vực: môi trường, năng lượng, y sinh học, dược học.</p>
                    </div>
                    <div class="d-flex gap-2 mt-2">
                        <i class="fa-regular fa-square-check primary mt-1"></i>
                        <p>Nghiên cứu các quá trình hóa lý trong điện hóa.</p>
                    </div>
                    <div class="d-flex gap-2 mt-2">
                        <i class="fa-regular fa-square-check primary mt-1"></i>
                        <p>Nghiên cứu ứng dụng các phương pháp điện hóa trong phân tích môi trường, y học và dược phẩm.</p>
                    </div>
                    <div class="d-flex gap-2 mt-2">
                        <i class="fa-regular fa-square-check primary mt-1"></i>
                        <p>Hợp tác quốc tế trong lĩnh vực hoá vô cơ - hóa lý.</p>
                    </div>
                    <div class="d-flex gap-2 mt-2">
                        <i class="fa-regular fa-square-check primary mt-1"></i>
                        <p>Tham gia đào tạo sau đại học trong lĩnh vực hoá vô cơ - hóa lý.</p>
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
                <p class="fs-3 fw-bold">Thành tựu nghiên cứu triển khai</p>
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
                                        <p class="fs-2 fw-bold">2008</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2011</p>
                                    </div>
                                    <p>Nghiên cứu chế tạo và triển khai sản xuất bột canxi hydroxyapatite kích thước nano
                                        dùng làm thực phẩm  chức năng và nguyên liệu bào chế thuốc chống loãng xương.
                                        Chương trình Hóa dược - Bộ Công thương, đã nghiệm thu (2008 - 2011).
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history2.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2008</p>
                                        <!-- <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2011</p> -->
                                    </div>
                                    <p>Vật liệu hấp phụ asen trên nền oxit sắt từ. Nhiệm vụ do Chủ tịch Viện KH&CN VN giao trực tiếp,
                                        đã nghiệm thu (2008).
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history3.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2009</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2010</p>
                                    </div>
                                    <p>Hoàn thiện công nghệ và chế tạo thiết bị xử lý nước nhiễm asen sử dụng vật liệu
                                        hiệu năng cao NC-F20 cho vùng nông thôn Hà Nam. Dự án cấp Viện Hàn lâm KH&CN VN,
                                        chương trình nước sạch và VSMT nông thôn, đã nghiệm thu (2009 - 2010).
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history4.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2012</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2013</p>
                                    </div>
                                    <p>Triển khai công nghệ NANOVAST xử lý asen và các kim loại nặng trong nước ăn uống cho
                                        cụm dân cư hoặc trường học tại tỉnh Hà Nam. Dự án cấp Viện Hàn lâm KH&CN VN,
                                        chương trình nước sạch và VSMT nông thôn, đã nghiệm thu (2012 - 2013).
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history5.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2012</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2013</p>
                                    </div>
                                    <p>Xây dựng công nghệ xử lý hydro sulfua trên vật liệu xúc tác mới ứng dụng làm
                                        sạch khí biogas. Đề tài cấp Viện Hàn lâm KH&CN VN (2012 - 2013).
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history7.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2013</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2014</p>
                                    </div>
                                    <p>Nghiên cứu quy trình tổng hợp và xác định các đặc trưng của vật liệu phức hợp sắt - polymaltose
                                        (Iron polymaltose complex - IPC) hướng đến ứng dụng trong thực phẩm chức năng bổ sung sắt và
                                        thuốc chống thiếu máu. Đề tài cấp Viện Hàn lâm KH&CN VN (2013 - 2014).
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history6.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2014</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2015</p>
                                    </div>
                                    <p>Nghiên cứu sản xuất Polymaltose từ tinh bột và tạo các phức hợp sắt - Polymaltose
                                        (IPC) và Canxi hydroxyapatite- Polymaltose (HAP) ứng dụng trong dược phẩm.
                                        Đề tài thuộc chương trình KC 07 (2014 - 2015).
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history8.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2014</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2016</p>
                                    </div>
                                    <p>Nghiên cứu sản xuất hydroxyapatite từ vỏ sò ở quy mô pilot và đề xuất
                                        các hướng ứng dụng. Đề tài cấp tỉnh Thừa Thiên Huế. (2014 - 2016).
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history9.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2018</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2019</p>
                                    </div>
                                    <p>"Nghiên cứu chế tạo vật liệu hấp phụ Amoni và phốt phát tiền tiến, ứng dụng xử lý nước ăn uống ở quy mô vừa và nhỏ".
                                        Đề tài độc lập cấp viện Hàn lâm Khoa học và Công nghệ Việt Nam
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history10.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2020</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2021</p>
                                    </div>
                                    <p>“Nghiên cứu phân hủy thuốc nhuộm trong nước, sử dụng Plasma không nhiệt kết hợp với xúc tác Feo/bentonite”.
                                        Đề tài hướng môi trường và năng lượng, thuộc 8 hướng ưu tiên cấp viện Hàn lâm Khoa học và Công nghệ Việt Nam.
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history11.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2021</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2022</p>
                                    </div>
                                    <p>Dự án: “Sản xuất vật liệu hấp phụ và lõi lọc amoni sử dụng loại bỏ amoni trong nước ăn uống”. 
                                        Dự án phát triển sản phẩm thương mại - cấp viện Hàn lâm Khoa học và Công nghệ Việt Nam
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="history-card">
                                <div class="img-slot">
                                    <img src="../assets/image/about/history12.jpg">
                                </div>
                                <div class="history-slot">
                                    <div class="d-flex flex-column align-items-center">
                                        <p class="fs-2 fw-bold">2023</p>
                                        <p class="fs-4 fw-bold">-</p>
                                        <p class="fs-2 fw-bold">2024</p>
                                    </div>
                                    <p>“Tổng hợp bột nano selen ổn định trong mạng polysaccharide, định hướng tạo sản phẩm hỗ trợ điều trị bệnh tiểu đường”. 
                                        Đề tài hướng KHCN ưu tiên: Khoa học vật liệu - Cấp viện Hàn lâm Khoa học và Công nghệ Việt Nam.
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="right">
                    <p class="fs-2 fw-bold white w-75">Về chúng tôi</p>
                    <div class="right-column">
                        <div class="d-flex flex-column align-items-center mb-3">
                            <div class="icon">
                                <img src="../assets/image/icon/icon2.png">
                            </div>
                            <p class="fs-4 white fw-bold">10</p>
                            <p class="fs-5 white">Thành viên</p>
                        </div>
                        <div class="d-flex flex-column align-items-center mb-3">
                            <div class="icon" style="width: 40px; height: 40px;">
                                <img src="../assets/image/icon/icon5.png">
                            </div>
                            <p class="fs-4 white fw-bold">8+</p>
                            <p class="fs-5 white">Dự án</p>
                        </div>
                        <div class="d-flex flex-column align-items-center mb-3">
                            <div class="icon">
                                <img src="../assets/image/icon/icon3.png">
                            </div>
                            <p class="fs-4 white fw-bold">6+</p>
                            <p class="fs-5 white">Thành tựu</p>
                        </div>
                        <div class="d-flex flex-column align-items-center mb-3">
                            <div class="icon" style="width: 40px; height: 40px;">
                                <img src="../assets/image/icon/icon4.png">
                            </div>
                            <p class="fs-4 white fw-bold">10+</p>
                            <p class="fs-5 white">Năm</p>
                        </div>
                    </div>
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

.contact-view {
    padding: 70px 0;
    display: flex;
    justify-content: center;
    background-color: var(--color_white);

    .contact-content {
        @include mobile {
            width: 95%;
        }
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
        width: 95%;

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
                        align-items: center;
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

                    .icon {
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }
    }
}

</style>