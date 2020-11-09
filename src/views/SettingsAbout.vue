<template>
  <div class="wrapper">
    <SettingsNav />
    <SettingsHeader title="about" />
    <section class="content">
      <article>
        <button @click="showPolicy">data policy</button>
        <p v-if="policyShown">
          EEZER needs to gather and use certain information about individuals.
          These can include customers, suppliers, business contacts, employees
          and other people the organisation has a relationship with or may need
          to contact. This policy describes how this personal data must be
          collected, handled and stored to meet the company’s data protection
          standards – and to comply with the law.
        </p>
        <p v-if="policyShown">
          <b>Why this policy exists:</b> This data management policy ensures
          EEZER:
          <br />
          • Complies with data protection law and follows good practice <br />•
          Protects the rights of customers, staff and partners <br />• Is
          transparent about how it stores and processes individuals’ data<br />
          • Protects itself from the risks of a data breach <br />
        </p>
        <p v-if="policyShown">
          <b>Data protection law: </b> The General Data Protection Regulation
          (GDPR) applies in the UK and across the EU from May 2018. It requires
          personal data shall be:
        </p>

        <p v-if="policyShown">
          1. Processed lawfully, fairly and in a transparent manner in relation
          to individuals;
        </p>

        <p v-if="policyShown">
          2. Collected for specified, explicit and legitimate purposes and not
          further processed in a manner that is incompatible with those
          purposes; further processing for archiving purposes in the public
          interest, scientific or historical research or statistical purposes
          shall not be considered to be incompatible with the initial purposes;
        </p>

        <p v-if="policyShown">
          3. Adequate, relevant and limited to what is necessary in relation to
          the purposes for which they are processed;
        </p>

        <p v-if="policyShown">
          4. Accurate and, where necessary, kept up to date; every reasonable
          step must be taken to ensure that personal data that are inaccurate,
          having regard to the purposes for which they are processed, are erased
          or rectified without delay;
        </p>

        <p v-if="policyShown">
          5. Kept in a form which permits identification of data subjects for no
          longer than is necessary for the purposes for which the personal data
          are processed; personal data may be stored for longer periods insofar
          as the personal data will processed solely for archiving purposes in
          the public interest, scientific or historical research purposes or
          statistical purposes subject to implementation of the appropriate
          technical and organisational measures required by GDPR in order to
          safeguard the rights and freedoms of individuals;
        </p>

        <p v-if="policyShown">
          6. Processed in a manner that ensures appropriate security of personal
          data, including protection against unauthorised or unlawful processing
          and against accidental loss, destruction or damage, using appropriate
          technical or organisational measures.
        </p>

        <p v-if="policyShown">
          7. The controller shall be responsible for, and be able to
          demonstrate, compliance with the principles.
        </p>
      </article>
      <article>
        <button @click="showTerms">terms of use</button>
        <p v-if="termsShown">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
          mauris vehicula, finibus arcu eget, dapibus ante. Vivamus euismod
          euismod elit quis cursus. Aenean porta neque sed imperdiet mollis.
          Maecenas convallis leo justo, nec sollicitudin eros tincidunt a.
          Suspendisse vel justo vitae sem gravida aliquam. Etiam tempus tellus
          in enim condimentum, nec consequat turpis pulvinar. Cras consectetur
          in nisi sed vestibulum. Duis elementum ultricies tellus quis euismod.
          Curabitur vel dapibus risus, quis porttitor augue. Curabitur mattis
          nec elit et eleifend. Fusce placerat nunc nec purus dapibus, et
          pharetra nibh volutpat. Sed non ipsum malesuada nunc aliquam blandit
          quis eu mauris.
        </p>
        <p v-if="termsShown">
          Vestibulum aliquet scelerisque eros eu commodo. Maecenas volutpat
          laoreet orci. Donec tempus purus sed erat porta finibus. Pellentesque
          pretium efficitur gravida. Fusce vestibulum eu dui eu posuere. Cras
          vitae sapien tristique, sagittis odio ut, cursus tellus. Fusce
          consectetur vestibulum dui ut ultricies. Praesent fringilla odio
          felis, mollis cursus purus pretium a. In feugiat sem nec purus
          vulputate vulputate. Quisque dictum massa quam. Vestibulum ut lorem
          eget augue elementum posuere at et metus. Donec nec turpis in ex
          tempor laoreet. Suspendisse quis magna eleifend, pretium risus vitae,
          tristique nisl. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Maecenas commodo quam sit amet
          consectetur consectetur. Sed tincidunt fringilla bibendum. Etiam nec
          porta libero.
        </p>
      </article>
    </section>
  </div>
</template>

<script>
import SettingsNav from "@/components/settingsComp/SettingsNav.vue"
import SettingsHeader from "@/components/settingsComp/SettingsHeader.vue"

export default {
  components: {
    SettingsNav,
    SettingsHeader,
  },
  data: () => {
    return {
      policyShown: false,
      termsShown: false,
    }
  },
  methods: {
    showPolicy: function() {
      console.log("Showing...")
      this.policyShown = !this.policyShown
    },
    showTerms: function() {
      this.termsShown = !this.termsShown
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.wrapper {
  @include flex();

  .content {
    padding: 0rem 2rem;
    width: 100%;

    article {
      margin: 2rem 0rem;
      padding: 0.5rem 0rem;

      button {
        background: #efefef;
        padding: 1rem 0.5rem;
        margin: 1rem 0rem;
        width: 100%;
        border-radius: 6rem;
        border: none;
        text-transform: uppercase;
        color: #222;
        font-weight: bold;
        transition: all 0.4s ease;
        cursor: pointer;

        &:hover {
          background: #ec2329;
          color: #f2f2f2;
        }
      }

      p {
        color: #444;
        line-height: 1.6rem;
        margin: 1rem 0rem;
      }
    }
  }
}
</style>
