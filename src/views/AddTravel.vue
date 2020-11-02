<template>
    <section class="add-travel-container">
        <h1>Add Travel</h1>
        <section class="desktop-view">
            <section class="patient-view">
                <div class="subtitle">
                    <h4>Patient</h4>
                </div>
                <form class="form">
                    <primaryInput :placeholder="'Firstname'" />
                    <primaryInput :placeholder="'Lastname'" />
                </form>
            </section>

            <section class="coordinates-view">
                <div class="subtitle">
                    <h4>Coordinates</h4>
                </div>
                <form class="form">
                    <primaryInput :placeholder="'Coordinates'" />
                </form>
            </section>
        </section>
        <primaryButton :text="'Add'" />
    </section>
</template>

<script>
import primaryButton from '../components/globalComp/primaryButton';
import primaryInput from '../components/globalComp/primaryInput';
export default {
    components: {
        primaryButton,
        primaryInput
    }
}
</script>

<style lang="scss" scoped>
    .add-travel-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        @include headingLarge();
    }

    .subtitle {
        display: flex;
        justify-content: center;
    }

    h4 {
        @include headingSmall();
        border-bottom: 1px solid $primary;
        width: 10rem;
    }

    .form {
        display: flex;
        justify-content: center;
        flex-direction: column;
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
            margin-bottom: 2rem;
        }

        h4 {
            margin-bottom: 4rem;
        }
    }
</style>
