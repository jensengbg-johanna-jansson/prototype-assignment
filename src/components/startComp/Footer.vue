<template>
  <div id="footer">
    <footer>
      <ul id="footerLinks">
        <li @click="goToSupport()">
          <i class="far fa-question-circle"></i>
          Support
        </li>
        <li>
          <i class="far fa-file-alt"></i>
          Terms Of Use
        </li>
        <li>
          <i class="fas fa-user-shield"></i>
          Data Policy
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    goToSupport() {
      this.$router.push({ path: 'support' });
    }
  }
};
</script>

<style lang="scss">
#footer {
  justify-content: flex-end;
  background: rgba(206, 203, 203, 0.5);
  height: 15rem;

  footer {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 4%;
  }
  #footerLinks {
    display: flex;
    // flex-direction: row;
    // justify-content: space-around;

    li {
      margin-right: 5rem;

      list-style-type: none;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.25);

      display: flex;
      align-items: center;

      i {
        margin-right: 0.5rem;
        font-size: 3rem;
      }
    }
    li:hover {
      color: $black;
    }
  }
}
</style>