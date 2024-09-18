<template>
    <NuxtLayout name="custom">
        <section class="portfolio page-content">
            <h1 class="portfolio__title title">Портфолио</h1>
            <nav class="portfolio__nav">
                <ul class="portfolio__nav-wrap">
                    <li class="portfolio__nav-item">
                        <NuxtLink active-class="portfolio__nav-item_active" to="/Portfolio">Все</NuxtLink>
                    </li>
                    <li class="portfolio__nav-item">
                        <NuxtLink active-class="portfolio__nav-item_active" to="/Portfolio/landings">Одностраничные</NuxtLink>
                    </li>
                    <li class="portfolio__nav-item">
                        <NuxtLink active-class="portfolio__nav-item_active" to="/Portfolio/multi">Многостраничные</NuxtLink>
                    </li>
                    <li class="portfolio__nav-item">
                        <NuxtLink active-class="portfolio__nav-item_active" to="/Portfolio/practice">Практика</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="portfolio__content">
                <!-- <a class="portfolio__content-link" v-for="link in links" :key="link" :href="'https://' + link" target="_blank" rel="noopener noreferrer">
                    <NuxtImg :src="/">
                </a> -->
            </div>
            <aside>
                <p>* Все окошки реагируют на прокрутку :)</p>
            </aside>
        </section>
    </NuxtLayout>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .portfolio {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        &__nav {
            width: 60%;
            
            &-wrap {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            &-item {
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

        &__content {
            height: 50dvh;
            width: 100%;

            &-link {
                width: 24%;
                height: 24%;
            }
        }
    }
</style>