<template>
  <div class="wrapper">
    <SettingsNav />
    <SettingsHeader title="about" />
    <section class="content">
      <article>
        <button @click="showPolicy">Data Policy</button>
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
      ¨

      <article>
        <button @click="showTerms">Terms of Use</button>
        <p v-if="termsShown">
          Last updated: 08/11/2020 Please read these Terms and Conditions
          ("Terms", "Terms and Conditions") carefully before using the
          http://www.eezer.com EEZER website and the My Mobile App EEZER mobile
          application (the "Service") operated by My Company EEZER ("us", "we",
          or "our"). Your access to and use of the Service is conditioned on
          your acceptance of and compliance with these Terms. These Terms apply
          to all visitors, users and others who access or use the Service.
        </p>

        <p v-if="termsShown">
          <b>
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms then you may not
            access the Service.
          </b>
        </p>
        <p v-if="termsShown">
          <b>Purchases </b> <br />
          If you wish to purchase any product or service made available through
          the Service ("Purchase"), you may be asked to supply certain
          information relevant to your Purchase including, without limitation,
          your … The Purchases section is for businesses that sell online
          (physical or digital). For the full disclosure section, create your
          own Terms and Conditions. <br />
          <b>Subscriptions </b> <br />
          Some parts of the Service are billed on a subscription basis
          ("Subscription(s)"). You will be billed in advance on a recurring ...
          The Subscriptions section is for SaaS businesses. For the full
          disclosure section, create your own Terms and Conditions.
        </p>
        <br />
        <p v-if="termsShown">
          <b>Content </b> <br />
          Our Service allows you to post, link, store, share and otherwise make
          available certain information, text, graphics, videos, or other
          material ("Content"). You are responsible for the … The Content
          section is for businesses that allow users to create, edit, share,
          make content on their websites or apps. For the full disclosure
          section, create your own Terms and Conditions.
        </p>
        <p v-if="termsShown">
          <b>Links To Other Web Sites </b> <br />
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by My Company EEZER. My Company EEZER
          has no control over, and assumes no responsibility for, the content,
          privacy policies, or practices of any third party web sites or
          services. You further acknowledge and agree that My Company EEZER
          shall not be responsible or liable, directly or indirectly, for any
          damage or loss caused or alleged to be caused by or in connection with
          use of or reliance on any such content, goods or services available on
          or through any such web sites or services.
        </p>

        <p v-if="termsShown">
          <b>Changes </b> <br />
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will try to
          provide at least 30 EEZER days' notice prior to any new terms taking
          effect. What constitutes a material change will be determined at our
          sole discretion.
        </p>

        <p v-if="termsShown">
          <b>Contact Us </b> <br />
          If you have any questions about these Terms, please contact us.
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
