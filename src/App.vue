<template>
    <router-view />
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;;
}
#app {
  background: $white;
  font-family: $font;
}
.button {
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
