<template>
  <div id="startPage">
    <section v-if="!isMobile()">
      <Logo />
      <UserLinks />
      <Items />


      <Footer />
    </section>
    <section v-else>
      <MobileStartPage />
    </section>
  </div>
</template>

<script>
import Logo from "@/components/startComp/Logo.vue";
import UserLinks from "@/components/startComp/UserLinks.vue";
import Items from "@/components/startComp/Items.vue";
import MobileStartPage from "./MobileStartPage.vue";

import Footer from "@/components/startComp/Footer.vue";

export default {
  name: "StartPage",
  components: {
    Logo,
    UserLinks,
    Items,
    Footer,

MobileStartPage,
  },
  
  methods: {
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

<style lang="scss" scoped>
// #startPage {
//   height: 50%;
// }

</style>