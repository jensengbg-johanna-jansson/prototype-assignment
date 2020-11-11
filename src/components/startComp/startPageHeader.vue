<template>
  <div id="startPageHeader">
    <section id="header">
      <div class="new-logo">
        <img class="new-logo-img" src="../../assets/newLogo.png" alt="logo" />
      </div>
      <div class="to-support">
        <p @click="goToSupport()" class="support">Support</p>
      </div>
      <div @click="goToTerms()" class="to-terms">
        <p class="terms">Terms Of Use</p>
      </div>
      <div @click="goToPolicy()" class="to-policy">
        <p class="policy">Data Policy</p>
      </div>
      <div class="acc">
        <button @click="goToSecurity()" class="user-button">
          <i class="far fa-user-circle"></i>
          Account
        </button>
      </div>
      <div class="out">
        <button @click="logOut()" class="user-button">
          <i class="fas fa-sign-out-alt"></i>
          Log out
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goToSupport() {
      this.$router.push({ path: "settings-support" });
    },
    goToTerms() {
      this.$router.push({ path: "settings-about" });
    },
    goToPolicy() {
      this.$router.push({ path: "settings-about" });
    },
    goToSecurity() {
      this.$router.push({ path: "settings-security" });
    },
    logOut() {
      this.$router.push({ path: "login" });
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr 2fr 3fr 3fr;
  grid-template-areas: "new-logo to-support to-terms to-policy . acc out";
  align-items: center;
  column-gap: 1%;
  padding: 5%;

  .new-logo {
    grid-area: new-logo;
    justify-self: start;
    cursor: none;
  }
  .to-support {
    cursor: pointer;
    grid-area: to-support;
    justify-self: center;
  }
  .to-terms {
    cursor: pointer;
    grid-area: to-terms;
    justify-self: center;
  }
  .to-policy {
    cursor: pointer;
    grid-area: to-policy;
    justify-self: center;
  }
  .acc {
    grid-area: acc;
    justify-self: end;
  }
  .out {
    grid-area: out;
    justify-self: end;
  }

  .user-button {
    cursor: pointer;
    width: 8rem;
    height: 2.3rem;
    background-color: $white;
    border-radius: 40px;
    border: none;
    color: #666666;
    font-weight: 500;
    font-family: $font;
    font-size: 12px;
    @include centeredFlex();
    flex-direction: row;

    i {
      font-size: 15px;
      margin-right: 5%;
    }
  }
  .user-button:hover {
    background: $primaryDark;
    color: $white;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
  .user-button:focus {
    outline: none;
  }

  p {
    @include headingLarge();
    font-weight: 500;
    font-size: $placeholdersize;
  }
  p:hover {
    color: $primaryDark;
  }
}
</style>