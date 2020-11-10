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
      <startPageHeader />
      <startPageTitle />
      <startPageItems />
    </section>
    <section v-else>
      <MobileStartPage />
    </section>
  </div>
</template>

<script>
import startPageHeader from "@/components/startComp/startPageHeader.vue";
import startPageTitle from "@/components/startComp/startPageTitle.vue";
import startPageItems from "@/components/startComp/startPageItems.vue";
import MobileStartPage from "./MobileStartPage.vue";
import NewPatient from "@/views/NewPatient.vue";

export default {
  name: "StartPage",
  data: () => {
    return {
      noticeVisible: false,
    };
  },
  components: {
    NewPatient,
    startPageHeader,
    startPageTitle,
    startPageItems,
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
#startPage {
  width: 100vw;
  height: 100vh;
  color: $white;
  background-image: linear-gradient(
      rgb(121 112 112 / 23%),
      rgb(126 116 116 / 44%)
    ),
    url("../assets/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}
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
  opacity: 0, 5;
}
</style>