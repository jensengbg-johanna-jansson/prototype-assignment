<template>
  <div id="startPageTitle">
    <section id="mainInfo">
      <div class="title-eezer">
        <h1 class="title-eezer">EEZER Motorcycle Ambulance</h1>
      </div>
      <div class="tagline-eezer">
        <h2 class="tagline-eezer">Help us save the mothers of Afrika</h2>
      </div>
      <article class="info">
        <p>
          Thank you for your contribution Konza!<br />
          You have saved 13 lives this month
        </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#mainInfo {
  display: flex;
  flex-direction: column;
  margin-left: 5%;

  .title-eezer {
    @include headingLarge();
    text-align: start;
  }
  .tagline-eezer {
    @include subHeading();
  }
  .info {
    background: rgba(0, 0, 0, 0.5);
    margin-top: 3%;
    width: 36rem;
    height: 6.5rem;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;

    p {
      padding: 5%;
    }
  }
}
</style>