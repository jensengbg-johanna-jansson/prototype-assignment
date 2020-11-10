<template>
    <section class="settings-content">
        <h1>Settings</h1>
        <section class="select-language">
            <h4>Select Language</h4>
            <label class="label">English
                <input type="radio" name="lang" value="english" checked>
                <span class="checkmark"></span>
            </label>

            <label class="label">Swahili
                <input type="radio" name="lang" value="swahili">
                <span class="checkmark"></span>
            </label>

            <label class="label">Kikuyu
                <input type="radio" name="lang" value="kikuyu">
                <span class="checkmark"></span>
            </label>

            <label class="label">Luo
                <input type="radio" name="lang" value="luo">
                <span class="checkmark"></span>
            </label>

            <label class="label">Akamba
                <input type="radio" name="lang" value="akamba">
                <span class="checkmark"></span>
            </label>

            <label class="label">Maa
                <input type="radio" name="lang" value="maa">
                <span class="checkmark"></span>
            </label>
        </section>

        <section class="notifications on-off-section">
            <h4>Notifications</h4>
            <label class="label">On
                <input type="radio" name="notify" value="on" checked>
                <span class="checkmark"></span>
            </label>

            <label class="label">Off
                <input type="radio" name="notify" value="off">
                <span class="checkmark"></span>
            </label>
        </section>

        <section class="sound on-off-section">
            <h4>Sound</h4>
            <label class="label">On
                <input type="radio" name="sound" value="on" checked>
                <span class="checkmark"></span>
            </label>

            <label class="label">Off
                <input type="radio" name="sound" value="off">
                <span class="checkmark"></span>
            </label>
        </section>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .settings-content {
        display: grid;
        grid-template-areas: "heading heading"
        "language notifications"
        "language sound";
        justify-items: center;
        //grid-column-gap: 2rem;
        padding: 2rem;
        text-transform: uppercase;
        height: min-content;
        width: 60vw;
    }

    h1 {
        @include headingLarge();
        grid-area: heading;
        margin-bottom: 4rem;
    }

    .select-language {
        grid-area: language;
    }

    .notifications {
        grid-area: notifications;
    }

    .sound {
        grid-area: sound;
    }
    .on-off-section {
        width: 10rem;
    }

    h4 {
        @include subHeading();
        margin-bottom: 1.5rem;
        text-transform: uppercase;
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
        transition: all .3s ease;
    }

    .label input:checked ~ .checkmark {
        background-color: $secondary;
    }

    .label input:hover ~ .checkmark {
        background-color: rgba($color: $secondary, $alpha: .3);
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