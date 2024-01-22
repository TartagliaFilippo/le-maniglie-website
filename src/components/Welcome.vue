<script>
export default {
  data() {
    return {
      pathImg: "/le-maniglie-website/img/img-welcome/maniglia-welcome.jpg",
    };
  },
};
</script>

<template>
  <div class="wrapper" id="welcome">
    <img :src="pathImg" alt="handle-welcome" />
    <div class="container">
      <h1>Le Maniglie</h1>
      <h2>di Tartaglia Stefano</h2>
      <p>
        Benvenuti nel mondo della raffinatezza artigianale da oltre 50 anni!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
@import "../assets/scss/mixins.scss";
.wrapper {
  min-height: 100svh;
  height: 100%;
  width: 100%;
  position: relative;
  img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    @include flexCenter(center);
  }
  .container {
    display: inline-block;
    position: absolute;
    left: 20%;
    top: 40%;
    color: $text-welcome;
    @media screen and (max-width: 1000px) {
      padding-right: 2rem;
    }
    h1 {
      font-size: 3rem;
      margin: 0.5rem 0;
      text-shadow: $bg-black 1px 1px 3px;
    }
    h2 {
      font-size: 2.5rem;
      text-shadow: $bg-black 1px 1px 3px;
    }
    p {
      font-family: "Lora", serif;
      font-size: 1.5rem;
      text-shadow: $bg-black 1px 1px 3px;
      margin-top: 1rem;
    }
  }
}
</style>
