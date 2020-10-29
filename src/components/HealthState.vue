<template>
  <section class="healthState">
    <div class="info">
      <h3 class="bold">{{ status }}</h3>
      <p class="description">{{ description }}</p>
    </div>
    <input type="checkbox" name="" id="">
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
    color: #777;

    h3 {
      color: #222;
    }
  }

  input[type="checkbox"] {
    background: red;
    height: 28px;
    width: 28px;
    border: none; 
  }
}

</style> 