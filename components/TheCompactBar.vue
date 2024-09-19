<template>
    <aside class="bar">
        <ul class="bar__list">
            <li class="bar__list-item">
                <nuxt-link active-class="bar__list-item_active" to="/">
                    <img src="@/assets/icons/home.svg" />
                </nuxt-link>
            </li>
            <li class="bar__list-item">
                <nuxt-link active-class="bar__list-item_active" to="/AboutMe">
                    <img src="@/assets/icons/person.svg"/>
                </nuxt-link>
            </li>
            <li class="bar__list-item">
                <nuxt-link active-class="bar__list-item_active" to="/Cv">
                    <img src="@/assets/icons/file.svg"/>
                </nuxt-link>
            </li>
            <li class="bar__list-item">
                <nuxt-link active-class="bar__list-item_active" to="/Portfolio">
                    <img src="@/assets/icons/folder.svg"/>
                </nuxt-link>
            </li>
            <!-- TODO: 1 -->
            <!-- <li class="bar__list-item">
                <nuxt-link active-class="bar__list-item_active" to="/Notes">
                    <img src="@/assets/icons/home.svg"/>
                </nuxt-link>
            </li> -->
            <li class="bar__list-item">
                <nuxt-link active-class="bar__list-item_active" to="/Contacts">
                    <img src="@/assets/icons/contact.svg"/>
                </nuxt-link>
            </li>
        </ul>
    </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .bar {
        height: 50dvh;
        background-color: $accent;
        padding: 2.5em 1.8em 1em;
        border-radius: 40px;
        box-shadow: 0 0 1em rgba(77, 67, 41, 0.226);
        
        &__list {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-between;

            &-item {
                height: 15%;

                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                }

                @include hover {
                    a img {
                        transition: all 0.3s ease-in-out;
                        transform: scale(1.2);
                        filter: invert(1);
                    }
                }

                &_active {
                    img {
                        transform: scale(1.3);
                        filter: invert(1);
                    }
                }
            }
        }
    }
</style>