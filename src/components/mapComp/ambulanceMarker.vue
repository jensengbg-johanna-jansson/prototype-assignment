<template>
    <div class="ambulance">
        <div class="ambualnce-wrapper">
            <i class="fas fa-ambulance ambulance-marker"></i>
            <span class="pulse"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ambulanceMarker'
}
</script>

<style lang="scss" scoped>
    .ambulance {
        offset-rotate: 0deg;

        offset-path: path('M146.604 526L131.298 513.013L152.099 504.447L204.297 498.368L251 492.289L228.237 441.724L142.287 394.474L26.1177 346.671L1 314.618L50.0581 283.395L137.97 254.658L132.083 239.737L129.728 226.75L113.245 202.987L98.7237 181.158L105.788 170.934L113.245 120.368V110.421L107.358 99.3684L110.498 89.1447L121.487 75.8816V71.7368L122.664 62.6184L133.261 47.9737L141.502 46.3158L148.567 38.3026L149.744 33.6053L146.604 31.3947H136.793H133.261L122.664 25.8684L115.992 18.4079L117.17 11.5L115.992 6.80263L117.17 3.76316L114.422 1H105.396L97.9388 19.2368L103.826 22.8289L101.863 25.0395');
        animation: animateRouteMarker 10s linear forwards;  
        animation-delay: 3s; 
        
        &-wrapper {
            position: relative;
        }
        &-marker {
            font-size: 1.25rem;
            color: $primaryColor;             
        }
        .pulse {
            position: absolute;
            top: -.5rem;
            left: -.25rem;
            z-index: -1;
            display: block;
            width: 2rem;
            height: 2rem;
            border-radius: 5rem;
            border: 3px solid $secondaryColor;
            //background: rgba($color: $secondaryColor, $alpha: .5);

            animation: pulse 2s ease-in-out infinite;
        }
    }
    @keyframes animateRouteMarker {
        100% { 
            motion-offset: 100%;
            offset-distance: 100%;
        }
    }
    @keyframes pulse {
        0% {
            transform: scale(0, 0);
            opacity: 1;
        }
        50% {
            opacity: 1; 
        }
        100% { 
            transform: scale(1.5, 1.5);
            opacity: 0;
        }
    }
</style>