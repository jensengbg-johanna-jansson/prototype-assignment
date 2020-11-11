<template>
    <section id="container">
        <section class="header">
            <h1>Eezer App</h1>
            <img @click="goToPage()" src="../../assets/close-button.png">
        </section>
    </section>
</template>

<script>
export default {
    props: {
        goBack: Boolean
    },
    methods: {
        goToPage() {
            if(this.goBack == true) {
                this.$router.go(-1);
            } else {
                this.$router.push({ path: '/' });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #container {
        display: block;
    }

    .header {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }

    .header h1 {
        grid-column: 1 / 2;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: $subtitlesize;
        color: $primary;
    }

    .header img {
        grid-column: 2 / 3;
        display: block;
        margin: auto;
        margin-right: 1rem;
        margin-top: 0.6rem;
    }

    @media only screen and (min-width: 768px) {
        #container {
            display: none;
        }
    }
</style>