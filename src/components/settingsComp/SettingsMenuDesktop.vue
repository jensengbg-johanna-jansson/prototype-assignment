<template>
    <section class="settings-menu-desktop">
        <img src="../../assets/logo.png" alt="">
        <section class="navigation">
            <router-link @click="goToSettings" to="/settings">Settings</router-link>
            <router-link @click="goToSecurity" to="/security">Security</router-link>
            <router-link @click="goToSupport" to="/support">Support</router-link>
            <router-link @click="goToAbout" to="/about">About</router-link>
        </section>
    </section>
</template>

<script>
export default {
    methods: {
        goToSettings() {
            this.$router.push({ path: "settings" });
        },
        goToSecurity() {
            this.$router.push({ path: "security" });
        },
        goToSupport() {
            this.$router.push({ path: "support" });
        },
        goToAbout() {
            this.$router.push({ path: "about" });
        }
    }
}
</script>

<style scoped>
    .settings-menu-desktop {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #F2F2F2;
        height: 100vh;
        width: 100%;
        padding: 1rem;
    }

    .navigation {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    a {
        text-transform: uppercase;
        font-weight: 900;
        padding: 2rem;
        color: #888888;
        text-decoration: none;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        transition: all .3s ease-in;
    }

    a:hover {
        color: #FFFFFF;
        background-color: #EC2329;
    }
</style>