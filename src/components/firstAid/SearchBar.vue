<template>
    <section>
        <section id="container">
            <input type="text" placeholder="Search">
            <img src="../../assets/search.png">
        </section>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #container {
        @include centeredFlex();
        margin: 2rem;
    }

    input {
        border: 1px solid $secondary;
        width: 80rem;
        height: 2rem;
        margin-right: 0;
        border-right: none;
    }

    input:focus {
        outline: none;
    }

    img {
        width: 2rem;
        height: 2rem;
        border: 1px solid $secondary;
        border-left: none;
        cursor: pointer;
    }
</style>