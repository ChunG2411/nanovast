<script setup>
function scrollTop() {
    window.scrollTo(0, 0);
}

$(window).scroll(()=>{
    if ($(window).scrollTop() > 700) {
        document.querySelector('.scroll-button').style.opacity = 1
    }
    else {
        document.querySelector('.scroll-button').style.opacity = 0
    }
})

</script>

<template>
    <div class="footer-view">
        <div class="footer-content">
            <div class="footer-left">
                <div class="logo mb-5">
                    <img src="../assets/logo.png">
                </div>
                <div>
                    <p>Máy lọc nước cho ăn uống đạt Quy chuẩn kỹ thuật quốc gia về chất lượng nước ăn uống (National technical regulation on drinking water quality), viết tắt: QCVN 01:2009/BYT</p>
                </div>
            </div>
            <div>
                <p class="fs-4 fw-bold mb-4">Liên hệ với chúng tôi</p>
                <div class="d-flex gap-3 align-items-center">
                    <i class="fas fa-map-marker-alt primary"></i>
                    <div class="d-flex flex-column gap-1">
                        <p>Viện Hóa học - Viện Hàn Lâm Khoa học và công nghệ Việt Nam</p>
                        <p>Phòng Hóa Vô cơ - Hóa lý</p>
                        <p>Địa chỉ: Nhà A18, số 18 Hoàng Quốc Việt, Cầu Giấy, Hà Nội</p>
                    </div>
                </div>
                <div class="d-flex gap-3 align-items-center mt-4">
                    <i class="fa-solid fa-phone primary"></i>
                    <div class="d-flex gap-3">
                        <div class="d-flex flex-column gap-1">
                            <p>TS. KSCC. Phạm Văn Lâm</p>
                            <p>Ths. NCV. Quản Thị Thu Trang</p>
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <p>Mobile: 0904219227</p>
                            <p>Mobile: 0368830616</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="w-100 text-center mt-4">
            <p>© 2024 Created By ChunG</p>
        </div> -->
    </div>
    <div class="scroll-button" @click="scrollTop">
        <i class="fa-solid fa-chevron-up white fs-5"></i>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/css/mixins.scss';

.footer-view {
    width: 100%;
    @include mobile {
        padding: 50px 35px;
    }
    padding: 70px;
    background: url('../assets/background/home_gallery.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer-content {
        @include mobile {
            flex-direction: column;
            gap: 20px;
        }
        display: flex;
        justify-content: space-between;
        max-width: 1000px;

        .footer-left{
            @include mobile {
                width: 100%;
            }
            width: 40%;
            .logo {
                width: calc(100px + 10vw);
            }
        }
        
    }
}

.scroll-button {
    position: fixed;
    @include mobile {
        width: 35px;
        height: 35px;
    }
    bottom: 15px;
    right: 15px;
    z-index: 90;
    padding: 10px;
    background-color: var(--primary_color);
    border-radius: 5px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
}
.scroll-button:hover {
    @include mobile {
        width: 40px;
        height: 40px;
    }
    width: 60px;
    height: 60px;
}
</style>