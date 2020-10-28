<template>
  <div id="startPage">
    <!-- <Header /> -->

    <main id="items">
      <section id="travel">
        <img class="travel" alt="add travel" src="../assets/travel.png">
        <button>add travel</button>
      </section>

      <section id="aid">
        <img class="aid" alt="first aid" src="../assets/aid.png">
        <button>first aid</button>
      </section>

      <section id="history">
        <img class="history" alt="travel history" src="../assets/history.png">
        <button>travel history</button>
      </section>

      <section id="settings">
        <img class="settings" alt="settings" src="../assets/settings.png">
        <button>settings</button>
      </section>
    </main>

    <!-- <footer>
      <ul id="footerLinks">
        <li>
          <img class="support" alt="support" src="../assets/support.png">
          Support
        </li>
        <li>
          <img class="terms" alt="terms" src="../assets/terms.png">
          Terms Of Use
        </li>
        <li>
          <img class="policy" alt="policy" src="../assets/policy.png">
          Data Policy
        </li>
      </ul>
    </footer> -->
  </div>
</template>

<script>
// import Header from '@/components/Header.vue'

// export default {
//   name: 'StartPage',
//   components: {Header}
// }
</script>

<style lang="scss">
#startPage {
  // display: grid;



    .logo {
      width: 9rem;
      height: 8rem;
    }

    button {
      width: 13.5rem;
      height: 2.5rem;
      
      box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 6rem;
      border-color: $primary;
      background: $primary;

      font-size: 20px;
      font-weight: 900;
      text-transform: uppercase;
      color: $white;

      margin-top: 7rem;
      cursor: pointer;
    }

    #items {
      display: grid;
      grid-template-columns: 2fr 2fr 2fr 2fr;
      margin: 3rem;
      padding: 2rem;

    }

    #items section {
      margin: 1rem;
      width: 10rem;
      height: 9.5rem;
      border-radius: 1.5rem;
      background-color: $primary;

      justify-self: center;
    }

}

</style>