<template>
  <div id="mobile-items">
    <section id="sideLeft">
      <div @click="goToFirstAid()" id="mobile-aid">
        <img
          class="mobile-aid"
          alt="first aid"
          src="../../assets/mobile-aid.png"
        />
      </div>
      <div @click="goToTravelHistory()" id="mobile-history">
        <img
          class="mobile-history"
          alt="travel history"
          src="../../assets/mobile-history.png"
        />
      </div>
    </section>
    <section id="mid">
      <div @click="goToAddTravel()" id="mobile-travel">
        <i class="fas fa-motorcycle"></i>
        <span>Add travel</span>
      </div>
    </section>
    <section id="sideRight">
      <div @click="goToSupport()" id="mobile-support">
        <img
          class="mobile-support"
          alt="support"
          src="../../assets/mobile-support.png"
        />
      </div>
      <div @click="goToSettings()" id="mobile-settings">
        <img
          class="mobile-settings"
          alt="settings"
          src="../../assets/mobile-setting.png"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goToAddTravel() {
      this.$router.push({ path: "addtravel" });
    },
    goToTravelHistory() {
      this.$router.push({ path: "travelhistory" });
    },
    goToFirstAid() {
      this.$router.push({ path: "firstaid" });
    },
    goToSupport() {
      this.$router.push({ path: "settings-support" });
    },
    goToSettings() {
      this.$router.push({ path: "settings" });
    },
  },
};
</script>

<style lang="scss">
@media only screen and (max-width: 768px) {
  #sideLeft {
    grid-area: sideLeft;
    justify-self: end;
  }
  #mid {
    grid-area: mid;
    place-self: center;

    #mobile-travel {
      width: 6rem;
      height: 6rem;
      position: relative;
      background-color: $white;
      border-radius: 50px;

      @include centeredFlex();
      flex-direction: column;

      span {
        @include headingSmall();
        color: $primary;
        font-size: 12px;
      }
    }
  }
  #sideRight {
    grid-area: sideRight;
    justify-self: start;
  }
  #mobile-items {
    opacity: 0.9;
    margin-top: 15%;
    display: grid;
    grid-template-columns: 45% 10% 45%;
    grid-template-areas: "sideLeft mid sideRight";

    #sideLeft img,
    #sideRight img {
      width: 9.3rem;
      height: 9.4rem;
    }
    #mid i {
      font-size: 4rem;
      color: $primary;
      position: relative;
    }
  }
}
</style>