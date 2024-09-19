<template>
    <section class="custom-layout container">
        <TheSideBar />
        <slot class="page-content" />
        <TheCompactBar class="custom-layout__aside"/>
    </section>
</template>

<script setup>
</script>

<style lang="scss">
    .custom-layout {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__aside {
            width: 6%;
        }
    }
</style>