<template>
    <div>
        <header class="container">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, in!</p>
        </header>
        <main>
            <slot />
        </main>
        <footer>
        </footer>
    </div>
</template>

<script>
</script>

<style lang="scss">

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    
    .container {
        background-color: bisque;
        padding: 40px;

        p {
            color: aqua;
        }

    }
</style>