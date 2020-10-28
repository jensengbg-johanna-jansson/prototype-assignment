<template>
  <div id="app">
    <div id="imgLogo">
      <img class="logo" alt="logo" src="../src/assets/logo.png">
    </div>
    <router-view />
    <footer>
      <ul id="footerLinks">
        <li>
          <img class="support" alt="support" src="../src/assets/support.png">
          Support
        </li>
        <li>
          <img class="terms" alt="terms" src="../src/assets/terms.png">
          Terms Of Use
        </li>
        <li>
          <img class="policy" alt="policy" src="../src/assets/policy.png">
          Data Policy
        </li>
      </ul>
    </footer>

  </div>
</template>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  background: $white;

  max-width: 100vw;
  height: auto;
  font-family: $font;

    .logo {
      margin-left: 2rem;
    }

    footer {
      display: flex;
      justify-content: center;
      // display: grid;
      // justify-items: center;

      background: rgba(206, 203, 203, 0.5);
      height: 17rem;

      

        #footerLinks {
          // display: grid;
          // grid-template-columns: 1fr 1fr 1fr;
          // align-content: center;

          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        li {
          align-self: center;

          list-style-type: none;
        }

        li img {
          width: 2rem;
          height: 2rem;
        }
    }
}
</style>
