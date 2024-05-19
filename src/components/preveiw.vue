<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    src: String
})

</script>

<template>
    <div class="image">
        <div class="button-close" @click="$emit('close')">
            <i class="fa-solid fa-x white fs-6"></i>
        </div>
        <div class="image-slot">
            <img :src="props.src">
        </div>
    </div>
</template>

<style scoped lang="scss">
.image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: #000000dc;
    display: grid;
    place-items: center;
    z-index: 99;

    .button-close {
        padding: 10px;
        border-radius: 50%;
        background-color: #000000ad;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 20px;
        right: 30px;
        z-index: 100;
        width: 40px;
        height: 40px;

        &:hover {
            width: 50px;
            height: 50px;
        }
    }

    .image-slot {
        width: 80%;
        height: 80%;
        max-width: 800px;
        max-height: 500px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>