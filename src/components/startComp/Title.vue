<template>
  <div id="imgLogo">
    <img class="logo" alt="logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
#title {
  font-size: 36px;
  font-weight: 700;
}
</style>