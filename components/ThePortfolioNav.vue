<template>
    <nav class="portfolio-nav">
        <ul class="portfolio-nav__wrap">
            <li class="portfolio-nav__item">
                <NuxtLink active-class="portfolio-nav__item_active" to="/Portfolio">Все</NuxtLink>
            </li>
            <li class="portfolio-nav__item">
                <NuxtLink active-class="portfolio-nav__item_active" to="/Portfolio/landings">Одностраничные</NuxtLink>
            </li>
            <li class="portfolio-nav__item">
                <NuxtLink active-class="portfolio-nav__item_active" to="/Portfolio/multi">Многостраничные</NuxtLink>
            </li>
            <li class="portfolio-nav__item">
                <NuxtLink active-class="portfolio-nav__item_active" to="/Portfolio/practice">Практика</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
        .portfolio-nav {
            width: 60%;
            
            &__wrap {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            &__item {
                a {
                    text-transform: uppercase;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    transition: all 0.3s;

                    @include hover {
                        color: $accent2;
                        text-shadow: 0 0 0.05em rgba(0, 0, 0, 0.986);
                        font-size: 1.2em;
                    }
                }

                &_active {
                    color: $accent2;
                    text-shadow: 0 0 0.05em rgba(0, 0, 0, 0.986);
                    font-size: 1.2em;
                }
            }
        }

</style>