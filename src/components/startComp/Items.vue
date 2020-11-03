<template>
  <div id="items">
    <section @click="goToAddTravel()" id="travel">
      <div id="block">
        <i class="fas fa-ambulance"></i>
      </div>
      <button class="btnTo button">add travel</button>
    </section>

    <section @click="goToFirstAid()" id="aid">
      <div id="block">
        <i class="fas fa-first-aid"></i>
      </div>
      <button class="btnTo button">first aid</button>
    </section>

    <section @click="goToTravelHistory()" id="history">
      <div id="block">
        <i class="fas fa-archive"></i>
      </div>
      <button class="btnTo button">travel history</button>
    </section>

    <section @click="goToSettings()" id="settings">
      <div id="block">
        <i class="fas fa-cog"></i>
      </div>
      <button class="btnTo button">settings</button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goToAddTravel() {
      this.$router.push({ path: 'addtravel' });
    },
    goToTravelHistory() {
      this.$router.push({ path: 'travelhistory' });
    },
    goToFirstAid() {
      this.$router.push({ path: 'firstaid' });
    },
    goToSettings() {
      this.$router.push({ path: 'settings' });
    }
  }
}
</script>

<style lang="scss">
#items {
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-top: 10%;
  margin-bottom: 10%;
  padding: 5rem;

  section:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
}

#block {
  display: flex;
  margin: 1.5rem;
  width: 10rem;
  height: 9.5rem;
  border-radius: 1.5rem;
  background-color: $primary;

  i {
    font-size: 4.5rem;
    color: $white;
    margin: 25%;
  }
}

.btnTo {
  border-color: $primary;
  background: $primary;
}
</style>