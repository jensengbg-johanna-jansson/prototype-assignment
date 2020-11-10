<template>
    <section class="aside-left">
        <img class="logo" src="../assets/logo.png">
        <h1>Travel History</h1>
        <section class="history-small">
            <section @click="goToExpandedHistory()"
                class="info selected">
                <div class="id select">
                    <h4>Patient ID</h4>
                    <p>MUM9033_ISS2n_FAC132</p>
                </div>
                <div class="date select">
                    <h4>Travel Date</h4>
                    <p>23/07/2020</p>
                </div>
                <div class="img">
                    <img class="arrow select" src="../assets/arrow-white.png" alt="Arrow">
                </div>
            </section>
            <section class="info">
                <div class="id">
                    <h4>Patient ID</h4>
                    <p>MUM3267_ISS2n_FAC132</p>
                </div>
                <div class="date">
                    <h4>Travel Date</h4>
                    <p>22/07/2020</p>
                </div>
                <div class="img">
                    <img class="arrow" src="../assets/arrow.png" alt="Arrow">
                </div>
            </section>
            <section class="info">
                <div class="id">
                    <h4>Patient ID</h4>
                    <p>MUM7090_ISS1n_FAC183</p>
                </div>
                <div class="date">
                    <h4>Travel Date</h4>
                    <p>20/07/2020</p>
                </div>
                <div class="img">
                    <img class="arrow" src="../assets/arrow.png" alt="Arrow">
                </div>
            </section>
            <section class="info">
                <div class="id">
                    <h4>Patient ID</h4>
                    <p>MUM7720_ISS2n_FAC132</p>
                </div>
                <div class="date">
                    <h4>Travel Date</h4>
                    <p>09/07/2020</p>
                </div>
                <div class="img">
                    <img class="arrow" src="../assets/arrow.png" alt="Arrow">
                </div>
            </section>
            <section class="info">
                <div class="id">
                    <h4>Patient ID</h4>
                    <p>MUM2983_ISS1n_FAC183</p>
                </div>
                <div class="date">
                    <h4>Travel Date</h4>
                    <p>29/06/2020</p>
                </div>
                <div class="img">
                    <img class="arrow" src="../assets/arrow.png" alt="Arrow">
                </div>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    methods: {
        goToExpandedHistory() {
            this.$router.push({ path: 'travelhistoryexpanded' });
        }
    }
}
</script>

<style lang="scss" scoped>
    .arrow {
        display: none;
    }

    h1 {
        @include headingLarge();
    }

    .history-small {
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        border-top: 1px solid $secondary;
        border-bottom: 1px solid $secondary;
        cursor: pointer;
    }

    .id {
        display: grid;
        grid-column: 1 / 2;
        justify-content: center;
    }

    .date {
        display: grid;
        grid-column: 2 / 3;
        justify-content: center;
    }

    h4 {
        @include subHeading();
    }

    p {
        margin: 0;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: $txtsize;
        font-family: $font;
    }

    @media only screen and (min-width: 768px) {
        .logo {
            display: block;
            margin: auto;
        }

        .info {
            grid-template-columns: 1fr 1fr 1fr;
        }

        .id {
            margin-left: 1rem;
        }

        .selected {
            background-color: #C61E23;
            color: white;
        }

        .arrow {
            display: flex;
            grid-column: 3 / 4;
            margin: 2rem;
        }

        .select {
            margin-left: 6rem;
            margin-right: 0;
        }

        .aside-left {
            height: 100%;
            box-shadow: 2px 0px 2px 2px;
        }
    }
</style>