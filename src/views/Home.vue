<script setup>
import slider from '../components/slider.vue'


</script>

<template>
    <div class="home-view">
        <div class="header">
            <div class="d-flex gap-5">
                <div class="d-flex align-items-center gap-2">
                    <i class="far fa-envelope white"></i>
                    <p class="white">Gowala45@gmail.com</p>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <i class="fas fa-phone-volume white"></i>
                    <p class="white">+88 130 589 745 6987</p>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <i class="far fa-clock white"></i>
                    <p class="white">Mon - Fri 09:00 - 18:00</p>
                </div>
            </div>
            <div class="d-flex align-items-center gap-3">
                <i class="fab fa-twitter white"></i>
                <i class="fab fa-behance white"></i>
                <i class="fab fa-instagram white"></i>
                <i class="fab fa-vimeo-v white"></i>
                <i class="fab fa-linkedin-in white"></i>
            </div>
        </div>
        <div class="position-relative">
            <div class="nav">
                <div class="nav-card">
                    <div class="logo">
                        <img src="../assets/logo.png">
                    </div>
                    <div class="d-flex gap-5">
                        <div class="nav-item">
                            <div class="item-top">
                                <h5>Home</h5>
                            </div>
                        </div>
                        <div class="nav-item">
                            <div class="item-top">
                                <h5>Pages</h5>
                                <i class="fa-solid fa-chevron-down mt-1"></i>
                            </div>
                            <div class="nav-item-drop">
                                <h5>Pages 1</h5>
                                <h5>Pages 2</h5>
                                <h5 style="border: 0;">Page 3</h5>
                            </div>
                        </div>
                        <div class="nav-item">
                            <div class="item-top">
                                <h5>Product</h5>
                                <i class="fa-solid fa-chevron-down mt-1"></i>
                            </div>
                            <div class="nav-item-drop">
                                <h5>Product 1</h5>
                                <h5>Product 2</h5>
                                <h5 style="border: 0;">Product 3</h5>
                            </div>
                        </div>
                        <div class="nav-item">
                            <div class="item-top">
                                <h5>Blog</h5>
                                <i class="fa-solid fa-chevron-down mt-1"></i>
                            </div>
                            <div class="nav-item-drop">
                                <h5>Blog 1</h5>
                                <h5>Blog 2</h5>
                                <h5 style="border: 0;">Blog 3</h5>
                            </div>
                        </div>
                        <div class="nav-item">
                            <div class="item-top">
                                <h5>Contact us</h5>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        <i class="fa-solid fa-magnifying-glass gray fs-5"></i>
                        <i class="fa-solid fa-cart-shopping gray fs-5"></i>
                    </div>
                </div>
                
            </div>
            <div class="slide">
                <slider></slider>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.header {
    background-color: var(--primary_color);
    width: 100%;
    padding: 7px 20px;
    display: flex;
    justify-content: space-between;
}

.nav {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 10;

    .nav-card {
        width: 1000px;
        height: max-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        background-color: var(--color_white);

        .nav-item {
            height: 100px;
            display: grid;
            cursor: pointer;
            position: relative;

            &:hover{
                .item-top {
                    color: var(--primary_color);
                }
                .nav-item-drop {
                    display: flex;
                }
            }

            .item-top {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .nav-item-drop {
                display: none;
                flex-direction: column;
                position: absolute;
                top: calc(100% + 2px);
                background-color: var(--color_white);
                border-radius: 10px;
                min-width: 200px;
                animation-name: example;
                animation-duration: 0.3s;

                @keyframes example {
                    from {
                        opacity: 0;
                        top: 70%;
                    }
                    to {
                        opacity: 1;
                        top: calc(100% + 2px);
                    }
                }

                h5 {
                    padding: 15px 25px;
                    border-bottom: 1px solid var(--border_color);
                    transition: all 0.3s ease;

                    &:hover{
                        color: var(--primary_color);
                        padding-left: 35px;
                        transition: all 0.3s ease;
                    }
                }
            }
        }
    }                           
}

</style>