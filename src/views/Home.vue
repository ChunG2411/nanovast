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
            <div>
                <slider></slider>
            </div>
        </div>
    </div>

    <!-- ---------------------------------infor view---------------------------------- -->
    <div class="infor-view">
        <div class="infor-content">
            <div>
                <div class="gallery position-relative">
                    <img src="../assets/gallery1.jpg">
                    <div class="gallery-tag">
                        <p class="fs-4 fw-bold white">25</p>
                        <p class="fs-4 fw-bold white">Years</p>
                        <p class="fs-4 fw-bold white">Experience</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p class="fs-3 fw-bold">Sheep Farm Organic Products for Healthy living.</p>
                    <p>Conveniently customize proactive web services for leveraged without globally wellies richard.</p>
                </div>
                <div class="infor-list">
                    <div>
                        <div class="icon mb-2">
                            <img src="../assets/icon1.jpg">
                        </div>
                        <div>
                            <p class="fs-5 fw-bold">Certified Organic Standards</p>
                            <p>Continually aggregate frictionle interc without globally wellies richard.</p>
                        </div>
                    </div>
                    <div>
                        <div class="icon mb-2">
                            <img src="../assets/icon1.jpg">
                        </div>
                        <div>
                            <p class="fs-5 fw-bold">Certified Organic Standards</p>
                            <p>Continually aggregate frictionle interc without globally wellies richard.</p>
                        </div>
                    </div>
                    <div>
                        <div class="icon mb-2">
                            <img src="../assets/icon1.jpg">
                        </div>
                        <div>
                            <p class="fs-5 fw-bold">Certified Organic Standards</p>
                            <p>Continually aggregate frictionle interc without globally wellies richard.</p>
                        </div>
                    </div>
                    <div>
                        <div class="icon mb-2">
                            <img src="../assets/icon1.jpg">
                        </div>
                        <div>
                            <p class="fs-5 fw-bold">Certified Organic Standards</p>
                            <p>Continually aggregate frictionle interc without globally wellies richard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ------------------------------------member view--------------------------------- -->
    <div class="member-view">
        <div class="member-content">
            <div class="text-center w-50">
                <p class="fs-3 fw-bold">Our Sheep Farm Team</p>
                <p class="">Conveniently customize proactives into everaged interfaces without Globally</p>
            </div>
            <div class="member-list">
                <div class="member-item">
                    <div class="member-img">
                        <img src="../assets/member1.jpg">
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
                        <img src="../assets/member1.jpg">
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
                        <img src="../assets/member1.jpg">
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
                        <img src="../assets/member1.jpg">
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
                        <img src="../assets/member1.jpg">
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
    </div>

    <!-- ---------------------------------gallery view-------------------------------- -->
    <div class="gallery-view">
        <div class="gallery-content">
            <div class="text-center w-50">
                <p class="fs-3 fw-bold">Our Sheep Farm Gallery</p>
                <p class="">Conveniently customize proactives into everaged interfaces without Globally</p>
            </div>
            <div class="gallery-list">
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="../assets/gallery1.jpg">
                    </div>
                    <div class="gallery-link">
                        <div class="icon">
                            <i class="fa-solid fa-link fs-5 primary"></i>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="../assets/gallery1.jpg">
                    </div>
                    <div class="gallery-link">
                        <div class="icon">
                            <i class="fa-solid fa-link fs-5 primary"></i>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="../assets/gallery1.jpg">
                    </div>
                    <div class="gallery-link">
                        <div class="icon">
                            <i class="fa-solid fa-link fs-5 primary"></i>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="../assets/gallery1.jpg">
                    </div>
                    <div class="gallery-link">
                        <div class="icon">
                            <i class="fa-solid fa-link fs-5 primary"></i>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="../assets/gallery1.jpg">
                    </div>
                    <div class="gallery-link">
                        <div class="icon">
                            <i class="fa-solid fa-link fs-5 primary"></i>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="../assets/gallery1.jpg">
                    </div>
                    <div class="gallery-link">
                        <div class="icon">
                            <i class="fa-solid fa-link fs-5 primary"></i>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="../assets/gallery1.jpg">
                    </div>
                    <div class="gallery-link">
                        <div class="icon">
                            <i class="fa-solid fa-link fs-5 primary"></i>
                        </div>
                    </div>
                </div>
                <div class="gallery-item">
                    <div class="gallery-img">
                        <img src="../assets/gallery1.jpg">
                    </div>
                    <div class="gallery-link">
                        <div class="icon">
                            <i class="fa-solid fa-link fs-5 primary"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button>View</button>
            </div>
        </div>
    </div>

    <!-- ------------------------------------blog view--------------------------------- -->
    <div class="blog-view">
        <div class="blog-content">
            <div class="text-center w-50">
                <p class="fs-3 fw-bold">Our Sheep Farm blog</p>
                <p class="">Conveniently customize proactives into everaged interfaces without Globally</p>
            </div>
            <div class="blog-list">
                <div class="blog-item">
                    <div class="blog-img">
                        <img src="../assets/member1.jpg">
                    </div>
                    <div>
                        <div class="d-flex gap-3">
                            <div class="d-flex align-items-center gap-2">
                                <i class="fas fa-calendar-alt primary"></i>
                                <p class="primary">June 10, 2021</p>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <i class="far fa-user primary"></i>
                                <p class="primary">Emma Grant</p>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <i class="fas fa-comment primary"></i>
                                <p class="primary">16</p>
                            </div>
                        </div>
                        <div>
                            <p class="fs-5 fw-bold">This Season Increased Yield Of Honey</p>
                            <p>Conveniently innovate user-centric benefits architectures rapidiously builmortar testing manufacture distinctively.</p>
                        </div>
                        <div>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.home-view {
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

                    h5 {
                        padding: 15px 25px;
                        border-bottom: 1px solid var(--border_color);
                        transition: all 0.3s ease;

                        &:hover{
                            color: var(--primary_color);
                            padding-left: 35px;
                        }
                    }
                }
            }
        }                           
    }
}

.infor-view {
    background: url('../assets/background_infor.jpg');
    background-size: cover;
    background-position: center;
    padding: 70px 0;
    display: flex;
    justify-content: center;

    .infor-content {
        width: 80%;
        display: flex;
        gap: 40px;
        height: max-content;
        min-width: 950px;

        .gallery-tag {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: var(--primary_color);
            padding: 10px;
            width: 150px;
        }

        .infor-list {
            margin-top: 30px;
            height: 400px;
            overflow-y: scroll;
            display: flex;
            flex-direction: column;
            gap: 25px;
            padding-right: 30px;
            
            &::-webkit-scrollbar {
                width: 7px;
            }

            &::-webkit-scrollbar-thumb {
                background: var(--primary_color); 
                border-radius: 10px;
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
            padding-top: 20px;
            padding-bottom: 20px;

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
                    img {
                        height: 110%;
                        animation-name: zoom_in;
                        animation-duration: 0.3s;

                        @keyframes zoom_in {
                            from {
                                height: 100%;
                            }
                            to {
                                height: 110%;
                            }
                        }
                    }

                    p {
                        color: var(--primary_color);
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
    background: url('../assets/background_gallery.jpg');
    background-size: cover;
    background-position: center;

    .gallery-content {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 60px;
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
                    background-image: linear-gradient(to right, rgba(0, 255, 76, 0.5) , rgba(0, 255, 238, 0.5));
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
        max-width: 1200px;
        align-items: center;

        .blog-list {
            display: flex;
            justify-content: space-between;

            .blog-item {
                background-color: var(--color_white);
                box-shadow: 0 0 10px rgba(202, 202, 202, 0.8);
                display: flex;
                flex-direction: column;
                gap: 5px;
                align-items: center;
                width: 360px;

                
                &:hover {
                    img {
                        width: 110%;
                        animation-name: zoom_in;
                        animation-duration: 0.3s;

                        @keyframes zoom_in {
                            from {
                                width: 100%;
                            }
                            to {
                                width: 110%;
                            }
                        }
                    }
                }

                .blog-img {
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    display: grid;
                    place-items: center;

                    img {
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }
    }
}
</style>