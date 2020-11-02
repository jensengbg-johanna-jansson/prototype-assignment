<template>
  <div id="mobile-items">
    <section id="sideLeft">
      <div id="mobile-aid">
        <img
          class="mobile-aid"
          alt="first aid"
          src="../../assets/mobile-aid.png"
        />
      </div>
      <div id="mobile-history">
        <img
          class="mobile-history"
          alt="travel history"
          src="../../assets/mobile-history.png"
        />
      </div>
    </section>
    <section id="mid">
      <div id="mobile-travel">
        <img
          class="mobile-travel"
          alt="add travel"
          src="../../assets/mobile-travel.png"
        />
      </div>
    </section>
    <section id="sideRight">
      <div id="mobile-support">
        <img
          class="mobile-support"
          alt="support"
          src="../../assets/mobile-support.png"
        />
      </div>
      <div id="mobile-settings">
        <img
          class="mobile-settings"
          alt="settings"
          src="../../assets/mobile-setting.png"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@media only screen and (max-width: 768px) {
  #sideLeft {
    grid-area: sideLeft;
    justify-self: end;
  }
  #mid {
    grid-area: mid;
    place-self: center;
  }
  #sideRight {
    grid-area: sideRight;
    justify-self: start;
  }
  #mobile-items {
    margin: 2rem;
    display: grid;
    grid-template-columns: 45% 10% 45%;
    grid-template-areas: "sideLeft mid sideRight";

    #sideLeft img,
    #sideRight img {
      width: 9.3rem;
      height: 9.4rem;
    }
    #mid img {
      width: 7rem;
      height: 7rem;
      position: relative;
    }
  }
}
</style>