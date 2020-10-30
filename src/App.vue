<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  // methods: {
  //     isMobile() {
  //         if( screen.width <= 760 ) {
  //             return true;
  //         }
  //         else {
  //             return false;
  //         }
  //     }
  // },
  // created() {
  //     if (this.isMobile()) {
  //       this.$router.push('/');
  //     }
  //     else {
  //       this.$router.push('/login');
  //     }
  // }
}
</script>

<style lang="scss">
#app {
  // display: flex;
  // flex-direction: column;

  min-height: 100vh;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  background: $white;
  font-family: $font;
  color: $black;
}
button {
  width: 13.5rem;
  height: 2.5rem;
  
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 6rem;

  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  color: $white;
  cursor: pointer;
}
</style>
