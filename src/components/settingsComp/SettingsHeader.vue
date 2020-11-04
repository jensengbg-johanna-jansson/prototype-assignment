<template>
  <div class="header">
    <button @click="goBack">
      <img src="@/assets/left-arrow.svg" alt="back" />
    </button>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    goBack: function() {
      this.$router.push("/settings")
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  margin: 2rem 0rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    top: 0.4rem;
    left: 2rem;
    padding: 0.8rem;
    border: none;
    background: none;
    cursor: pointer;

    img {
      width: 14px;
    }
  }

  h2 {
    text-transform: uppercase;
    align-self: center;
    margin-top: 1rem;
  }
}
</style>
