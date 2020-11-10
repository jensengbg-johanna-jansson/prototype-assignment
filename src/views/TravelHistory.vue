<template>
    <section>
        <Header class="header" />
        <section id="container">
            <section class="aside-left">
                <TravelHistorySmall />
            </section>
            <section class="aside-right">
                <TravelHistoryLarge />
            </section>
        </section>
    </section>
</template>

<script>
import Header from "../components/globalComp/Header.vue"
import TravelHistorySmall from "../components/TravelHistorySmall.vue"
import TravelHistoryLarge from "../components/TravelHistoryLarge.vue"

export default {
    components: {
        Header,
        TravelHistorySmall,
        TravelHistoryLarge
    }
}
</script>

<style lang="scss" scoped>
    #container {
        display: grid;
        grid-template-columns: 1fr;
    }
    .aside-left {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .aside-right {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        #container {
            display: grid;
            grid-template-columns: 1fr 2fr;
        }

        .aside-right {
            display: none;
            /*display: block;
            grid-column: 2 / 3;*/
        }

        .header {
            display: none;
        }
    }
</style>