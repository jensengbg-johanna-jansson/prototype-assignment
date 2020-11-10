<template>
    <section>
        <Header />
        <section id="container">
            <section class="aside-left">
                <TravelHistorySmallClicked />
            </section>
            <section class="aside-right">
                <TravelHistoryLarge />
            </section>
        </section>
    </section>
</template>

<script>
import Header from "../components/globalComp/Header.vue"
import TravelHistorySmallClicked from "../components/TravelHistorySmallClicked.vue"
import TravelHistoryLarge from "../components/TravelHistoryLarge.vue"

export default {
    components: {
        Header,
        TravelHistorySmallClicked,
        TravelHistoryLarge
    }
}
</script>

<style lang="scss" scoped>
    .aside-left {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        #container {
            display: grid;
            grid-template-columns: 1fr 2fr;
        }

        .aside-left {
            display: block;
            grid-column: 1 / 2;
        }

        .aside-right {
            display: block;
            grid-column: 2 / 3;
        }
    }
</style>