<template>
    <NuxtLayout name="custom">
        <section class="contacts page-content">
            <h1 class="contacts__title title">Контакты</h1>
            <p class="contacts__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta sed sunt 
                distinctio corrupti mollitia impedit? Illo expedita ipsam quasi et tempore maxime voluptate atque, 
                quos commodi, ipsum voluptas debitis ullam dolorum blanditiis quam soluta ad placeat non est temporibus, 
                quis nemo nesciunt ab perferendis. Veritatis laudantium obcaecati architecto blanditiis!
            </p>
            <div class="contacts__content">
                <div class="contacts__content-item">
                    <div class="contacts__content-img">
                        <img src="@/assets/icons/network.png" alt="контакты">
                    </div>
                    <ul>
                        <li class="contacts__content-list">
                            instagram (<a href="https://www.instagram.com/_obl_ivi_ate_/">@_obl_ivi_ate_</a>)
                        </li>
                        <li class="contacts__content-list">
                            Linkedin (<a href="/">linkedin</a>)
                        </li>
                        <li class="contacts__content-list">
                            GitHub (<a href="https://github.com/Anastassiya-Rybak">Anastassiya-Rybak</a>)
                        </li>
                        <li class="contacts__content-list">
                            Mail (<a href="mailto:vyacheslavovna.an@mail.ru">vyacheslavovna.an@mail.ru</a>)
                        </li>
                    </ul>
                </div>
                <div class="contacts__content-item">
                    <div class="contacts__content-img">
                        <img src="@/assets/icons/phone.png" alt="контакты">
                    </div>
                    <ul>
                        <li class="contacts__content-list">
                            WhatsApp: <a href="tel:87776840869">8-777-684-08-69</a>
                        </li>
                        <li class="contacts__content-list">
                            Telegram: <a href="https://t.me/obl_ivi_ate">obl_ivi_ate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .contacts {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &__desc {
            text-align: justify;
        }

        &__content {
            width: 100%;
            height: 50dvh;
            display: flex;
            justify-content: space-around;
            align-items: center;

            &-item {
                display: flex;
                align-items: center;
                width: 45%;
                gap: 1em;
            }

            &-img {
                height: 50%;
                width: 40%;
            }

            &-list {
                line-height: 3em;

                a {
                    color: $accent2;
                    text-shadow: 0.5px 0 0.1em rgba(0, 0, 0, 0.788);
                }
            }
        }
    }
</style>