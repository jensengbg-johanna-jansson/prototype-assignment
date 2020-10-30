<template>
  <div id="mobile-logo">
    <img id="logo" src="../../assets/logo.png" />
  </div>
</template>

<style lang="scss">
@media only screen and (max-width: 768px) {
  #mobile-logo {
    display: flex;
    justify-content: center;
    margin-top: 15%;

    #logo {
      width: 11rem;
      height: 10rem;
    }
  }
}
</style>