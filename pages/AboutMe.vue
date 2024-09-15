<template>
    <NuxtLayout name="custom">
        <section class="about-me page-content">
            <h1 class="about-me__title title">ОБО МНЕ</h1>
            <span class="about-me__posttitle"> Я - <b>Рыбак Анастасия</b>, Frontend разработчик. </span>
            <p class="about-me__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cumque officia dolorum harum, 
                dolor maiores ipsum labore qui recusandae quia, porro modi, quos ad quasi? Reiciendis vel 
                nam necessitatibus praesentium voluptatem consequuntur molestiae exercitationem dolore 
                tempore ea dicta error odit dolor pariatur laudantium, omnis neque soluta obcaecati sunt corporis. 
            </p>
            <div class="about-me__data-content">
                <div class="about-me__data-content-wrap">
                    <section class="about-me__data-content-item">
                        <h3 class="about-me__data-content-number">777+</h3>
                        <span class="about-me__data-content-numdescription">Lorem ipsum dolor sit amet.</span>
                    </section>
                    <section class="about-me__data-content-item">
                        <h3 class="about-me__data-content-number">777+</h3>
                        <span class="about-me__data-content-numdescription">Lorem ipsum dolor sit amet.</span>
                    </section>
                    <section class="about-me__data-content-item">
                        <h3 class="about-me__data-content-number">777+</h3>
                        <span class="about-me__data-content-numdescription">Lorem ipsum dolor sit amet.</span>
                    </section>
                    <section class="about-me__data-content-item">
                        <h3 class="about-me__data-content-number">777+</h3>
                        <span class="about-me__data-content-numdescription">Lorem ipsum dolor sit amet.</span>
                    </section>
                </div>
                <section class="about-me__data-content-wrap">
                    <h2 class="about-me__data-content-title">Что я умею?</h2>
                    <article class="about-me__data-content-article">
                        <div class="about-me__data-content-img">
                            <img src="@/assets/icons/image.svg" alt="/">
                        </div>
                        <div class="about-me__data-content-text">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quas sed repellat enim adipisci soluta!</p>
                        </div>
                    </article>
                    <article class="about-me__data-content-article">
                        <div class="about-me__data-content-img">
                            <img src="@/assets/icons/image.svg" alt="/">
                        </div>
                        <div class="about-me__data-content-text">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quas sed repellat enim adipisci soluta!</p>
                        </div>
                    </article>
                    <article class="about-me__data-content-article">
                        <div class="about-me__data-content-img">
                            <img src="@/assets/icons/image.svg" alt="/">
                        </div>
                        <div class="about-me__data-content-text">
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quas sed repellat enim adipisci soluta!</p>
                        </div>
                    </article>
                </section>
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .about-me {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        &__posttitle,
        &__description {
            width: 100%;
            margin-bottom: 1em;
        }

        &__posttitle {
            margin-top: 1em;
            font-size: 1.5em;
            letter-spacing: 0.05em;
            word-spacing: 0.1em;
        }

        &__description {
            font-size: 1em;
            letter-spacing: 0.05em;
            word-spacing: 0.1em;
            text-align: justify;
        }

        &__data-content {
            width: 100%;
            margin-top: 5dvh;
            display: flex;
            justify-content: space-between;

            &-wrap {
                height: 45dvh;
            }

            &-wrap:last-child {
                width: 45%;
                padding-left: 3em;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            &-wrap:first-child {
                width: 80%;
                padding: 3%;
                border-radius: 1%;
                display: flex;
                flex-wrap: wrap;
                background-color: $main-dark;
            }

            &-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 50%;

                h3 {
                    font-size: 4em;
                    font-weight: 900;
                    color: $accent2;
                }

                span {
                    color: $main-light;
                }
            }

            &-title {
                font-size: 2.5em;
                font-weight: 600;
            }

            &-article {
                width: 100%;
                display: flex;
                gap: 3%;
                align-items: center;

                h3 {
                    text-transform: uppercase;
                    font-weight: 800;
                    margin-bottom: 0.5em;
                }

                p {
                    text-align: justify;
                    font-size: 0.8em;
                }
            }
        }
    }
</style>