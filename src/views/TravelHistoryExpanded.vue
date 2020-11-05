<template>
    <section>
        <Header />
        <section id="container">
            <section class="aside-right">
                <TravelHistoryLarge />
            </section>
        </section>
    </section>
</template>

<script>
import Header from "../components/globalComp/Header.vue"
import TravelHistoryLarge from "../components/TravelHistoryLarge.vue"

export default {
    components: {
        Header,
        TravelHistoryLarge
    }
}
</script>

<style lang="scss" scoped>

</style>