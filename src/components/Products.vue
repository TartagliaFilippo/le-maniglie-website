<script>
export default {
  data() {
    return {
      sliderList: [
        {
          name: "1",
          url: "img/slider/1.jpg",
        },
        {
          name: "2",
          url: "img/slider/2.jpg",
        },
        {
          name: "3",
          url: "img/slider/3.jpg",
        },
        {
          name: "4",
          url: "img/slider/4.jpg",
        },
      ],
      activeSlide: 0,
      catalogueList: [
        {
          name: "Antique Iron",
          pdfUrl: "pdf/antique-iron.pdf",
        },
        {
          name: "Arredo Giardino",
          pdfUrl: "pdf/arredo-giardino.pdf",
        },
        {
          name: "Arte e Design",
          pdfUrl: "pdf/arte-design.pdf",
        },
        {
          name: "Catalogo Generale",
          pdfUrl: "pdf/catalogo-generale.pdf",
        },
        {
          name: "Cucine e Dintorni",
          pdfUrl: "pdf/catalogo-cucine.pdf",
        },
        {
          name: "Design e Colore",
          pdfUrl: "pdf/design-colore.pdf",
        },
        {
          name: "L'Officina dello Stile",
          pdfUrl: "pdf/officina-dello-stile.pdf",
        },
        {
          name: "Balconi Fioriti",
          pdfUrl: "pdf/balconi-fioriti.pdf",
        },
      ],
    };
  },
  created() {
    this.autoSlide();
  },

  methods: {
    // slide Precedente
    goPrev() {
      if (this.activeSlide === 0) {
        this.activeSlide = this.sliderList.length - 1;
      } else {
        this.activeSlide--;
      }
    },

    // slide Sucessiva
    goNext() {
      if (this.activeSlide === this.sliderList.length - 1) {
        this.activeSlide = 0;
      } else {
        this.activeSlide++;
      }
    },

    // allinea activeSlide all'index
    selectDot(index) {
      this.activeSlide = index;
    },

    autoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.goNext();
      }, 3000);
    },
  },

  computed: {
    prevIndex() {
      // Calcola l'indice dell'immagine precedente
      return this.activeSlide === 0
        ? this.sliderList.length - 1
        : this.activeSlide - 1;
    },
    nextIndex() {
      // Calcola l'indice dell'immagine successiva
      return this.activeSlide === this.sliderList.length - 1
        ? 0
        : this.activeSlide + 1;
    },
  },
};
</script>

<template>
  <div class="wrapper" id="products">
    <h1>I nostri Prodotti più Venduti..</h1>
    <div
      class="slider-container"
      v-for="(item, index) in sliderList"
      :key="index"
      :class="{ active: index === activeSlide }"
    >
      <div class="left-preview">
        <img :src="sliderList[prevIndex].url" alt="" />
      </div>
      <div class="main-image">
        <img :src="item.url" alt="" />
      </div>
      <div class="right-preview">
        <img :src="sliderList[nextIndex].url" alt="" />
      </div>
      <!--<div class="controls">
        <div class="prev-button" @click="goPrev">
          <font-awesome-icon :icon="['fas', 'angles-left']" />
        </div>
        <div class="next-button" @click="goNext">
          <font-awesome-icon :icon="['fas', 'angles-right']" />
        </div>
      </div>-->
    </div>
    <div class="dots-container">
      <div
        class="dot"
        v-for="(dot, index) in sliderList"
        :key="index"
        :class="{ active: index === activeSlide }"
        @click="selectDot(index)"
      ></div>
    </div>
    <div class="container">
      <h2>Qui puoi visionare i nostri Cataloghi:</h2>
      <ul class="catalogue-list">
        <li class="catalogue" v-for="catalogue in catalogueList">
          <a :href="catalogue.pdfUrl">{{ catalogue.name }}</a>
          <a href="" class="download" :download="catalogue.pdfUrl"
            ><font-awesome-icon :icon="['fas', 'file-arrow-down']"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
@import "../assets/scss/mixins.scss";
.wrapper {
  background-color: $bg-secondary;
  padding: 3rem 0;
  h1 {
    color: $title;
    font-family: "Lora", serif;
    font-weight: 400;
    text-align: center;
    margin-bottom: 3rem;
  }
  .slider-container {
    width: 100%;
    height: 50%;
    position: relative;
    display: none;
    &.active {
      display: flex;
      justify-content: center;
    }
    .left-preview,
    .right-preview {
      width: 33%;
      padding: 0 1rem;
      @include flexCenter(center);
      transform: scale(0.9);
      @media screen and (max-width: 800px) {
        display: none;
      }
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        opacity: 0.5;
      }
    }
    .main-image {
      width: 33%;
      padding: 0 1rem;
      @include flexCenter(center);
      @media screen and (max-width: 800px) {
        width: 90%;
      }
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
    .controls {
      width: 100%;
      height: 100%;
      position: absolute;
      .prev-button,
      .next-button {
        height: 2rem;
        width: 2rem;
        position: absolute;
        transform: translate(0, -50%);
        background-color: $bg-primary;
        color: $bg-grey;
        border-radius: 50%;
        @include flexCenter(center);
        cursor: pointer;
        &:hover {
          color: $bg-black;
        }
      }
      .prev-button {
        top: 50%;
        left: 10%;
      }
      .next-button {
        top: 50%;
        right: 10%;
      }
    }
  }
  .dots-container {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 0 3rem;
    .dot {
      height: 0.3rem;
      width: 1rem;
      background-color: $bg-footer;
      border-radius: 0.1rem;
      cursor: pointer;
      &.active {
        opacity: 0.3;
      }
    }
  }
  .container {
    width: 70%;
    margin: 0 auto;
    h2 {
      color: $title;
      font-family: "Lora", serif;
      font-weight: 400;
      text-align: center;
      margin-bottom: 3rem;
    }
    .catalogue-list {
      display: flex;
      flex-wrap: wrap;
      .catalogue {
        width: 50%;
        display: flex;
        justify-content: center;
        padding: 1rem;
        @media screen and (max-width: 700px) {
          width: 100%;
        }
        a {
          text-decoration: none;
          color: $text-link;
        }
        .download {
          margin-left: auto;
          cursor: pointer;
          color: $bg-black;
        }
      }
    }
  }
}
</style>
