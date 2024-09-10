<template>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__list-item nav__list-item_me">
                <a href="https://www.instagram.com/_obl_ivi_ate_/" target="_blank" rel="noopener noreferrer">
                    <NuxtImg src="/me.jpeg" />   
                </a>
            </li>
            <li class="nav__list-item"><nuxt-link active-class="nav__list-item_active" to="/">Главная</nuxt-link></li>
            <li class="nav__list-item"><nuxt-link active-class="nav__list-item_active" to="/AboutMe">Обо мне</nuxt-link></li>
            <li class="nav__list-item"><nuxt-link active-class="nav__list-item_active" to="/Cv">Резюме</nuxt-link></li>
            <li class="nav__list-item"><nuxt-link active-class="nav__list-item_active" to="/Portfolio">Портфолио</nuxt-link></li>
            <!-- TODO: 1 -->
            <!-- <li class="nav__list-item"><nuxt-link active-class="nav__list-item_active" to="/Notes">Заметки</nuxt-link></li> -->
            <li class="nav__list-item"><nuxt-link active-class="nav__list-item_active" to="/Contacts">Контакты</nuxt-link></li>
        </ul>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .nav {
        width: 20%;
        background-color: $accent;
        box-shadow: 0 0 1em rgba(77, 67, 41, 0.226);

        &__list {
            height: 100dvh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5%;
            
            &-item {
                font-size: 1.3em;
                text-transform: uppercase;
                letter-spacing: 0.15em;

                &_active {
                    color: $main-light;
                    text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.349);
                }

                @include hover {
                    a {
                        color: $main-light;
                    }
                }

                &_me {
                    width: 60%;
                    margin-top: -5dvh;
                    margin-bottom: 3dvh;
                    border-radius: 50%;
                    overflow: hidden;
                    box-shadow: 0 0 1em 0 rgba(37, 37, 37, 0.185);

                    a {
                        display: block;
                        position: relative;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: 100%;

                        &::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            box-shadow: inset 0 0 0.8em 0 rgb(248, 248, 248) !important;
                        }

                        img {
                            height: 100%;
                            object-fit: cover;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }
</style>