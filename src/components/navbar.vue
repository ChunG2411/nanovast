<script setup>
</script>

<template>
    <div class="nav">
        <div class="nav-card">
            <div class="logo">
                <img src="../assets/logo.png">
            </div>
            <div class="nav-list">
                <div class="nav-item">
                    <div class="item-top">
                        <router-link to="/">Home</router-link>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="item-top">
                        <a>Pages</a>
                        <i class="fa-solid fa-chevron-down mt-1"></i>
                    </div>
                    <div class="nav-item-drop">
                        <a href="#infor">Về chúng tôi</a>
                        <a href="#member">Thành viên</a>
                        <a style="border: 0;" href="#gallery">Thư viện</a>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="item-top">
                        <a>Product</a>
                        <i class="fa-solid fa-chevron-down mt-1"></i>
                    </div>
                    <div class="nav-item-drop">
                        <a>Product 1</a>
                        <a>Product 2</a>
                        <a style="border: 0;">Product 3</a>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="item-top">
                        <a>Blog</a>
                        <i class="fa-solid fa-chevron-down mt-1"></i>
                    </div>
                    <div class="nav-item-drop">
                        <a>Blog 1</a>
                        <a>Blog 2</a>
                        <a style="border: 0;">Blog 3</a>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="item-top">
                        <router-link to="/about">Contact Us</router-link>
                    </div>
                </div>
            </div>
            <div class="nav-button">
                <i class="fa-solid fa-bars primary fs-3"></i>
                <div class="nav-button-drop">
                    <router-link to="/">Home</router-link>
                    <a href="#infor">Về chúng tôi</a>
                    <a href="#member">Thành viên</a>
                    <a href="#gallery">Thư viện</a>
                    <a>Product</a>
                    <a>Blog</a>
                    <router-link to="/about">Contact Us</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/css/mixins.scss';

.nav {
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        z-index: 10;

        .nav-card {
            max-width: 1500px;
            width: 85%;
            height: max-content;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include desktop {
                padding: 0 60px;
                min-width: 850px;
            }
            @include mobile {
                min-width: 100%;
                padding: 10px 20px;
            }
            padding: 0 30px;
            min-width: 700px;
            background-color: var(--color_white);
            transition: all 0.3s ease;

            .logo {
                width: 170px;
                overflow: hidden;
            }
            .nav-button {
                @include mobile {
                    display: block;
                }
                display: none;

                i {
                    transition: rotate 0.3s ease
                }
                &:hover {
                    i {
                        rotate: 90deg;
                    }
                    .nav-button-drop {
                        display: flex;
                    }
                }
                .nav-button-drop {
                    display: none;
                    flex-direction: column;
                    position: absolute;
                    top: 100%;
                    right: 0;
                    background-color: var(--color_white);
                    animation-name: drop;
                    animation-duration: 0.5s;

                    @keyframes drop {
                        from {
                            opacity: 0;
                            top: 70%;
                        }

                        to {
                            opacity: 1;
                            top: 100%;
                        }
                    }
                    a {
                        border-bottom: 1px solid var(--border_color);
                        padding: 10px 40px 10px 20px;
                        font-size: 15px;
                    }
                }
            }
            .nav-list {
                @include mobile {
                    display: none;
                }
                display: flex;
                @include desktop {
                    gap: 50px;
                }
                gap: 20px;
            
                .nav-item {
                    height: 100px;
                    display: grid;
                    cursor: pointer;
                    position: relative;

                    &:hover {
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
                        justify-content: space-between;
                        gap: 5px;
                    }
                    .nav-item-drop {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 100%;
                        margin-top: 2px;
                        background-color: var(--color_white);
                        border-radius: 10px;
                        min-width: 200px;
                        animation-name: drop;
                        animation-duration: 0.5s;

                        @keyframes drop {
                            from {
                                opacity: 0;
                                top: 70%;
                            }
                            to {
                                opacity: 1;
                                top: 100%;
                            }
                        }
                        a {
                            padding: 15px 25px;
                            border-bottom: 1px solid var(--border_color);
                            transition: all 0.3s ease;

                            &:hover {
                                color: var(--primary_color);
                                padding-left: 35px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>