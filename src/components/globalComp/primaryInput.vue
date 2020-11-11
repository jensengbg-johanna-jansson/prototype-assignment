<template>
    <input type="text" :placeholder="placeholder" />
</template>

<script>
export default {
    props: {
        placeholder: String
    }
}
</script>

<style lang="scss" scoped>
    input {
        width: 21rem;
        height: 2.25rem;
        border: none;
        border-bottom: 0.125rem solid $primary;
        padding: 0.5rem;
        margin-bottom: 1rem;
    }
    input:focus {
        outline: none;
        color: $black;
        font-size: 16px;
    }
</style>