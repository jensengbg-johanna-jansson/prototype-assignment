<template>
    <section>
        <section class="travel-history-container">
            <TravelHistorySmall class="travel-history-left" />
            <section class="aside-right">
                <router-view></router-view>
            </section>
        </section>
    </section>
</template>

<script>
import TravelHistorySmall from "../components/TravelHistorySmall.vue"

export default {
    components: {
        TravelHistorySmall,
    },
}
</script>

<style lang="scss" scoped>
    .travel-history-container {
        display: grid;
        grid-template-columns: 1fr;
        height: 100vh;
    }
    .travel-history-left {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .aside-right {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        .travel-history-container {
            display: grid;
            grid-template-columns: 25rem 1fr;
        }

        .aside-right {
            display: block;
            background: rgba($color: #c4c4c4, $alpha: .03);
        }
    }
</style>