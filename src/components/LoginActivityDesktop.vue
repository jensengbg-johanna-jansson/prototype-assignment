<template>
  <section id="loginActivityDesktop">
    <SettingTitle msg="Login Activity" />
    <section id="loginActivity">
      <section id="activeNow">
        <div class="active">
          <h2 class="name">Konza, Kenya</h2>
          <span class="active-now">Active now</span>
          <p>Ulefone note 8p</p>
        </div>
      </section>
      <section id="activeHistory">
        <div class="inactive">
          <h2 class="name">Konza, Kenya</h2>
          <span class="active-time">22 july 2020</span>
          <p>Ulefone note 8p</p>
        </div>
        <div class="inactive">
          <h2 class="name">Konza, Kenya</h2>
          <span class="active-time">22 july 2020</span>
          <p>Ulefone note 8p</p>
        </div>
        <div class="inactive">
          <h2 class="name">Konza, Kenya</h2>
          <span class="active-time">22 july 2020</span>
          <p>Ulefone note 8p</p>
        </div>
        <div class="inactive">
          <h2 class="name">Konza, Kenya</h2>
          <span class="active-time">22 july 2020</span>
          <p>Ulefone note 8p</p>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import SettingTitle from "./SettingTitle.vue";
export default {
  name: "LoginActivityDesktop",
  components: { SettingTitle },
};
</script>

<style lang="scss" scoped>
#loginActivity {
  @include centeredFlex();
  flex-direction: column;
  margin: 5%;

  #activeNow {
    width: 28rem;
    height: 15rem;
    border: 1px solid $secondary;
    @include centeredFlex();
    text-align: center;

    .name {
      @include headingSmall();
      font-size: 24px;
    }
    .active-now {
      @include headingSmall();
      color: $secondary;
    }
    p {
      @include subHeading();
      font-weight: 400;
      text-transform: uppercase;
    }
  }
  #activeHistory {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin: 5rem;

    .inactive {
      @include centeredFlex();
      flex-direction: column;
      width: 17rem;
      height: 7rem;
      border: 1px solid $secondary;

      .name {
        @include headingSmall();
      }
      .active-time,
      p {
        @include subHeading();
        font-weight: 400;
        text-transform: uppercase;
        font-size: 12px;
      }
    }
  }
}
</style>