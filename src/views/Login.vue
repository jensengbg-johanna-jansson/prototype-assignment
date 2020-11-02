<template>
  <div id="login">
      <img v-if="!isMobile()" id="logo" src="../assets/logo.png">
      <img v-else id="logo" src="../assets/logo.png" />
      <div class="form-container">
        <input id="driver-id" type="text" placeholder="Driver ID" />
        <input id="password" type="text" placeholder="Password" />
        <primaryButton :text="'log in'" id="btnLogin" @click="login" />
        
      </div>
      <div class="fingerprint-container">
        <p class="sign">Sign in with fingerprint</p>
        <img
          class="fingerprint"
          alt="fingerprint"
          src="../assets/fingerprint.png"
        />
        <p class="touch">Touch the fingerprint sensor</p>
      </div>
  </div>
</template>

<script>
import primaryButton from '../components/globalComp/primaryButton'
export default {
  name: "Login",
  components: {
    primaryButton
  },
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
#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
  min-height: 100vh;

  .form-container, .fingerprint-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #btnLogin {
    margin: 2rem 0;
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
    margin: 1.5rem 0;
    cursor: pointer;
  }

  p {
    font-size: 16px;
  }

  .touch {
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
