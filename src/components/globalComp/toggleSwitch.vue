<template>
    <div>
        <input type="checkbox" id="toggle">
        <label class="toggle-switch" for="toggle">
            <span class="toggle-switch-slider"></span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'toggleSwitch'
}
</script>

<style lang="scss" scoped>
    input {
        display: none;
    }
    .toggle-switch {
        background: rgba(0, 0, 0, .25);
        padding: 3px;
        display: flex;
        width: 3rem * 2;
        border-radius: 4rem;
        box-shadow: inset 0 0 2px rgba(0, 0, 0, .25);
        transition: all .3s ease-out;
        
        &-slider {
            display: block;
            width: 3rem;
            height: 3rem;
            border-radius: 3rem;
            background: #ffffff;
            transition: all .3s ease-out;
        }
    }
    input:checked + .toggle-switch {
        background: $secondary;
    }
    input:checked + .toggle-switch .toggle-switch-slider {
        transform: translateX(2.6rem);
    }
</style>