<template>
    <section id="container">
        <h1>Settings</h1>
        <section class="select-language">
            <h4>Select Language</h4>
            <label class="label">English
                <input class="checkbox" type="checkbox" value="english">
                <span class="checkmark english"></span>
            </label>

            <label class="label">Swahili
                <input type="checkbox" value="swahili">
                <span class="checkmark"></span>
            </label>

            <label class="label">Kikuyu
                <input type="checkbox" value="kikuyu">
                <span class="checkmark"></span>
            </label>

            <label class="label">Luo
                <input type="checkbox" value="luo">
                <span class="checkmark"></span>
            </label>

            <label class="label">Akamba
                <input type="checkbox" value="akamba">
                <span class="checkmark"></span>
            </label>

            <label class="label">Maa
                <input type="checkbox" value="maa">
                <span class="checkmark"></span>
            </label>
        </section>

        <section class="notifications">
            <h4>Notifications</h4>
            <label class="label">On
                <input type="checkbox" value="on">
                <span class="checkmarks on"></span>
            </label>

            <label class="label">Off
                <input type="checkbox" value="off">
                <span class="checkmarks"></span>
            </label>
        </section>

        <section class="sound">
            <h4>Sound</h4>
            <label class="label">On
                <input type="checkbox" value="on">
                <span class="checkmarks on"></span>
            </label>

            <label class="label">Off
                <input type="checkbox" value="off">
                <span class="checkmarks"></span>
            </label>
        </section>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #container {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 2rem;
    }

    h1 {
        grid-column: 1 / 3;
        @include headingLarge();
        margin-bottom: 4rem;
        margin-right: 8rem;
    }

    .select-language {
        grid-column: 1 / 2;
        grid-row: 2 / 4;
    }

    .notifications {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }

    .sound {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
        margin-top: 2rem;
    }

    h4 {
        @include subHeading();
        margin-bottom: 2rem;
    }

    .label {
        display: block;
        position: relative;
        margin-bottom: 2rem;
        cursor: pointer;
        font-size: 14px;
    }

    .label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        left: 5rem;
        height: 1rem;
        width: 1rem;
        border-radius: 1rem;
        background-color: #C4C4C4;
    }

    .checkmarks {
        position: absolute;
        left: 23rem;
        height: 1rem;
        width: 1rem;
        border-radius: 1rem;
        background-color: #C4C4C4;
    }

    .english, .on {
        background-color: $secondary;
    }

    .label input:checked ~ .checkmark {
        background-color: $secondary;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .label input:checked ~ .checkmark:after {
        display: none;
    }
</style>