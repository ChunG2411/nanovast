<script setup>
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

window.scrollTo(0, 0)
</script>

<template>
    <div class="home-view">
        <Header></Header>
        <div class="position-relative">
            <Navbar></Navbar>
            <div class="home-intro">
                <p class="fs-1 fw-bold">Lĩnh vực nghiên cứu</p>
            </div>
        </div>
    </div>

    <div class="infor-view">
        <div class="infor-content">
            <div class="infor-item">
                <div class="content">
                    <p>Chế biến vật liệu vô cơ từ các nguồn khoáng thiên nhiên: quặng thiếc, quặng titan, quặng đồng, đá quý….</p>
                    <div class="d-flex">
                        <div  class="d-flex p-3">
                            <img src="../assets/image/information/image1.png">
                        </div>
                        <div  class="d-flex p-3">
                            <img src="../assets/image/information/image2.png">
                        </div>
                    </div>
                    <p>Tổng hợp, ứng dụng vật liệu chuyển hoá năng lượng (vật liệu tích trữ hydro LaNi5 làm điện cực cho ắc quy NiMH, vật liệu spinel LiMn2O4 làm điện cực cho ắc quy Li-ion, vật liệu chuyển pha trữ nhiệt cho các ứng dụng sử dụng năng lượng mặt trời, vật liệu làm điện môi rắn cho pin nhiên liệu).</p>
                    <p>Tổng hợp vật liệu ứng dụng trong y sinh và dược học: canxi hydroxyapatite (HA) dạng bột kích thước nanomet dùng làm thực phẩm bổ sung canxi và thuốc chống loãng xương, HA dạng khối xốp ứng dụng trong phẫu thuật chỉnh hình, phức chất sắt polymaltose (IPC) định hướng dùng làm thuốc chống thiếu máu,… </p>
                    <div class="d-flex">
                        <div  class="d-flex p-3">
                            <img src="../assets/image/information/image3.png">
                        </div>
                        <div  class="d-flex p-3">
                            <img src="../assets/image/information/image4.png">
                        </div>
                    </div>
                    <div class="d-flex">
                        <div  class="d-flex p-3">
                            <img src="../assets/image/information/image5.png">
                        </div>
                        <div  class="d-flex p-3">
                            <img src="../assets/image/information/image6.png">
                        </div>
                    </div>
                    <p>Tổng hợp vật liệu vô cơ mịn và siêu mịn (bạc kim loại, oxit mangan, oxit sắt, oxit magie... kích thước nano, vật liệu nanocomposit trên chất mang bentonit…), định hướng ứng dụng trong xử lý môi trường.</p>
                    <div class="d-flex">
                        <div  class="d-flex p-3">
                            <img src="../assets/image/information/image7.png">
                        </div>
                        <div  class="d-flex p-3">
                            <img src="../assets/image/information/image8.png">
                        </div>
                    </div>
                    <div class="d-flex">
                        <div  class="d-flex p-3">
                            <img src="../assets/image/information/image9.png">
                        </div>
                        <div  class="d-flex p-3">
                            <img src="../assets/image/information/image10.png">
                        </div>
                    </div>
                    <p>Nghiên cứu công nghệ xử lý nước cấp, nước thải, xử lý khí... sử dụng các vật liệu tự chế tạo.</p>
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

.infor-view {
    padding: 70px 0;
    display: flex;
    justify-content: center;
    background-color: var(--color_white);
    width: 100vw;

    .infor-content {
        @include desktop {
            width: 80%;
        }
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        .infor-item {
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

            .content {
                padding: 30px 40px;
                @include mobile {
                    padding: 10px 10px;
                    margin-top: 10px;
                }
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