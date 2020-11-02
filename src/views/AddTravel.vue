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
        width: 10rem;
        margin: 1rem;
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
        padding: 0.5rem;
        margin: 1rem;
    }

    .input-text:focus {
        outline:none;
    }

    ::placeholder {
        color: $txtcolor;
        opacity: 50%;
        font-size: $placeholdersize;
    }

    #submit-button {
        border-radius: $borderradius;
        margin-top: 4rem;
        background-color: $primary;
        border: none;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        height: 3rem;
        width: 10rem;
        padding: 1rem;
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
            margin-right: 4rem;
        }

        .coordinates-view {
            margin-left: 4rem;
        }

        .input-text {
            width: 30rem;
            margin-bottom: 2rem;
        }

        h4 {
            margin-bottom: 4rem;
        }
    }
</style>
