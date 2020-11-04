<template>
  <div class="wrapper">
    <SettingsNav />
    <h2>About</h2>
    <section class="content">
      <article>
        <button>data policy</button>
        <p>
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
          quis eu mauris. Vestibulum aliquet scelerisque eros eu commodo.
          Maecenas volutpat laoreet orci. Donec tempus purus sed erat porta
          finibus.
        </p>
        <p>
          Pellentesque pretium efficitur gravida. Fusce vestibulum eu dui eu
          posuere. Cras vitae sapien tristique, sagittis odio ut, cursus tellus.
          Fusce consectetur vestibulum dui ut ultricies. Praesent fringilla odio
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
      <article>
        <button>terms of use</button>
        <p>
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
        <p>
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
import SettingsNav from "@/components/SettingsNav.vue"
export default {
  components: {
    SettingsNav,
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

  h2 {
    align-self: center;
    margin-top: 1rem;
  }

  .content {
    padding: 0rem 2rem;

    article {
      margin: 2rem 0rem;
      padding: 0.5rem 0rem;

      button {
        background: #ec2329;
        padding: 1rem 0.5rem;
        margin: 1rem 0rem;
        width: 100%;
        border-radius: 6rem;
        border: none;
        text-transform: uppercase;
        color: #f2f2f2;
        font-weight: bold;
        transition: all 0.4s ease;
        cursor: pointer;
      }

      p {
        color: #444;
        line-height: 1.4rem;
        margin: 0.5rem 0rem;
      }
    }
  }
}
</style>
