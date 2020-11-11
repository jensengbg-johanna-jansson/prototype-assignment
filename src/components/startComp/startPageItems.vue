<template>
  <div id="startPageItems">
    <section id="items">
      <section @click="goToAddTravel()" id="travel">
        <div id="block">
          <i class="fas fa-motorcycle"></i>
        </div>
        <primaryButton class="btns" :text="'add travel'" />
      </section>

      <section @click="goToFirstAid()" id="aid">
        <div id="block">
          <i class="fas fa-first-aid"></i>
        </div>
        <primaryButton class="btns" :text="'first aid'" />
      </section>

      <section @click="goToTravelHistory()" id="history">
        <div id="block">
          <i class="fas fa-archive"></i>
        </div>
        <primaryButton class="btns" :text="'travel history'" />
      </section>

      <section @click="goToSettings()" id="settings">
        <div id="block">
          <i class="fas fa-cog"></i>
        </div>
        <primaryButton class="btns" :text="'settings'" />
      </section>
    </section>
  </div>
</template>

<script>
import primaryButton from "../globalComp/primaryButton";
export default {
  components: {
    primaryButton,
  },
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
    goToSettings() {
      this.$router.push({ path: "settings" });
    },
  },
};
</script>

<style lang="scss" scoped>
#items {
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding-top: 5%;

  .btns {
    cursor: pointer;
    background: $white;
    color: #2f2f2f;
    font-size: $placeholdersize;
    font-weight: 500;
  }

  section:hover {
    cursor: pointer;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
  section:hover i {
    color: $primary;
  }
  section:hover .btns {
    color: $white;
    background-color: $primary;
  }
}
#block {
  @include centeredFlex();
  margin: 1.5rem;

  i {
    font-size: 4.5rem;
    color: $white;
  }
}
</style>