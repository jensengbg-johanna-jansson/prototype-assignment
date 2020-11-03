<template>
  <nav>
    <h2>eezer app</h2>
    <button class="exit">
      <img src="@/assets/exit.svg" alt="" />
    </button>
  </nav>
</template>

<script>
export default {
  name: "Settings navbar",
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;

  h2 {
    color: #2f2f2f;
  }

  button {
    background: #ec2329;
    opacity: 0.6;
    padding: 1rem;
    border: none;
    border-radius: 5rem;
    transition: all 0.4s ease;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
