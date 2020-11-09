<template>
    <section id="container">
        <h4>Eezer App</h4>
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
    #container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 10rem 1fr;
        background-color: #F2F2F2;
        height: 50rem;
        width: 20rem;
    }

    /*.title {
        background-color: #FFFFFF;
        width: 10rem;
        height: 2rem;
        border-radius: 2rem;
    }*/

    h4 {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #EC2329;
        font-size: 1.25rem;
        background-color: #FFFFFF;
        width: 10rem;
        height: 3rem;
        border-radius: 2rem;
        margin: auto;
    }

    .navigation {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    a {
        margin: 2rem;
        color: #888888;
        text-decoration: none;
    }

    a:hover {
        color: #FFFFFF;
        background-color: #EC2329;
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a:focus {
        color: #FFFFFF;
        background-color: #EC2329;
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>