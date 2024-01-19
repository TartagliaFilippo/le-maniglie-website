<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1>Le Maniglie</h1>
      <h2>di Tartaglia Stefano</h2>
      <div class="container-info">
        <div class="address">
          <p>Strada Cartigliana, 136/a</p>
          <p>36061 Bassano del Grappa (VI)</p>
          <a href="https://maps.app.goo.gl/e5YhFnZawintAibr9"
            >Calcola il tuo percoso</a
          >
        </div>
        <div class="tax-info">
          <p><span class="bold">P.IVA </span>02786250247</p>
          <p><span class="bold">C.F. </span>TRT SFN 66H18 A703P</p>
        </div>
        <div class="contacts">
          <p>
            <span class="bold">Email: </span
            ><a href="mailto:stefano@maniglietartaglia.it"
              >stefano@maniglietartaglia.it</a
            >
          </p>
          <p><span class="bold">Cellulare: </span>+39 333 28 46 381</p>
          <p><span class="bold">Telefono: </span>+39 0424 56 60 24</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
.wrapper {
  background-color: $bg-footer;
  padding: 3rem 0;
  .container {
    width: 80%;
    margin: 0 auto;
    h1,
    h2 {
      font-family: "Lora", serif;
      font-weight: 400;
      color: $title-footer;
    }
    .container-info {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      @media screen and (max-width: 850px) {
        flex-direction: column;
        align-items: baseline;
        gap: 1rem;
      }
      & > * {
        line-height: 2rem;
        color: $text-footer;
      }
      .bold {
        font-weight: bold;
      }
      .address {
        a {
          color: $text-footer;
        }
      }
      .contacts {
        a {
          color: $text-footer;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
