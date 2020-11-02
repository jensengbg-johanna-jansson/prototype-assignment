<template>
    <section>
        <h1>Add Travel</h1>
        <section class="desktop-view">
            <section class="patient-view">
                <div class="subtitle">
                    <h4>Patient</h4>
                </div>
                <form class="form">
                    <input
                        id="first-name"
                        class="input-text"
                        type="text"
                        name="name"
                        placeholder="Firstname"
                    >

                    <input
                        id="last-name"
                        class="input-text"
                        type="text"
                        name="name"
                        placeholder="Lastname"
                    >
                </form>
            </section>

            <section class="coordinates-view">
                <div class="subtitle">
                    <h4>Coordinates</h4>
                </div>
                <form class="form">
                    <input
                        id="coordinates"
                        class="input-text"
                        name="coordinates"
                        type="text"
                        placeholder="Coordinates"
                    >
                </form>
            </section>
        </section>
        <button id="submit-button">Add</button>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    h1 {
        color: $txtcolor;
        font-family: $font;
        font-size: $titlesize;
    }

    .subtitle {
        display: flex;
        justify-content: center;
    }

    h4 {
        color: $txtcolor;
        font-family: $font;
        font-size: $subtitlesize;
        border-bottom: 1px solid $primary;
        width: 10em;
        margin: 1em;
        text-transform: uppercase:
    }

    .form {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .input-text {
        border: none;
        border-bottom: 2px solid $primary;
        padding: 0.5em;
        margin: 1em;
    }

    ::placeholder {
        color: $txtcolor;
        opacity: 50%;
        font-size: $placeholdersize;
    }

    #submit-button {
        border-radius: $borderradius;
        margin-top: 4em;
        background-color: $primary;
        border: none;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        height: 3em;
        width: 10em;
        padding: 1em;
        text-transform: uppercase;
        color: $buttontextcolor;
        font-size: $buttontextsize;
    }

    @media only screen and (min-width: 768px) {
        .desktop-view {
            display: flex;
            justify-content: center;
        }

        .patient-view {
            margin-right: 4em;
        }

        .coordinates-view {
            margin-left: 4em;
        }

        .input-text {
            width: 30em;
            margin-bottom: 2em;
        }

        h4 {
            margin-bottom: 4em;
        }
    }
</style>
