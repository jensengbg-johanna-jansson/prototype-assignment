<template>
    <section class="pickup">
        <directionsBox />
        <primaryButton class="pickup-button" :text="'pick up'" />
        <directionsMap class="pickup-map" />
    </section>    
</template>

<script>
import directionsMap from '../components/mapComp/map';
import directionsBox from '../components/mapComp/directionsBox';
import primaryButton from '../components/globalComp/primaryButton';
export default {
    name: 'Pickup',
    components: {
        directionsMap,
        directionsBox,
        primaryButton
    }
}
</script>

<style lang="scss" scoped>
    .pickup {
        height: 100vh;
        width: 100vw;
        display: flex;
        padding: 2rem .5rem;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        
        &-map {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }       
    }
</style>