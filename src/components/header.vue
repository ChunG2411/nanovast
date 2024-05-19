<script setup>
$(window).scroll(() => {
    if ($(window).scrollTop() > 200) {
        document.querySelector('.nav').style.position = 'fixed'
        document.querySelector('.nav .nav-card').style.width = '100%'
    }
    else {
        document.querySelector('.nav').style.position = 'absolute'
        document.querySelector('.nav .nav-card').style.width = '85%'
    }
})
</script>

<template>
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
</template>

<style scoped lang="scss">
@import '../assets/css/mixins.scss';

.header {
    background-color: var(--primary_color);
    width: 100%;
    padding: 7px 20px;
    @include desktop {
        display: flex;
    }
    display: none;
    justify-content: space-between;
}
</style>