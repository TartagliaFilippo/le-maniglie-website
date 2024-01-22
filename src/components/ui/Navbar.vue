<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      navbarColor: "rgba(212, 212, 212, 0.5)", // unico colore non gestito con le variabili scss
    };
  },

  methods: {
    // apertura e chiusura dropdown
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    // gestisce lo scroll
    handleScroll() {
      const welcomeElement = document.getElementById("welcome");
      if (welcomeElement) {
        const welcomeRect = welcomeElement.getBoundingClientRect(); // metodo che mi restituice le dimensioni di un elemanto e la sua posizione relativa alla finenstra
        const isWelcomeVisible =
          welcomeRect.bottom > 0 && welcomeRect.top < window.innerHeight;
        this.navbarColor = isWelcomeVisible
          ? "rgba(212, 212, 212, 0.5)"
          : "rgba(212, 212, 212, 1)";
      }
    },
  },

  // eseguito dopo la creazione del componente
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  // eseguito prima della rimozione dal DOM
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <nav :style="{ backgroundColor: navbarColor }">
    <div class="main-navbar">
      <div class="left-logo">
        <a href="#welcome">Le Maniglie di Tartaglia Stefano</a>
      </div>
      <div class="right-content">
        <a href="#home">Home</a>
        <a href="#products">Cataloghi</a>
        <a href="#contacts">Contattaci</a>
      </div>
      <div class="dropdown-button" @click="toggleDropdown">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <div
        class="dropdown-menu"
        :style="{ backgroundColor: navbarColor }"
        v-if="isDropdownOpen"
      >
        <a href="#home">Home</a>
        <a href="#products">Cataloghi</a>
        <a href="#contacts">Contattaci</a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables.scss" as *;
nav {
  font-family: "Lora", serif;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(212, 212, 212, 0.5);
  display: flex;
  justify-content: center;
  .main-navbar {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    .left-logo {
      width: auto;
      font-size: 1.3rem;
      font-weight: 600;
      a {
        text-decoration: none;
        color: $bg-black;
        text-shadow: $bg-white 1px 1px 3px;
      }
    }
    .right-content {
      margin-left: auto;
      display: flex;
      gap: 2rem;
      a {
        text-decoration: none;
        color: $bg-black;
        &:hover {
          font-weight: bold;
        }
      }
    }
    .dropdown-button {
      display: none;
      cursor: pointer;
      border: 1px solid $bg-black;
      padding: 0.5rem 0.7rem;
      border-radius: 0.3rem;
      &:hover {
        border: 3px solid $bg-black;
      }
    }
    .dropdown-menu {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 5rem;
      left: 0;
      right: 0;
      background-color: rgba(212, 212, 212, 0.5);
      a {
        padding: 1rem;
        text-decoration: none;
        color: $bg-black;
        display: block;
      }
    }

    @media (max-width: 800px) {
      .right-content {
        display: none;
      }
      .dropdown-button {
        display: flex;
        align-items: center;
        margin-left: auto;
      }
      .dropdown-menu {
        display: flex;
        a:hover {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
