<template>
  <div class="wrapper">
      <nav>
        <div>
          <img src="../assets/AID.svg" alt="">
          <p>first aid</p>
        </div>
      </nav>
      <section class="content">
        <h1>Pick up</h1>
        <p class="info">Check all that applise to the patient</p>
        <ul>
          <li v-for="status in medicalStatus" :key="status.name">
            <HealthState :status="status.lable" :description="status.description"/>
          </li>
        </ul>
      </section>
      <button class="cta">send</button>
  </div>
</template>

<script>
import HealthState from '@/components/HealthState.vue'
export default {
  components: {
    HealthState
  },
  data: () => {
      return{
      medicalStatus: [
        {
          lable: "Pre-eclampsia", 
          description: "Patient shows sign of pre-eclampsia"
        }, 
        {
          lable: "Sever bleeding", 
          description: "Patient is bleeding at time of pick up"
        },
        {
          lable: "Severe pain", 
          description: "Patient has severe pain in"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: rgb(200, 54, 41);
$shadow: 0px 6px 10px #0004;

@mixin flex() {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
  .wrapper {
    height: 100vh;
    @include flex();
    flex-direction: column;
    align-items: center;

     nav {
       width: 90vw;
      margin: 1.5rem;
      @include flex();
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      
      div {
        background: $main-color;
        padding: 1rem 0rem;
        @include flex();
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        font-size: .6rem;
        box-shadow: $shadow;
      }
    }

    .content {
      width: 100%;
      @include flex();
      flex-direction: column;
      padding: 1rem 1.5rem;

    h1 {
      align-self: center;
      color: #222;
    }

    .info {
      margin: 4rem 0rem 1rem 0rem;
      color: #888;
      font-size: 1.1rem;
    }

    ul {
      width: 100%;
      list-style: none;
    }

    }

    .cta {
      background: $main-color;
      color: #f6f6f6;
      padding: 1rem 5rem;
      margin: 1rem 0rem;
      border: none;
      border-radius: 5rem;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      box-shadow: $shadow;
    }
  }
</style>