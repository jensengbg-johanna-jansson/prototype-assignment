<template>
  <div class="wrapper">
    <SettingsNav />
    <SettingsHeader title="security" />
    <button @click="showActivityFunc">login activity</button>

    <section class="log" v-if="showActivity">
      <h3>konza, kenya</h3>
      <p class="status green">active now</p>
      <p>Ulefone note 8p</p>
    </section>

    <section class="log" v-if="showActivity">
      <h3>konza, kenya</h3>
      <p class="status">22 july 2020</p>
      <p>Ulefone note 8p</p>
    </section>

    <button @click="showColleaguesFunc">colleagues</button>

    <section class="log" v-if="showColleagues">
      <h3>konza, kenya</h3>
      <p class="status">2 km</p>
      <p><img src="../assets/phone-call.svg" alt="" /> 00 254 11 54755654</p>
    </section>

    <section class="log" v-if="showColleagues">
      <h3>konza, kenya</h3>
      <p class="status">12 km</p>
      <p><img src="../assets/phone-call.svg" alt="" /> 00 254 11 22334455</p>
    </section>

    <button @click="showPasswordFunc">Change password</button>

    <section class="password">
      <input type="text" placeholder="Current password" v-if="showPassword" />
      <input type="text" placeholder="New password" v-if="showPassword" />
      <button class="save" v-if="showPassword">save</button>
    </section>
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
      showPassword: false,
      showColleagues: false,
      showActivity: false,
    }
  },
  methods: {
    showPasswordFunc: function() {
      this.showPassword = !this.showPassword
    },
    showColleaguesFunc: function() {
      this.showColleagues = !this.showColleagues
    },
    showActivityFunc: function() {
      this.showActivity = !this.showActivity
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin flex() {
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
    margin: 1rem 0rem 2rem 0rem;
  }

  .log {
    width: 80%;
    min-height: 9rem;
    @include flex();
    justify-content: space-around;
    border: 1px solid #1fab55;
    padding: 2rem;
    margin: 1rem 0rem;

    p {
      font-size: 0.8rem;
    }

    .status {
      text-transform: uppercase;
      margin: 1rem 0rem;
    }

    .green {
      color: #1fab55;
      font-weight: bold;
    }

    img {
      width: 14px;
      margin: 0rem 0.5rem;
    }
  }

  button {
    background: #efefef;
    padding: 1rem 0.5rem;
    margin: 1rem 0rem;
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

  .password {
    width: 100%;
    @include flex();
    padding: 0rem 2rem;

    input {
      padding: 1rem;
      margin: 1rem 0rem;
      border: none;
      border-bottom: 1px solid #e2e2e2;
    }

    .save {
      width: 100%;

      &:hover {
        background: #1fab55;
        color: #f2f2f2;
      }
    }

    input {
      width: 100%;
    }
  }
}
</style>
