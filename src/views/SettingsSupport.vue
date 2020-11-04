<template>
  <div class="wrapper">
    <settingsNav />
    <SettingsHeader title="support" />

    <button class="cta" @click="callFunc">
      call it for help
    </button>

    <div class="phoneCall" v-if="call">
      <p class="timer">10:05</p>

      <section class="caller">
        <img src="../assets/user.svg" alt="person" />
      </section>

      <h3 class="contact">jomo omondi</h3>
      <section class="controllers">
        <button><img src="../assets/mute-microphone.svg" alt="" /></button>
        <button><img src="../assets/speaker.svg" alt="" /></button>
        <button><img src="../assets/Keypad-icon.svg" alt="" /></button>
        <button><img src="../assets/doc.svg" alt="" /></button>
      </section>
      <button class="hangup" @click="hangupFunc">
        <img src="../assets/hangup.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import SettingsNav from "@/components/settingsComp/SettingsNav.vue"
import SettingsHeader from "@/components/settingsComp/SettingsHeader.vue"

export default {
  components: {
    SettingsNav,
    SettingsHeader,
  },
  data: () => {
    return {
      call: false,
    }
  },
  methods: {
    callFunc: function() {
      this.call = !this.call
    },
    hangupFunc: function() {
      this.call = false
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.wrapper {
  width: 100vw;
  height: 100vh;
  @include flex();

  h2 {
    text-transform: uppercase;
    margin-top: 2rem;
  }

  .cta {
    background: #efefef;
    padding: 1rem 0.5rem;
    margin: 2rem 0rem;
    width: 80%;
    border-radius: 6rem;
    border: none;
    text-transform: uppercase;
    color: #222;
    font-weight: bold;
    transition: all 0.4s ease;
    cursor: pointer;

    &:hover {
      background: #ec2329;
      color: #fefefe;
    }
  }

  .phoneCall {
    @include flex();
    padding: 2rem 0rem;

    .timer {
      color: #888;
      font-size: 1.2rem;
    }

    .caller {
      width: 160px;
      padding: 2rem;
      margin: 2rem 0rem;
      border-radius: 5rem;
      background: #e2e2e2;
      @include flex();

      img {
        width: 100px;
        opacity: 0.4;
      }
    }

    h3 {
      text-transform: capitalize;
      color: #222;
      margin: 1rem 0rem;
    }

    button {
      margin: 1.5rem;
      border: none;
      padding: 2rem;
      border-radius: 5rem;
      opacity: 0.7;
      cursor: pointer;
      transition: all 0.4s ease;

      &:hover {
        opacity: 1;
      }

      img {
        width: 46px;
      }
    }

    .controllers {
      @include flex();
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 26rem;
      padding: 1rem;
      margin: 1rem 0rem;
    }

    .hangup {
      background: #ec2329;
      opacity: 1;
    }
  }
}
</style>
