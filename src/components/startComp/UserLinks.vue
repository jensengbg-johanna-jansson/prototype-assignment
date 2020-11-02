<template>
  <div id="userBlock">
    <button class="user-button">
      <img class="acc" alt="account" src="../../assets/account.png" />
      Account
    </button>   
    <button class="user-button">
      <img
        @click="logOut"
        class="out"
        alt="log out"
        src="../../assets/out.png"
      />
      Log out
    </button>
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
  .user-button {
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
    font-weight: 500;
    font-size: 20px;
  }
  .acc,
  .out {
    width: 3.6rem;
    height: 3.6rem;
    cursor: pointer;
  }
}
</style>