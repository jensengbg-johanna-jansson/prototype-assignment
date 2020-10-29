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
    }
    .primary-button:focus {
        outline: none;
    }
    .primary-button:active {
        background: $primaryDark;
        box-shadow: none;
    }
</style>