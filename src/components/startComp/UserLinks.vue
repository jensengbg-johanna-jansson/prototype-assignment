<template>
  <div id="userBlock">
    <section id="acc">
      <img class="acc" alt="account" src="../../assets/account.png" />
      <span class="txt">Account</span>
    </section>

    <section id="out">
      <img
        @click="logOut"
        class="out"
        alt="log out"
        src="../../assets/out.png"
      />
      <span class="txt">Log out</span>
    </section>
  </div>
</template>

<script>
export default {
  name: "Header.vue",
  methods: {
    logOut() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss">
#userBlock {
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin-top: -10rem;

  section {
    display: flex;
    flex-direction: column;
  }

  #acc {
    padding-right: 1rem;
  }
  #out {
    padding-right: 2rem;
  }
  .acc,
  .out {
    width: 3.6rem;
    height: 3.6rem;
    cursor: pointer;
  }

  .txt {
    font-weight: 500;
    font-size: 20px;
  }
}
</style>