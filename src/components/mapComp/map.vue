<template>
    <div class="map">
        <div class="map-container">
            <div class="map-wrapper">
                <ambualnceMarker 
                class="map-ambulance-marker" 
                :isDropoff="showHospital" />
                <i v-if="showHospital" class="fas fa-hospital-symbol hospital-marker"></i>
                <i v-else class="fas fa-map-pin patient-marker"></i>
                <svg width="180" height="529" viewBox="0 0 180 529" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M104.501 528L93.6209 514.964L108.407 506.365L145.511 500.263L178.709 494.161L162.529 443.403L101.432 395.973L18.8546 347.988L1 315.813L35.8723 284.471L98.3635 255.624L94.1788 240.646L92.5049 227.61L80.7879 203.756L70.4656 181.844L75.4873 171.582L80.7879 120.823V110.838L76.6032 99.7432L78.835 89.4805L86.6464 76.1668V72.0063L87.4833 62.8532L95.0158 48.1526L100.874 46.4884L105.896 38.4447L106.733 33.7295L104.501 31.5105H97.5266H95.0158L87.4833 25.9632L82.7407 18.4742L83.5776 11.54L82.7407 6.82474L83.5776 3.77368L81.6248 1H75.2083L69.9077 19.3063L74.0924 22.9121L72.6975 25.1311" stroke="black"/>
                </svg>

            </div>
        </div>
        <img class="map-background" src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/36.7513,-1.1549,13,0/375x812?access_token=pk.eyJ1IjoieW9uYWNoYW4iLCJhIjoiY2tnczN5a3VxMGhiaDJza3llNThvYjk3cyJ9.pUv4uQYDSqmDFemCkw3HYA" alt="">
    </div>
</template>

<script>
import ambualnceMarker from '../mapComp/ambulanceMarker'
export default {
    name: 'directionsMap',
    components: {
        ambualnceMarker
    },
    props: {
        showHospital: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .map {
        @include centeredFlex();
        height: 100vh;
        width: 100vw;

        &-wrapper {
            position: relative;
        }

        svg {
            path {
                stroke: $secondary; 
                stroke-width: 5px; 
            }
        }
        .patient-marker {
            position: absolute;
            bottom: 508px;
            left: 61px;
            font-size: 3.125rem;
            color: $primary;
        }
        .hospital-marker {
            position: absolute;
            bottom: -5px;
            left: 90px;
            font-size: 1.75rem;
            color: $primary;
            background: #ffffff;
            border-radius: 4rem;
        }
        &-ambulance-marker {
            position: absolute;
            bottom: 505px;
            left: 0;
            z-index: 1;
        }
        &-background {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }
    }
    @media only screen and (min-width: 768px) {
        .map {
            width: 70vw;
            background-image: url("https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/36.751,-1.155,13,0/1082x720?access_token=pk.eyJ1IjoieW9uYWNoYW4iLCJhIjoiY2tnczN5a3VxMGhiaDJza3llNThvYjk3cyJ9.pUv4uQYDSqmDFemCkw3HYA");
            background-repeat: no-repeat;
            background-position: center;

            &-container {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            &-wrapper {
                width: 180px;
                height: 527px;
            }
            .patient-marker {
                left: 34%;
                bottom: 95%;
            }
            &-ambulance-marker {
                left: 0;
                bottom: 95%;
            }
            &-background {
                display: none;
            }
        }
    }
</style>