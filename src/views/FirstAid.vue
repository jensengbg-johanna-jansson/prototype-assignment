<template>
    <section>
        <Header class="header" :goBack="true"/>
        <Title />
        <SearchBar class="search-bar" />
        <Symptoms />
        <Footer class="footer"/>
    </section>
</template>

<script>
import Header from '../components/globalComp/Header.vue'
import Title from '../components/firstAid/Title.vue'
import SearchBar from '../components/firstAid/SearchBar.vue'
import Symptoms from '../components/firstAid/Symptoms.vue'
import Footer from '../components/startComp/Footer.vue'

export default {
    components: {
        Header,
        Title,
        SearchBar,
        Symptoms,
        Footer
    }
}
</script>

<style lang="scss" scoped>
    .search-bar, .footer {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        .search-bar, .footer {
            display: block;
        }
    }
</style>