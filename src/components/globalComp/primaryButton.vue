<template>
    <button class="primary-button">{{ text }}</button>
</template>

<script>
export default {
    namne: 'primaryButton',
    props: {
        text: String
    }
}
</script>

<style lang="scss" scoped>
    .primary-button {
        @include button();
        background: $primary;
        transition: all .3s linear;
    }
    .primary-button:focus {
        outline: none;
    }
    .primary-button:active {
        background: $primaryDark;
        box-shadow: none;
    }

    @media only screen and (min-width: 768px) {
        .primary-button:hover {
            background: $primaryDark;
        }
    }

</style>