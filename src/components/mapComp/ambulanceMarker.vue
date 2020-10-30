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

        offset-path: path('M104.501 528L93.6209 514.964L108.407 506.365L145.511 500.263L178.709 494.161L162.529 443.403L101.432 395.973L18.8546 347.988L1 315.813L35.8723 284.471L98.3635 255.624L94.1788 240.646L92.5049 227.61L80.7879 203.756L70.4656 181.844L75.4873 171.582L80.7879 120.823V110.838L76.6032 99.7432L78.835 89.4805L86.6464 76.1668V72.0063L87.4833 62.8532L95.0158 48.1526L100.874 46.4884L105.896 38.4447L106.733 33.7295L104.501 31.5105H97.5266H95.0158L87.4833 25.9632L82.7407 18.4742L83.5776 11.54L82.7407 6.82474L83.5776 3.77368L81.6248 1H75.2083L69.9077 19.3063L74.0924 22.9121L72.6975 25.1311');
        animation: animateRouteMarker 10s linear forwards;  
        animation-delay: 3s; 
        
        &-wrapper {
            position: relative;
        }
        &-marker {
            font-size: 1.25rem;
            color: $primary;             
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
            border: 3px solid $secondary;

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