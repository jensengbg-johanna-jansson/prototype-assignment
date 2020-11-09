<template>
    <section class="settings-desktop">
        <img class="exit-button" @click="goToStartPage()" src="../assets/close-button.png">
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
    },
    methods: {
        goToStartPage() {
            this.$router.push({ path: '/' });
        }
    }
}
</script>

<style scoped>
    .settings-desktop {
        display: grid;
        grid-template-columns: 20rem 1fr;
        justify-items: center;
    }

    .exit-button {
        display: block;
        position: absolute;
        top: 2rem;
        right: 2rem;
    }
    .exit-button:hover {
        cursor: pointer;
    }

    .settings-menu {
        grid-column: 1 / 2;
    }

    .change-language {
        grid-column: 2 / 3;
    }
</style>