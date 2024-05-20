<script setup>
$(window).scroll(() => {
    if ($(window).scrollTop() > 180) {
        document.querySelector('.nav').style.position = 'fixed'
        document.querySelector('.nav .nav-card').style.width = '100%'
    }
    else {
        document.querySelector('.nav').style.position = 'absolute'
        document.querySelector('.nav .nav-card').style.width = '85%'
    }
})

var status = false
function showChild() {
    const child = document.querySelector('.drop-2')
    if (status) {
        child.style.display = 'none'
        status = false
    }
    else {
        child.style.display = 'flex'
        status = true
    }
}
</script>

<template>
    <div class="nav">
        <div class="nav-card">
            <router-link to="/" class="logo">
                <img src="../assets/logo.png">
            </router-link>
            <div class="nav-list">
                <div class="nav-item">
                    <div class="item-top">
                        <router-link to="/about">Giới thiệu</router-link>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="item-top">
                        <a>Sản phẩm</a>
                        <i class="fa-solid fa-chevron-down mt-1"></i>
                    </div>
                    <div class="nav-item-drop">
                        <a>Sản phẩm 1</a>
                        <a>Sản phẩm 2</a>
                        <a style="border: 0;">Sản phẩm 3</a>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="item-top">
                        <router-link to="/blog">Bài viết</router-link>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="item-top">
                        <router-link to="/">Thông tin</router-link>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="item-top">
                        <router-link to="/contact">Liên hệ</router-link>
                    </div>
                </div>
            </div>
            <div class="nav-button">
                <i class="fa-solid fa-bars primary fs-3"></i>
                <div class="nav-button-drop">
                    <router-link to="/about">Giới thiệu</router-link>
                    <div class="drop-1">
                        <a class="d-flex justify-content-between" @click="showChild">Sản phẩm <i class="fa-solid fa-chevron-right me-2"></i></a>
                        <div class="drop-2">
                            <a>Sản phẩm 1</a>
                            <a>Sản phẩm 3</a>
                            <a>Sản phẩm 2</a>
                        </div>
                    </div>
                    <router-link to="/blog">Bài viết</router-link>
                    <router-link to="/">Thông tin</router-link>
                    <router-link to="/contact" style="border: 0;">Liên hệ</router-link>
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
    top: -1px;
    z-index: 20;

    .nav-card {
        max-width: 1500px;
        height: max-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include desktop {
            padding: 0 60px;
            min-width: 850px;
            width: 90%;
        }
        @include mobile {
            min-width: 100%;
            padding: 10px 20px;
        }
        width: 100%;
        padding: 0 30px;
        min-width: 700px;
        background-color: var(--color_white);
        transition: all 0.3s ease;

        .logo {
            width: calc(120px + 5vw);
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
                    top: 100%;
                }
            }
            .nav-button-drop {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: -500px;
                right: 0;
                background-color: var(--color_white);
                width: 100%;
                box-shadow: 0 10px 15px rgba(188, 188, 188, 0.586);
                z-index: -1;
                transition: all 0.3s ease;

                a {
                    border-bottom: 1px solid var(--border_color);
                    padding: 15px 30px;
                    font-size: 15px;
                }
                .drop-1 {
                    display: flex;
                    flex-direction: column;

                    .drop-2 {
                        display: none;
                        flex-direction: column;
                        animation-name: show;
                        animation-duration: 0.5s;
                        width: 85%;
                        margin-left: 15%;

                        @keyframes show {
                            from {
                                margin-left: 100%;
                            }
                            to {
                                margin-left: 15%;
                            }
                        }
                    }
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