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
                <p class="fs-1 fw-bold">Liên hệ với chúng tôi</p>
            </div>
        </div>
    </div>

    <div class="contact-view">
        <div class="contact-content">
            <div class="left">
                <p class="fs-4 fw-bold">Send Message us</p>
                <div class="input-group-custom">
                    <input type="text" placeholder="Your Name">
                    <input type="text" placeholder="Your Email">
                </div>
                <div class="input-group-custom">
                    <input type="text" placeholder="Phone">
                    <input type="text" placeholder="Subject">
                </div>
                <textarea rows="5" cols="" placeholder="Enter your message"></textarea>
                <button>Send</button>
            </div>
            <div class="right">
                <p class="fs-4 fw-bold">Quick Contact</p>
                <p>Continually productize compelling quality dome packed with all Elated Themes ently utilize website and creating pages corporate</p>
                <div class="d-flex flex-column gap-2">
                    <div class="d-flex align-items-center gap-2">
                        <div class="icon">
                            <i class="fas fa-phone-volume white"></i>
                        </div>
                        <p>+88130-589-745-6987</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <div class="icon">
                            <i class="fas fa-clock white"></i>
                        </div>
                        <p>Mon - Fri 09:00 - 18:00</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <div class="icon">
                            <i class="fas fa-map-marker-alt white"></i>
                        </div>
                        <p>25/2 Lane2 Vokte Street Building Melborn City</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="map-veiw">
        <div class="map-content">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3724.0823738602735!2d105.85307655982645!3d21.029389773192833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1716091539110!5m2!1svi!2s"
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
        width: 80%;
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