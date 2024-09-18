<template>
    <section class="portfolio-layout page-content portfolio">
        <h1 class="portfolio__title title">Портфолио</h1>
        <ThePortfolioNav />
        <slot />
        <aside>
            <p>* Все окошки реагируют на прокрутку :)</p>
        </aside>
    </section>
</template>

<script setup>
</script>

<style lang="scss">
    .portfolio {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>