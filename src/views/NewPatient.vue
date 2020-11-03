<template>
  <div id="newPatient">
    <section id="cart">
      <section id="close">
        <button @click="closeNotice" id="btnClose">
          <i class="far fa-times-circle"></i>
        </button>
        <div id="icon-hospital-user">
          <i class="fas fa-hospital-user"></i>
        </div>
        <span class="title-new-patient">new patient</span>
      </section>
      <section id="start">
        <div class="patient-id">
          <h4>Patient ID</h4>
          <p>MUM9033_ISS2n_FAC132</p>
          <h4>Adress</h4>
          <p>Utangwa</p>
          <h4>Coordinates</h4>
          <p>
            1° 42' 48.7" S <br />
            37° 26' 41.0" E
          </p>
        </div>
        <primaryButton
          @click="toPickUp"
          class="start-travel-btn"
          :text="'start travel'"
        />
      </section>
    </section>
  </div>
</template>

<script>
import primaryButton from "../components/globalComp/primaryButton";
export default {
  name: "NewPatient",
  components: { primaryButton },
  methods: {
    toPickUp() {
      this.$router.push("/pickup");
    },
    closeNotice() {
      this.$emit("closeNotice");
    },
  },
};
</script>

<style lang="scss" scoped>
#newPatient {
  height: 100vh;
  width: 100vw;
  @include centeredFlex();
  flex-direction: column;

  #cart {
    width: 21rem;
    background: $white;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    #close {
      height: 14rem;
      background-color: $primary;
      border-radius: 20px 20px 0px 0px;

      display: flex;
      flex-direction: column;

      i {
        color: $white;
      }

      #btnClose {
        background: none;
        border: none;
        align-self: flex-end;
        padding: 0.5rem;
        cursor: pointer;

        i {
          font-size: 2.5rem;
        }
      }
      #icon-hospital-user {
        align-self: center;

        i {
          font-size: 6rem;
        }
      }
      .title-new-patient {
        @include headingSmall();
        color: $white;
        margin: 1rem;
        font-weight: normal;
        font-size: 32px;
      }
    }

    #start {
      height: 17rem;
      @include centeredFlex();
      flex-direction: column;

      div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1rem;
        padding: 1rem;

        h4 {
          @include subHeading();
          font-size: $subtitlesize;
        }
      }

      .start-travel-btn {
        margin: 1rem;
        background-color: $secondary;
        cursor: pointer;
      }
    }
  }
}
</style>