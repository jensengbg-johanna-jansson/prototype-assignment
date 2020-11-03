<template>
    <section id="container">
        <div @click="goToHeatstroke()" class="symptoms">
            <h4>Heatstroke</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Pre-Eclampsia</h4>
        </div>
        <div class="symptoms">
            <h4>Sever Pain</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Animal Bites</h4>
        </div>
        <div class="symptoms">
            <h4>Food Poisoning</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Sever Bleeding</h4>
        </div>
        <div class="symptoms">
            <h4>Hypothermia</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Cuts and Wounds</h4>
        </div>
        <div class="symptoms">
            <h4>Nosebleeds</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Vertigo</h4>
        </div>
        <div class="symptoms">
            <h4>Bruises</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Broken Toe</h4>
        </div>
        <div class="symptoms">
            <h4>Choking</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Abdominal Pain</h4>
        </div>
        <div class="symptoms">
            <h4>Frostbite</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Burns</h4>
        </div>
        <div class="symptoms">
            <h4>Insect Bites & Stings</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Heart Palpations</h4>
        </div>
        <div class="symptoms">
            <h4>Sunburn</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Pulled Muscles</h4>
        </div>
        <div class="symptoms">
            <h4>Stroke</h4>
        </div>
        <span></span>
        <div class="symptoms">
            <h4>Sprains</h4>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        goToHeatstroke() {
            this.$router.push({ path: 'heatstroke' });
        }
    }
}
</script>

<style lang="scss" scoped>
    #container {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 2rem;
    }

    .symptoms {
        border: 1px solid $primary;
        @include centeredFlex();
        width: 8rem;
        height: 4rem;
        margin: auto;
        @include subHeading();
        cursor: pointer;
    }

    span {
        height: 4rem;
        width: 0.2rem;
        background-color: $secondary;
        border: 1px solid $secondary;
    }

    @media only screen and (min-width: 768px) {
        .symptoms {
            width: 12rem;
            height: 6rem;
        }

        span {
            display: none;
        }
    }
</style>