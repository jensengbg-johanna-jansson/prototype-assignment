<template>
  <div id="startPage">
    <section v-if="!isMobile()">
      <transition name="fade">
        <NewPatient
          v-show="noticeVisible"
          @closeNotice="noticeInvisible"
          class="pop-overlay"
        />
      </transition>
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
import NewPatient from "@/views/NewPatient.vue";
import Footer from "@/components/startComp/Footer.vue";

export default {
  name: "StartPage",
  data: () => {
    return {
      noticeVisible: false,
    };
  },
  components: {
    NewPatient,
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
    noticeInvisible() {
      this.noticeVisible = false;
    },
  },
  created() {
    setTimeout(() => (this.noticeVisible = true), 8000);
  },
};
</script>

<style lang="scss" scoped>
.pop-overlay {
  height: 100vh;
  position: absolute;
  background-color: #000000e0;
  z-index: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0,5;
}
</style>