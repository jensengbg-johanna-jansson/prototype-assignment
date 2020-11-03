<template>
  <transition name="fade">
    <NewPatient v-if="openPopUP" @closeNotice="popUp" class="pop-overlay" />
  </transition>
  <button @click="popUp" class="btn-pop"></button>
  <router-view />
</template>

<script>
import NewPatient from "@/views/NewPatient.vue";

export default {
  name: "App",
  components: { NewPatient },
  data: () => {
    return {
      openPopUP: false,
    };
  },
  methods: {
    popUp() {
      console.log("wtf")
      if (this.openPopUP === true) {
        this.openPopUP = false;
      } else {
        this.openPopUP = true;
      }
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $txtcolor;
}

//just for test
.btn-pop {
  background-color: blue;
  cursor: pointer;
}
.pop-overlay {
  height: 100vh;
  position: absolute;
  background-color: #000000e0;
  z-index: 1;
}
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.2s;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0,5;
// }
</style>
