<template>
    <section class="aside-left">
        <img class="exit-button" @click="goToPage()" src="../assets/close-button.png">
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
                <i class="fas fa-chevron-right arrow"></i>
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
                <i class="fas fa-chevron-right arrow"></i>
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
                <i class="fas fa-chevron-right arrow"></i>
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
                <i class="fas fa-chevron-right arrow"></i>
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
                <i class="fas fa-chevron-right arrow"></i>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    methods: {
        goToExpandedHistory() {
            let viewportWidth = window.innerWidth;
            
            if(viewportWidth < 768) {
                this.$router.push({ path: 'travelhistoryexpanded' });
            } else {
                this.$router.push({ path: '/travelinfo' });
            }
        },
        goToPage() {
            this.$router.push({ path: '/' });
        }

    }
}
</script>

<style lang="scss" scoped>
    .arrow {
        display: none;
    }
    .exit-button {
        display: none;
    }

    h1 {
        @include headingLarge();
    }

    .info {
        padding: 1rem 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        border-bottom: 1px solid $secondary;
        cursor: pointer;
        margin: 0 1.5rem;
    }
    .info:first-child {
        border-top: 1px solid $secondary;
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
        font-size: $txtsize;
        font-family: $font;
    }

    @media only screen and (min-width: 768px) {
        .history-small {
            width: 100%;
        }
        .exit-button {
            display: block;
            position: absolute;
            top: 1rem;
            right: 1rem;
        }
        .exit-button:hover {
            cursor: pointer;
        }

        .info {
            grid-template-columns: max-content max-content 1fr;
            grid-column-gap: .5rem;
            align-items: center;
            transition: all .3s ease;
        }
        .info:hover {
            margin-right: 0;
            background: $primary;
            color: #ffffff
        }

        .info:hover .arrow {
            color: #ffffff;
        }

        .id {
            margin-left: 1rem;
        }

        .arrow {
            display: block;
            grid-column: 3 / 4;
            font-size: 2rem;
            color: $secondary;
            justify-self: end;
            margin-right: 1rem;
            transition: all .2s ease;
        }

        .aside-left {
            height: 100%;
            box-shadow: 2px 0px 2px rgba(0, 0, 0, .25);
            z-index: 99;
            padding-top: 2rem;
            position: relative;
        }
    }
</style>