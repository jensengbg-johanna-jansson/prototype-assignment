<template>
  <div id="mobileStartPage">
    <section id="out">
      <img @click="logOut" class="mobile-out" src="../assets/out.png" />
    </section>
    <MobileLogo />
    <MobileItems />
  </div>
</template>

<script>
import MobileItems from "@/components/mobileStartComp/MobileItems.vue";
import MobileLogo from "@/components/mobileStartComp/MobileLogo.vue";

export default {
  name: "MobileStartPage",
  components: {
    MobileItems,
    MobileLogo,
  },
  methods: {
    logOut() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss">
@media only screen and (max-width: 768px) {
  #out {
    display: flex;
    justify-content: flex-end;
    margin: 1rem;

    .mobile-out {
      width: 3rem;
      height: 2.5rem;
      margin: 0.5rem;
      cursor: pointer;
    }
  }
}
</style>