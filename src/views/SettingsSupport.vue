<template>
  <div class="wrapper">
    <settingsNav />
    <SettingsHeader title="support" />

    <button class="cta" @click="callFunc">
      call it for help
    </button>
  </div>
</template>

<script>
import SettingsNav from "@/components/settingsComp/SettingsNav.vue"
import SettingsHeader from "@/components/settingsComp/SettingsHeader.vue"

export default {
  components: {
    SettingsNav,
    SettingsHeader,
  },

  methods: {
    callFunc: function() {
      this.$router.push("/phonecall")
    },
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
    background: #efefef;
    padding: 1rem 0.5rem;
    margin: 2rem 0rem;
    width: 80%;
    border-radius: 6rem;
    border: none;
    text-transform: uppercase;
    color: #222;
    font-weight: bold;
    transition: all 0.4s ease;
    cursor: pointer;

    &:hover {
      background: #ec2329;
      color: #fefefe;
    }
  }
}
</style>
