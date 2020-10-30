<template>
  <div id="login">
    <section v-if="!isMobile()">
      <Logo />
    </section>
    <section v-else>
      <MobileLogo />
    </section>
    <section id="loginForm">
      <input id="driver-id" type="text" placeholder="Driver ID" />
      <input id="password" type="text" placeholder="Password" />
      <button id="btnLogin" @click="login">log in</button>
      <p class="sign">Sign in with fingerprint</p>
      <img
        class="fingerprint"
        alt="fingerprint"
        src="../assets/fingerprint.png"
      />
      <p class="touch">Touch the fingerprint sensor</p>
    </section>
  </div>
</template>

<script>
import MobileLogo from "@/components/mobileStartComp/MobileLogo.vue";
import Logo from "@/components/startComp/Logo.vue";

export default {
  name: "Login",
  components: { MobileLogo, Logo },
  methods: {
    login() {
      this.$router.push("/");
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
#loginForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

  #btnLogin {
    border-color: $primary;
    background: $primary;
    margin: 5rem;
  }

  input {
    width: 21rem;
    height: 2.25rem;
    border: none;
    border-bottom: 0.125rem solid $primary;
    padding: 0.5rem;
  }
  input:focus {
    outline: none;
    color: $black;
    font-size: 16px;
  }

  .fingerprint {
    width: 5rem;
    height: 6rem;
    cursor: pointer;
  }

  p {
    font-size: 16px;
    margin: 1.5rem;
  }

  .touch {
    color: rgba(0, 0, 0, 0.6);
    margin: 1.7rem;
  }
}
</style>
