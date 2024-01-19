<script>
import Navbar from "./components/ui/Navbar.vue";
import Welcome from "./components/Welcome.vue";
import Home from "./components/Home.vue";
import Products from "./components/Products.vue";
import Contacts from "./components/Contacts.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {};
  },

  components: {
    Navbar,
    Welcome,
    Home,
    Products,
    Contacts,
    Footer,
  },
};
</script>

<template>
  <Navbar />
  <Welcome />
  <Home />
  <Products />
  <Contacts />
  <Footer />
</template>

<style lang="scss"></style>
