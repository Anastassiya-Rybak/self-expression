<template>
    <section class="custom-layout container">
        <TheSideBar />
        <slot class="page-content" />
        <TheCompactBar />
    </section>
</template>

<script setup>
</script>

<style lang="scss">
    .custom-layout {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .page-content {
        width: 65%;
    }
</style>