<template>
<transition name="fade"> 
  <div class="wrapper">
      <nav>
        <button class="first-aid-button" @click="goToFirstAid">
          <img src="../assets/AID.svg" alt="">
          first aid
        </button>
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
      <primaryButton :text="'send'" @click="goToDropOff" />
  </div>
</transition>
</template>

<script>
import HealthState from '@/components/HealthState.vue';
import primaryButton from '../components/globalComp/primaryButton.vue'
export default {
  components: {
    HealthState,
    primaryButton
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
      ],
      showComponent: false
    }
  },
  methods: {
    goToDropOff() {
      this.$router.push({ path: 'dropoff' });
    },
    goToFirstAid() {
      this.$router.push({ path: 'firstaid' });
    },
    showPage() {
      this.showComponent = true;
    }
  },
  mounted() {
    this.showPage();
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100vh;
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.5rem;

    nav {
      width: 90vw;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      .first-aid-button {
        background: $primary;
        @include centeredFlex();
        flex-direction: column;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        color: #ffffff;
        font-weight: 900;
        text-transform: uppercase;
        font-size: .6rem;
        box-shadow: $buttonShadow;
        border: none;

        img {
          margin-bottom: .4rem;
        }
      }
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        align-self: center;
        @include headingLarge();
      }

      .info {
        color: #888;
        font-size: 1.1rem;
      }

      ul {
        width: 100%;
        list-style: none;
      }
    }
  }

  // Page transition
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s ease;
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>