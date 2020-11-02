<template>
  <div id="items">
    <section id="travel">
      <div id="block">
        <i class="fas fa-ambulance"></i>
      </div>
      <primaryButton :text="'add travel'" />
    </section>

    <section id="aid">
      <div id="block">
        <i class="fas fa-first-aid"></i>
      </div>
      <primaryButton :text="'first aid'" />
    </section>

    <section id="history">
      <div id="block">
        <i class="fas fa-archive"></i>
      </div>
      <primaryButton :text="'travel history'" />
    </section>

    <section id="settings">
      <div id="block">
        <i class="fas fa-cog"></i>
      </div>
      <primaryButton :text="'settings'" />
    </section>
  </div>
</template>

<script>
import primaryButton from '../globalComp/primaryButton'
export default {
  components: {
    primaryButton
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
</style>