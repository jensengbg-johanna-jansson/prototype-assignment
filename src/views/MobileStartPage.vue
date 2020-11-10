<template>
  <div id="mobileStartPage">
    <transition name="fade">
      <NewPatient
        v-show="noticeVisible"
        @closeNotice="noticeInvisible"
        class="pop-overlay"
      />
    </transition>
    <div class="out">
      <button class="user-button">
        <i @click="logOut" class="fas fa-sign-out-alt"></i>
        Log out
      </button>
    </div>
    <MobileLogo />
    <MobileItems />
  </div>
</template>

<script>
import MobileItems from "@/components/mobileStartComp/MobileItems.vue";
import MobileLogo from "@/components/mobileStartComp/MobileLogo.vue";
import NewPatient from "@/views/NewPatient.vue";

export default {
  name: "MobileStartPage",
  data: () => {
    return {
      noticeVisible: false,
    };
  },
  components: {
    NewPatient,
    MobileItems,
    MobileLogo,
  },
  methods: {
    logOut() {
      this.$router.push("/login");
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
@media only screen and (max-width: 768px) {
  .out {
    display: flex;
    justify-content: flex-end;
    
    .user-button {
      margin: 1rem;
      cursor: pointer;
      width: 8rem;
      height: 2.3rem;
      background-color: $white;
      border-radius: 40px;
      border: none;
      color: $black;
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
  }
  .pop-overlay {
    height: auto;
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
}
</style>