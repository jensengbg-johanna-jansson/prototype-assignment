<template>
  <nav>
    <h3>eezer app</h3>
    <button class="exit" @click="toStartPage">
      <img src="@/assets/exit.svg" alt="" />
    </button>
  </nav>
</template>

<script>
export default {
  name: "Settings navbar",
  methods: {
    toStartPage: function() {
      this.$router.push("/")
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;

  h3 {
    color: #2f2f2f;
    text-transform: uppercase;
  }

  button {
    background: #ec2329;
    padding: 1rem;
    border: none;
    border-radius: 5rem;
    transition: all 0.4s ease;
    cursor: pointer;
  }
}
</style>
