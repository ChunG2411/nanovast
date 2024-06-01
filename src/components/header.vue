<script setup>
</script>

<template>
    <div class="header">
        <div class="d-flex gap-5">
            <div class="d-flex align-items-center gap-2">
                <p class="white">Viện Hàn lâm Khoa học và Công nghệ</p>
            </div>
            <div class="d-flex align-items-center gap-2">
                <p class="white">Phòng Hoá vô cơ - Hoá lý</p>
            </div>
        </div>
        <div class="d-flex align-items-center gap-3">
            <i class="fa-brands fa-facebook-f white"></i>
            <i class="fab fa-instagram white"></i>
            <i class="fab fa-twitter white"></i>
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