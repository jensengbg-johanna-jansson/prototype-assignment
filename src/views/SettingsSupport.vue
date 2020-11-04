<template>
  <div class="wrapper">
    <settingsNav />
    <h2>support</h2>
    <button class="cta">
      call it for help
    </button>
  </div>
</template>

<script>
import SettingsNav from "@/components/SettingsNav.vue"
export default {
  components: {
    SettingsNav,
  },
}
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.wrapper {
  width: 100vw;
  height: 100vh;
  @include flex();

  h2 {
    text-transform: uppercase;
    margin-top: 2rem;
  }

  .cta {
    width: 80%;
    padding: 1rem;
    margin: 2rem 0rem;
    border: none;
    background: #ec2329;
    border-radius: 5rem;
    color: #f2f2f2;
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
