<template>
    <section>
        <section class="top">
            <img class="logo" src="../../assets/logo.png">
            <img class="left" @click="goBack()" src="../../assets/back-button.png">
            <h1>Heatstroke</h1>
            <img class="right" @click="goBack()" src="../../assets/back-button.png">
        </section>
        <section id="grid">
            <section class="info">
                <img class="mobile-img" src="../../assets/heatstroke-img.png">
                <p>Heatstroke occurs when the body fails to regulate its own temperature and body temperature continues to rise, often to 40°C (104°F) or higher. Signs of rapidly progressing heatstroke include:</p>
                <section class="desktop-view-info">
                    <img class="desktop-img" src="../../assets/heatstroke-img.png">
                    <ul class="desktop-ul">
                        <li>Unconsciousness for longer than a few seconds.</li>
                        <li>Convulsion (seizure).</li>
                        <li>Signs of moderate to severe difficulty breathing.</li>
                        <li>A rectal temperature over 40°C (104°F) after exposure to a hot environment.</li>
                        <li>Confusion, severe restlessness, aggressive behaviour or anxiety.</li>
                        <li>Fast heart rate.</li>
                        <li>Sweating that may be heavy or may have stopped.</li>
                        <li>Skin that may be red, pale, hot, and dry, even in the armpits.</li>
                        <li>Severe vomiting and diarrhea.</li>
                    </ul>
                </section>
            </section>
            <span></span>
            <section class="steps">
                <div class="step-grid">
                    <h6>1</h6>
                    <p>Move the person into a cool place, out of direct sunlight.</p>
                </div>
                <div class="step-grid">
                    <h6>2</h6>
                    <p>Remove the person's unnecessary clothing, and place the person on his or her side to expose as much skin surface to the air as possible.</p>
                </div>
                <div class="step-grid">
                    <h6>3</h6>
                    <p>Cool the person's entire body by sponging or spraying cold water, and fan the person to help lower the person's body temperature. Watch for signs of rapidly progressing heatstroke, such as seizure, unconsciousness for longer than a few seconds, and moderate to severe difficulty breathing</p>
                </div>
                <div class="step-grid">
                    <h6>4</h6>
                    <p>Apply ice packs in each armpit and on the back of the person's neck.</p>
                </div>
                <div class="step-grid">
                    <h6>5</h6>
                    <p>If a child has stopped breathing, begin rescue breathing.</p>
                </div>
                <div class="step-grid">
                    <h6>6</h6>
                    <p>Do not give aspirin or acetaminophen to reduce a high body temperature that can occur with heatstroke. These medicines may cause problems because of the body's response to heatstroke.</p>
                </div>
                <div class="step-grid">
                    <h6>7</h6>
                    <p>If the person is awake and alert enough to swallow, give the person fluids [1 L (32 fl oz) to 2 L (64 fl oz) over 1 to 2 hours] for hydration. You may have to help.</p>
                </div>
            </section>
        </section>
        <section class="video">
            <video width="320" height="240" controls autoplay>
                <source src="https://youtu.be/jvGC_dQJUtE" type="">
            </video>
        </section>
    </section>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.push({ path: 'firstaid' });
        }
    }
}
</script>

<style lang='scss' scoped>
    .logo {
        display: none;
    }

    .top {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .left {
        grid-column: 1 / 2;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    .right {
        display: none;
    }

    h1 {
        grid-column: 2 / 3;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 2rem;
        text-transform: capitalize;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    #grid {
        display: grid;
        grid-template-columns: 1fr 10px 1fr;
        padding: 2rem;
    }

    .mobile-img {
        margin: 1rem;
        margin-left: 0;
    }

    .desktop-img {
        display: none;
    }

    .info {
        grid-column: 1 / 2;
    }

    .info p {
        margin-bottom: 2rem;
    }

    li {
        margin-bottom: 1rem;
    }

    span {
        grid-column: 2 / 3;
        width: 0.2rem;
        height: 100%;
        background-color: $secondary;
        border: 1px solid $secondary;
        margin: auto;
        margin-top: 0;
        margin-bottom: 0;
    }

    .steps {
        grid-column: 3 / 4;
    }

    .step-grid {
        display: grid;
        grid-template-columns: 5rem 10rem;
    }

    .step-grid h6 {
        grid-column: 1 / 2;
        margin: auto;
        margin-top: 0;
    }

    h6 {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $primary;
        height: 2rem;
        width: 2rem;
        color: $secondary;
        font-size: $subtitlesize;
        box-shadow: inset 0px 0px 2px 2px rgba(236, 35, 41, 0.5);
        border-radius: 3px;
    }

    .step-grid p {
        grid-column: 2 / 3;
    }

    p {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .video video {
        display: block;
        margin: auto;
        margin-bottom: 6rem;
    }

    @media only screen and (min-width: 768px) {
        .left {
            display: none;
        }

        .top {
            display: grid;
            grid-template-columns: 1fr;
            cursor: pointer;
        }

        .logo {
            display: block;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
        }

        .right {
            display: block;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            margin: auto;
            margin-top: 4rem;
            margin-right: 2rem;
        }

        h1 {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            display: flex;
            justify-content: center;
        }

        .step-grid {
            display: grid;
            grid-template-columns: 5rem 34rem;
            padding: 1rem;
        }

        .mobile-img {
            display: none;
        }

        .desktop-img {
            display: block;
            height: 10rem;
            margin: auto;
            margin-top: 2rem;
            margin-right: 2rem;
        }

        .desktop-view-info {
            display: flex;
            padding: 2rem;
        }

        .desktop-ul {
            padding: 2rem;
            padding-left: 4rem;
        }

        .video img {
            display: block;
            margin: auto;
            width: 40rem;
        }
    }
</style>