<template>
    <button class="primary-button" :class="{ greenButton: color=='green' }">{{ text }}</button>
</template>

<script>
export default {
    namne: 'primaryButton',
    props: {
        text: String,
        color: String
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
        filter: brightness(75%);
        box-shadow: none;
    }

    .greenButton {
        background: $secondary;
    }

    @media only screen and (min-width: 768px) {
        .primary-button:hover {
            filter: brightness(75%);
        }
    }

</style>