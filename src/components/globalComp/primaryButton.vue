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
        background: $primaryColor;
    }
    .primary-button:focus {
        outline: none;
    }
    .primary-button:active {
        background: $primaryColorDark;
        box-shadow: none;
    }
</style>