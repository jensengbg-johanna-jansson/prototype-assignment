<template>
    <section id="header">
    <div id="imgLogo">
      <img class="logo" alt="logo" src="../assets/logo.png">
    </div>

    <div id="title">
      <h1>{{ msg }}</h1>
    </div>

    <div id="acc">
      <img class="acc" alt="account" src="../assets/account.png">
    </div>

    <div id="out">
      <img class="out" alt="log out" src="../assets/out.png">
    </div>
  </section>
</template>

<script>
export default {
  name: 'App',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
#header {
    display: grid;
    grid-template-columns: 3fr 6fr 1fr 1fr;
    justify-items: center;
    align-items: center;

    #imgLogo {
      justify-self: start;

        .logo {
          margin-left: 2rem;
        }
    }
    #title,
    #out {
      justify-self: center;
    }
    #acc {
      justify-self: end;
    }
    .acc,
    .out {
      width: 3rem;
      height: 3rem;
    }
    #title {
      font-size: 36px;
      font-weight: 700;
    }
}
</style>