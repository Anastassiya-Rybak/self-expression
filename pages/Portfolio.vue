<template>
    <NuxtLayout name="custom">
        <NuxtLayout name="portfolio">
            <div class="portfolio__content">
                <a class="portfolio__content-link" v-for="project in projects" :key="project" :href="project.url" target="_blank" rel="noopener noreferrer">
                    <NuxtImg :src="'/portfolio/' + project.name + '.png'" :alt="project.name" />
                </a>
            </div>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup>
    import JSON from '@/server/selfdata.json';

    const getProjects = async () => {
        return new Promise((resolve, reject) => {
            const projects = JSON.portfolio;
            resolve(projects);
            reject('Что-то пошло не так.. Где мои проекты?!')
        });
    }

    const projects = await getProjects();    
</script>

<style lang="scss" scoped>
    .portfolio__content {
        height: 50dvh;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &-link {
            width: 32%;
            height: 45%;
            display: block;
            overflow: auto;
            border-radius: 2%;
            box-shadow: 0 0.3em 0.5em rgba(0, 0, 0, 0.329);
            transition: 0.3s;

            &::-webkit-scrollbar {
                width: 0;
            }

            @include hover {
                transform: scale(1.1);
            }
        }
    }
</style>