<template>
    <section class="pickup">
        <transition name="slide"> 
            <PatientStatus v-if="showPatientStatus" class="pickup-patient-status" />
        </transition>
        <div class="pickup-sidebar">
            <h1 class="heading">Pick up patient</h1>
            <directionsBox :isDropoff="false" class="pickup-mobile" />
            <directionsBoxDesktop :isDropoff="false" class="pickup-desktop" />
            <primaryButton @click="goToCheckSymptoms()" class="pickup-sidebar-button" :text="'pick up'" />
        </div>
        <directionsMap :showHospital="false" class="pickup-map" :class="{ overlay: showPatientStatus}" />
    </section>
</template>

<script>
import directionsMap from '../components/mapComp/map';
import directionsBox from '../components/mapComp/directionsBox';
import directionsBoxDesktop from '../components/mapComp/directionsBoxDesktop';
import primaryButton from '../components/globalComp/primaryButton';
import PatientStatus from '../views/PatientStatus';
export default {
    name: 'Pickup',
    components: {
        directionsMap,
        directionsBox,
        directionsBoxDesktop,
        primaryButton,
        PatientStatus
    },
    data() {
        return {
            isMobile: true,
            showPatientStatus: false
        }
    },
    methods: {
        goToCheckSymptoms() {
            if(this.isMobile == true) {
                this.$router.push({ path: 'patient-status' });
            } else {
                this.showPatientStatus = true;
            }            
        },
        windowResize() {
            let windowWidth = window.innerWidth;

            if(windowWidth < 768) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        }
    },
    created() {
        window.addEventListener('resize', this.windowResize);
        this.windowResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.windowResize);
    },
}
</script>

<style lang="scss" scoped>
    .pickup {
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
        .pickup {
            padding: 0;
            display: flex;
            justify-content: space-between;

            &-patient-status {
                position: absolute;
                top: 0;
                left: 0;
                width: 45vw;
                height: 100vh;
                overflow: scroll;
                z-index: 99;
                box-shadow: 1px 0 3px rgba(0, 0, 0, .25);
            }
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
                transition: all .3s ease;
            }
            .overlay {
                opacity: .2;
            }
        }
        // Page transition
        .slide-enter-active, .slide-leave-active {
            //transform: translateX(-100px);
            transition: all .5s ease;
        }
        .slide-enter-from, .slide-leave-to {
            transform: translateX(-45vw);
        }

    }
</style>