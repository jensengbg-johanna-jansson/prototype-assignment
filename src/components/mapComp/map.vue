<template>
    <div class="map">
        <div class="map-container">
            <div class="map-wrapper">
                <ambualnceMarker class="map-ambulance-marker" />
                <i class="fas fa-map-pin patient-marker"></i>
                <svg width="252" height="527" viewBox="0 0 252 527" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M146.604 526L131.298 513.013L152.099 504.447L204.297 498.368L251 492.289L228.237 441.724L142.287 394.474L26.1177 346.671L1 314.618L50.0581 283.395L137.97 254.658L132.083 239.737L129.728 226.75L113.245 202.987L98.7237 181.158L105.788 170.934L113.245 120.368V110.421L107.358 99.3684L110.498 89.1447L121.487 75.8816V71.7368L122.664 62.6184L133.261 47.9737L141.502 46.3158L148.567 38.3026L149.744 33.6053L146.604 31.3947H136.793H133.261L122.664 25.8684L115.992 18.4079L117.17 11.5L115.992 6.80263L117.17 3.76316L114.422 1H105.396L97.9388 19.2368L103.826 22.8289L101.863 25.0395" />
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
            bottom: 505px;
            left: 90px;
            font-size: 3.125rem;
            color: $primary;
        }
        &-ambulance-marker {
            position: absolute;
            bottom: 505px;
            left: 0;
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
                width: 252px;
                height: 527px;
            }
            .patient-marker {
                left: 36%;
                bottom: 95%;
            }
            &-ambulance-marker {
                left: 0%;
                bottom: 95%;
            }
            &-background {
                display: none;
            }
        }
    }
</style>