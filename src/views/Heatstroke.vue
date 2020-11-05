<template>
    <section>
        <Header class="header"/>
        <HeatstrokeSymptoms />
    </section>
</template>

<script>
import Header from '../components/globalComp/Header.vue'
import HeatstrokeSymptoms from '../components/firstAid/HeatstrokeSymptoms.vue'

export default {
    components: {
        Header,
        HeatstrokeSymptoms
    }
}
</script>

<style lang='scss' scoped>

</style>