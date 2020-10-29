<template>
  <section class="healthState">
    <div class="info">
      <h3 class="bold">{{ status }}</h3>
      <p class="description">{{ description }}</p>
    </div>
    <input type="radio" name="" id="">
  </section>
</template>

<script>
export default {
  props: {
    status: String, 
    description: String
  }
}
</script>

<style lang="scss" scoped>

@mixin flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}

.healthState {
  background: #efefef;
  width: 100%;
  margin: 1.5rem 0rem;
  padding: 1.5rem;
  @include  flex();
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;

  .info {
    padding: .5rem 0rem;
    width: 90%;
    min-height: 5rem;
    @include flex();
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
}

</style> 