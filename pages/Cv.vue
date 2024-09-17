<template>
    <NuxtLayout name="custom">
        <section class="resume page-content">
            <h1 class="resume__title title">Резюме</h1>
            <p class="resume__status">Актуальный статус - <span> активно ищу работу</span></p>
            <div class="resume__download">
                <h2>Тут можно скачать резюме</h2>
                <button>Скачать</button>
            </div>
            <div class="resume__content">
                <section class="resume__content-item">
                    <h3>Образование</h3>
                    <ol class="resume__content-item-wrap">
                        <li class="resume__content-item-first">
                            <b>2015 - 2019</b> | <b>КЭУК</b>
                            <p>Факультет Бизнеса и Права.
                                Направление - Туризм.
                            </p>
                            <span class="resume__content-item-mark">Высшее</span>
                        </li>
                        <li class="resume__content-item-first">
                            <b>2022</b> | <b>Decode.kz</b>
                            <p>"Web-разработка на HTML, CSS, JS, PHP, MySQL"</p>
                            <span class="resume__content-item-mark">Курсы</span>
                        </li>
                    </ol>
                </section>
                <section class="resume__content-item">
                    <h3>Опыт работы</h3>
                    <ol class="resume__content-item-wrap">
                        <li class="resume__content-item-first">
                            <b>Октябрь 2023 - настоящее время</b>
                            <h4>Web - разработчик</h4>
                            <ul>
                                <li>Разработка приложений разного рода на Vue3 и Nuxt3.</li>
                                <li>Сопровождение/доработка собственных проектов.</li>
                            </ul>
                        </li>
                        <li class="resume__content-item-first">
                            <b>Октябрь 2022 - Ноябрь 2022</b>
                            <h4>Remote Trainee Frontend Developer</h4>
                            <ul>
                                <li>Верстка лэндингов по макетам, с использованием CSS фреймворка и без.</li>
                                <li>Реализация новостного портала на Vue3</li>
                            </ul>
                        </li>
                        <li class="resume__content-item-first">
                            <b>Май 2020 - Декабрь 2020</b>
                            <h4>Турагент</h4>
                            <ul>
                                <li>Консультация и подбор тура пакетов</li>
                                <li>Страхование авто</li>
                                <li>Продажа авиа/ЖД билетов</li>
                            </ul>
                        </li>
                    </ol>
                </section>
                <section class="resume__content-item">
                    <h3>Навыки</h3>
                    <ol class="resume__content-item-wrap resume__content-item-wrap_skills">
                        <li>JavaScript ES6+</li>
                        <li>RestAPI</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SASS</li>
                        <li>Git</li>
                        <li>Vue3</li>
                        <li>Nuxt3</li>
                        <li>Vuex</li>
                        <li>Pinia</li>
                        <li>Bootstrap</li>
                        <li>Jest</li>
                        <li>Docker</li>
                        <li>TypeScript</li>
                        <li>БЭМ</li>
                        <li>NodeJS</li>
                        <li>1C</li>
                    </ol>
                </section>
                <section class="resume__content-item">
                    <h3>Соц. сети</h3>
                    <ol class="resume__content-item-wrap resume__content-item-wrap_socials">
                        <li>
                            <a href="https://www.instagram.com/_obl_ivi_ate_/" target="_blank" rel="noopener noreferrer">
                                instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Anastassiya-Rybak" target="_blank" rel="noopener noreferrer">
                                  github
                            </a>
                        </li>
                        <li>
                            <a href="mailto: vyacheslavovna.an@mail.ru" target="_blank" rel="noopener noreferrer">
                                почта
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/obl_ivi_ate" target="_blank" rel="noopener noreferrer">
                                telegram  
                            </a>
                        </li>
                    </ol>
                </section>
            </div>
            <aside class="resume__aside">
                <span>Русский язык - носитель. Английский язык - B1.</span>
                <span>Контактный номер: <a href="tel:87776840869">8-777-684-08-69</a></span>
            </aside>
        </section>
    </NuxtLayout>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .resume {
        &__status {
            font-size: 1.2em;
            letter-spacing: 0.08em;
            margin: 2em 0 1em;

            span {
                font-weight: 800;
                color: $accent;
            }
        }

        &__download {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 35%;
            margin-bottom: 2em;

            h2 {
                font-size: 1.2em;
                letter-spacing: 0.08em;
            }

            button {
                background-color: $accent2;
                padding: 0.5em 1em;
                border: none;
                border-radius: 0.8em;
                box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.281),
                0 0 0 0.3em rgba(255, 255, 255, 0.26) inset;
                cursor: pointer;
                transition: all 0.3s;

                &:active {
                    box-shadow: 0 0 0.05em rgba(0, 0, 0, 0.281),
                    0 0 0 0.3em rgba(255, 255, 255, 0.26) inset;
                }
            }
        }

        &__content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            row-gap: 2dvh;
            width: 100%;
            margin-bottom: 2em;

            &-item {
                position: relative;
                width: 32.5%;
                height: 40dvh;
                padding: 1em;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid $accent;
                border-radius: 0.4em;

                &::before {
                    content: '';
                    width: 100%;
                    position: absolute;
                    height: 10%;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    background: $main-light;
                    background: linear-gradient(180deg, $main-light 0%, $main-light 53%, rgba(0,212,255,0) 100%);
                }

                &::after {
                    content: '';
                    width: 100%;
                    position: absolute;
                    height: 10%;
                    bottom: 0;
                    left: 0;
                    background: $main-light;
                    background: linear-gradient(0deg, $main-light 0%, $main-light 53%, rgba(0,212,255,0) 100%);
                }

                h3 {
                    width: fit-content;
                    font-size: 1.5em;
                    background-color: $main-light;
                    margin-top: -1.3em;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 0 0.5em;
                    z-index: 3;
                }

                &-wrap {
                    display: flex;
                    flex-direction: column;
                    padding: 1.5em 0.15em;
                    gap: 1em;
                    max-height: 100%;
                    overflow: auto;

                    &::-webkit-scrollbar {
                        width: 0;
                    }

                    &_skills {
                        flex-direction: row;
                        flex-wrap: wrap;
                    }

                    &_socials {
                        padding: 0.5em 0;
                        width: 100%;
                        flex-direction: row;
                        justify-content: space-around;
                    }

                    &_skills li,
                    &_socials li {
                        background-color: $accent2;
                        padding: 0.3em 0.5em;
                        border-radius: 0.5em;
                        box-shadow: 0 0 0 1em #ffffff77 inset;
                        transition: all 0.3s;

                        a {
                            @include hover {
                                color: $accent;
                                text-shadow: 0 0 0.1em rgba(54, 53, 0, 0.459);                                
                            }
                        }
                    }
                }

                &-first {
                    position: relative;
                    list-style: circle;
                    margin-left: 1em;
                    
                    b {
                        text-transform: uppercase;
                        letter-spacing: 0.04em;
                    }
                    h4 {
                        letter-spacing: 0.05em;
                        font-style: italic;
                        font-weight: 400;
                        margin-bottom: 0.5em;
                        margin-top: 0.5em;
                    }

                    p {
                        margin-top: 0.5em;
                        font-style: italic;
                    }

                    li {
                        list-style: inside;
                        font-size: 0.8em;
                    }
                }

                &:last-child {
                    width: 100%;
                    height: fit-content;
                    padding: 1em 0 0.3em;
                }

                &-mark {
                    position: absolute;
                    top: -10%;
                    right: 0;
                    font-size: 0.8em;
                    background-color: $accent;
                    color: $main-light;
                    padding: 0.2em 0.5em;
                    border-radius: 0.2em;
                    box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.11);
                    opacity: 0.6;
                }
            }
        }

        aside {
            display: flex;
            flex-direction: column;
            align-items: end;
            gap: 1em;
        }
    }
</style>