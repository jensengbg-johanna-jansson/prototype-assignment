<template>
    <section class="dropoff">
        <div class="dropoff-sidebar">
            <h1 class="heading">Pick Up Patient</h1>
            <directionsBox :isDropoff="true" class="dropoff-mobile" />
            <directionsBoxDesktop :isDropoff="true" class="dropoff-desktop" />
            <primaryButton @click="goToHome()" class="dropoff-sidebar-button" :text="'drop off'" />
        </div>
        <directionsMap class="dropoff-map" :showHospital="true" />
    </section>
</template>

<script>
import directionsMap from '../components/mapComp/map';
import directionsBox from '../components/mapComp/directionsBox';
import directionsBoxDesktop from '../components/mapComp/directionsBoxDesktop';
import primaryButton from '../components/globalComp/primaryButton';
export default {
    name: 'dropoff',
    components: {
        directionsMap,
        directionsBox,
        directionsBoxDesktop,
        primaryButton
    },
    methods: {
        goToHome() {
            this.$router.push({ path: '/' });
        }
    }
}
</script>

<style lang="scss" scoped>
    .dropoff {
        height: 100vh;
        width: 100vw;
        padding: 2rem .5rem;

        &-sidebar {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            .heading {
                @include headingLarge();
                display: none;
            }
        }
        &-desktop {
            display: none;
        }
        &-mobile {
            display: flex;
        }
        &-map {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }
    }
    @media only screen and (min-width: 768px) {
        .dropoff {
            padding: 0;
            display: flex;
            justify-content: space-between;

            &-sidebar {
                width: 30vw;
                background: #ffffff;
                padding: 2rem 1rem;
                justify-content: flex-start;

                .heading {
                    display: block;
                }
            }
            &-desktop {
                display: block;
            }
            &-mobile {
                display: none;
            }
            &-map {
                position: initial;
            }
        }
    }
</style>