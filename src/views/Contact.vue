<script setup>
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

window.scrollTo(0, 0);

function Send() {
    alert("Đã gửi")
}

</script>

<template>
    <div class="home-view">
        <Header></Header>
        <div class="position-relative">
            <Navbar></Navbar>
            <div class="home-intro">
                <p class="fs-1 fw-bold">Liên hệ với chúng tôi</p>
            </div>
        </div>
    </div>

    <div class="contact-view">
        <div class="contact-content">
            <div class="left">
                <p class="fs-4 fw-bold">Ý kiến phản hồi</p>
                <div class="input-group-custom">
                    <input type="text" placeholder="Tên của bạn">
                    <input type="text" placeholder="Địa chỉ email">
                </div>
                <div class="input-group-custom">
                    <input type="text" placeholder="Số điện thoại">
                    <input type="text" placeholder="Chủ đề">
                </div>
                <textarea rows="5" cols="" placeholder="Nhập nội dung"></textarea>
                <button @click="Send">Gửi</button>
            </div>
            <div class="right">
                <p class="fs-4 fw-bold">Địa chỉ liên hệ</p>
                <div class="d-flex align-items-center gap-3">
                    <div class="icon">
                        <i class="fas fa-map-marker-alt white"></i>
                    </div>
                    <div class="d-flex flex-column gap-1">
                        <p>Viện Hóa học - Viện Hàn Lâm Khoa học và công nghệ Việt Nam</p>
                        <p>Phòng Hóa Vô cơ - Hóa lý</p>
                        <p>Địa chỉ: Nhà A18, số 18 Hoàng Quốc Việt, Cầu Giấy, Hà Nội</p>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <div class="icon">
                        <i class="fa-solid fa-phone white"></i>
                    </div>
                    <div class="d-flex gap-3">
                        <div class="d-flex flex-column gap-1">
                            <p>TS. KSCC. Phạm Văn Lâm</p>
                            <p>Ths. NCV. Quản Thị Thu Trang</p>
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <p>Mobile: 0904219227</p>
                            <p>Mobile: 0368830617</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="map-veiw">
        <div class="map-content">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4442.407820634436!2d105.7991401147972!3d21.047230422222402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab007e6d0cff%3A0xd9428f6b1696e246!2zVmnhu4duIEjDoG4gbMOibSBLSCZDTiBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1717210142904!5m2!1svi!2s"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
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
    width: 100vw;

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
        gap: 30px;

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
                min-width: 600px;
            }

            .input-group-custom {
                display: flex;
                @include mobile {
                    flex-direction: column;
                }
                flex-direction: row;
                gap: 20px;

                input {
                    border: 0;
                    padding: 10px;
                    width: 100%;
                }
            }
            textarea {
                border: 0;
                padding: 10px;
            }
            button {
                border: 0;
                background-color: var(--primary_color);
                color: white;
            }
        }
        .right {
            border: 1px solid var(--border_color);
            padding: 35px 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            height: max-content;
            max-width: 600px;

            .icon {
                background-color: var(--primary_color);
                width: 35px;
                height: 35px;
                min-width: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
            }
        }
    }
}

.map-veiw {
    background-color: var(--color_white);
    display: flex;
    justify-content: center;
    padding: 50px 0 70px 0;
    
    .map-content {
        @include desktop {
            width: 70%;
            min-height: 500px;
        }
        width: 90%;
        height: 400px;
        max-width: 900px;
        border: 1px solid var(--border_color);
    }
}
</style>