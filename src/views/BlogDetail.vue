<script setup>
import Header from '../components/header.vue'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

window.scrollTo(0, 0);

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
                    <img src="../assets/image/blog/blog1.jpg">
                </div>
                <div class="content">
                    <p>Admin: <span class="primary">Alex Smith</span> Date: <span class="primary">14 April 2018</span></p>
                    <p class="header-custom fs-4 fw-bold">Ectain World Strain Blog Tegc Actuaze Wide World Strateic</p>
                    <p>
                        Qnteate Supple Chan Though Marke Poston Bestng Practces Chan Throuh Marke
                        Postonn Supple Chan Though Marke Poston Bestng Practces Chaine Postonn is Bestn Practces eractve
                        Fashion Fashion Economically And Sound Qources For asdas a asdsdsa dasd.
                    </p>
                    <p>
                        Qnteate Supple Chan Though Marke Poston Bestng Practces Chan Throuh Marke
                        Postonn Supple Chan Though Marke Poston Bestng Practces Chaine Postonn is Bestn Practces eractve
                        Fashion Fashion Economically And Sound Qources For asdas a asdsdsa dasd.
                    </p>
                    <p>
                        Qnteate Supple Chan Though Marke Poston Bestng Practces Chan Throuh Marke
                        Postonn Supple Chan Though Marke Poston Bestng Practces Chaine Postonn is Bestn Practces eractve
                        Fashion Fashion Economically And Sound Qources For asdas a asdsdsa dasd.
                    </p>
                    <p>
                        Qnteate Supple Chan Though Marke Poston Bestng Practces Chan Throuh Marke
                        Postonn Supple Chan Though Marke Poston Bestng Practces Chaine Postonn is Bestn Practces eractve
                        Fashion Fashion Economically And Sound Qources For asdas a asdsdsa dasd.
                    </p>
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
        width: 90%;
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
                    padding: 20px 30px;
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