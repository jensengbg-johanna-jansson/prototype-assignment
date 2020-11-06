<template>
  <div class="phoneCall">
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.phoneCall {
  width: 100vw;
  height: 100vh;
  @include flex();
  background: #000e;
  padding: 2rem 0rem;

  .timer {
    color: #888;
    font-size: 1.2rem;
  }

  .caller {
    width: 160px;
    padding: 2.4rem 1rem;
    margin: 1rem 0rem;
    border-radius: 5rem;
    background: #e2e2e2;
    @include flex();

    img {
      width: 80px;
      opacity: 0.4;
    }
  }

  h3 {
    text-transform: capitalize;
    color: #f2f2f2;
    margin: 1rem 0rem;
  }

  button {
    margin: 1.5rem;
    border: none;
    padding: 2rem;
    border-radius: 5rem;
    opacity: 0.6;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
      opacity: 1;
    }

    img {
      width: 32px;
    }
  }

  .controllers {
    @include flex();
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 22rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0rem;
  }

  .hangup {
    background: #ec2329;
    opacity: 1;
  }
}
</style>
