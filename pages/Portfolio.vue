<template>
    <NuxtLayout name="custom">
        <NuxtLayout name="portfolio">
            <div class="portfolio__content">
                <!-- <a class="portfolio__content-link" v-for="link in links" :key="link" :href="'https://' + link" target="_blank" rel="noopener noreferrer">
                    <NuxtImg :src="/">
                </a> -->
            </div>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .portfolio__content {
        height: 50dvh;
        width: 100%;

        &-link {
            width: 24%;
            height: 24%;
        }
    }
</style>