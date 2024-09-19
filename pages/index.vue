<template>
    <div class="main-page container">
        <section class="main-page__content">
            <span>Приветствую Вас на моем сайте!</span>
            <span>Меня зовут</span>
            <h1>Рыбак Анастасия</h1>
            <p>Я - Frontend разработчик.</p>
        </section>
        <TheCompactBar />
    </div>
</template>

<script setup>
</script>

<style lang="scss">
    .main-page {
        height: 100dvh;
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__content {
            width: 80%;
            display: flex;
            flex-direction: column;

            span:first-child {
                font-size: 2.5em;
                line-height: 5em;
                word-spacing: 0.8em;
            }

            span:nth-child(2) {
                text-transform: uppercase;
                opacity: 0.5;
                font-size: 1.5em;
                font-weight: 800;
                line-height: 0;
                word-spacing: 0.5em;
            }

            p {
                font-size: 2em;
                word-spacing: 0.8em;
                font-weight: 600;
                text-align: end;
            }

            h1 {
                font-size: 6em;
                letter-spacing: -0.06em;
                word-spacing: 0.5em;
            }
        }
    }
</style>