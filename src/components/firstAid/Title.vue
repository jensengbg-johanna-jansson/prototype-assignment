<template>
    <section id="container">
        <img @click="goToStartPage()" src="../../assets/logo.png">
        <h1>First Aid</h1>
    </section>
</template>

<script>
export default {
    methods: {
        goToStartPage() {
            this.$router.push({ path: '/' });
        }
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        @include headingLarge();
    }

    img {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        #container {
            display: grid;
            grid-template-columns: 1fr;
        }

        img {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            display: block;
            margin-top: 2rem;
            margin-left: 2rem;
        }

        h1 {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>