<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: "SettingTitle",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  display: flex;
  justify-content: center;
  padding: 3%;
  @include headingLarge();
}
</style>