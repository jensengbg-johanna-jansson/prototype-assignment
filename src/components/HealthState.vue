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
  border-radius: 1rem;
  width: 100%;
  margin: 1.5rem 0rem;
  padding: .8rem 1.2rem;
  @include  flex();
  align-items: center;
  justify-content: space-between;

  .info {
    padding: .5rem 0rem;
    width: 80%;
    min-height: 6rem;
    @include flex();
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: #777;

    h3 {
      color: #222;
      margin: .6rem 0rem;
    }
    
    p {
      line-height: 1.4rem;
    }
  }

  input[type="checkbox"] {
    background: red;
    height: 30px;
    width: 30px;
    border: none;
    
  }
}

</style> 