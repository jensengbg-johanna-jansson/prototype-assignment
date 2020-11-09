<template>
    <section id="container">
        <SettingsMenuDesktop class="settings-menu" />
        <ChangeLanguageDesktop class="change-language" />
    </section>
</template>

<script>
import SettingsMenuDesktop from "../components/settingsComp/SettingsMenuDesktop.vue"
import ChangeLanguageDesktop from "../components/settingsComp/ChangeLanguageDesktop.vue"

export default {
    components: {
        SettingsMenuDesktop,
        ChangeLanguageDesktop
    }
}
</script>

<style scoped>
    #container {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    .settings-menu {
        grid-column: 1 / 2;
    }

    .change-language {
        grid-column: 2 / 3;
    }
</style>