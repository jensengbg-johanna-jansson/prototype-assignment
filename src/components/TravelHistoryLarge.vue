<template>
    <section class="aside-right">
        <section class="history-large">
            <section class="header">
                <img @click="goBack" class="back" src="../assets/back-button.png" alt="Back Button">
                <h1>Travel History</h1>
            </section>
            <section class="patient-id">
                <h2>Travel Information</h2>
                <h4>Patient ID</h4>
                <p>MUM9033_ISS2n_FAC132</p>
                <section class="travel-information">
                    <div class="date">
                        <h4>Date</h4>
                        <p>23/07/2020</p>
                    </div>
                    <div class="start">
                        <h4>Travel Start</h4>
                        <p>13:47</p>
                    </div>
                    <div class="end">
                        <h4>Travel End</h4>
                        <p>14:39</p>
                    </div>
                </section>
            </section>
            <section class="sick-report">
                <h2>Patient Report</h2>
                <section class="patient-report">
                    <div class="pre-eclampsia">
                        <h4>Pre-eclampsia</h4>
                        <p>Patient shows sign of pre-eclampsia</p>
                        <img src="../assets/checkbox.png" alt="Checkbox">
                        <!--<input type="checkbox">-->
                    </div>
                    <div class="severe-bleeding">
                        <h4>Severe Bleeding</h4>
                        <p>Patient is bleeding at time of pick up</p>
                        <img src="../assets/checkbox-checked.png" alt="Checkbox Checked">
                        <!--<input type="checkbox" checked>-->
                        </div>
                    <div class="severe-pain">
                        <h4>Severe Pain</h4>
                        <p>Patient has severe pain in</p>
                        <img src="../assets/checkbox.png" alt="Checkbox">
                        <!--<input type="checkbox">-->
                    </div>
                </section>
            </section>
            <section class="travel-report">
                <h2>Travel Report</h2>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.push({ name: 'TravelHistory' });
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        display: grid;
        grid-template-columns: 1fr 3fr;
        margin-top: 2rem;
    }

    h1 {
        @include headingLarge();
        display: flex;
        margin: 0;
    }

    h2 {
        @include headingSmall();
        display: flex;
        justify-content: center;
        border-bottom: 1px solid $primary;
        width: 14rem;
        margin: auto;
        margin-top: 2rem;
    }

    h4 {
        @include subHeading();
    }

    p {
        display: flex;
        justify-content: flex-start;
        margin-top: 0;
        margin-left: 2rem;
        font-family: $font;
        font-size: $txtsize;
    }

    .travel-information {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .pre-eclampsia {
        display: grid;
        grid-template-columns: 2fr 1fr;
        margin-left: 0.5rem;
    }

    .pre-eclampsia > h4, .pre-eclampsia > p {
        grid-column: 1 / 2;
    }

    .pre-eclampsia > img {
        grid-column: 2 / 3;
        margin-left: 2rem;
        margin-top: 1rem;
        grid-row: 1 / 3;
    }

    .pre-eclampsia > p {
        margin-left: 2rem;
        font-size: 12px;
    }

    .severe-bleeding {
        display: grid;
        grid-template-columns: 2fr 1fr;
        margin-left: 0.5rem;
    }

    .severe-bleeding > h4, .severe-bleeding > p {
        grid-column: 1 / 2;
    }

    .severe-bleeding > img {
        grid-column: 2 / 3;
        margin-left: 2rem;
        margin-top: 1rem;
        grid-row: 1 / 3;
    }

    .severe-bleeding > p {
        margin-left: 2rem;
        font-size: 12px;
    }

    .severe-pain {
        display: grid;
        grid-template-columns: 2fr 1fr;
        margin-left: 0.5rem;
    }

    .severe-pain > h4, .severe-pain > p {
        grid-column: 1 / 2;
    }

    .severe-pain > img {
        grid-column: 2 / 3;
        margin-left: 2rem;
        margin-top: 1rem;
        grid-row: 1 / 3;
    }

    .severe-pain > p {
        margin-left: 2rem;
        font-size: 12px;
    }

    @media only screen and (min-width: 768px) {
        .header {
            display: none;
        }

        .travel-information > .date {
            grid-row: 1 / 2;
        }

        .travel-information > .start, .travel-information > .end {
            grid-row: 2 / 3;
        }

        .history-large {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .patient-id {
            grid-column: 1 / 2;
        }

        .sick-report {
            grid-column: 2 / 3;
        }

        .travel-report {
            grid-column: 1 / 3;
        }
    }
</style>