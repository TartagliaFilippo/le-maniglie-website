<script>
const WEB3FORMS_ACCESS_KEY = "4e24d515-51a3-4ca9-a662-b01ac188e6ef";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },

  methods: {
    // gestione del form con web3forms
    // async submitForm() {
    //   const response = await fetch("https://api.web3forms.com/submit", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify({
    //       access_key: WEB3FORMS_ACCESS_KEY,
    //       name: this.name,
    //       email: this.email,
    //       message: this.message,
    //     }),
    //   });
    //   const result = await response.json();
    //   if (result.success) {
    //     const sendMessageElement = document.querySelector(".send-message");
    //     if (sendMessageElement) {
    //       sendMessageElement.style.display = "block";
    //       // timer messaggio inviato
    //       setTimeout(() => {
    //         sendMessageElement.style.display = "none";
    //       }, 10000);
    //     }
    //     console.log(result);
    //     this.name = "";
    //     this.email = "";
    //     this.message = "";
    //   }
    // },
  },
};
</script>

<template>
  <div class="wrapper" id="contacts">
    <div class="container">
      <h1>Contattaci</h1>
      <form @submit.prevent="submitForm">
        <div class="send-message">Il messaggio è stato inviato</div>
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          v-model="message"
          rows="4"
          placeholder="In cosa possiamo aiutarti?"
        ></textarea>
        <button type="submit">Invia</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
.wrapper {
  background-color: $bg-primary;
  padding: 3rem 0;
  .container {
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
      width: 80%;
    }
    h1 {
      color: $title;
      font-family: "Lora", serif;
      font-weight: 400;
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      padding: 2rem 0 0;
      .send-message {
        display: none;
        font-size: 1rem;
        color: $text;
      }
      & > * {
        font-family: "Lora", serif;
        width: 30%;
        font-size: 1rem;
        border-radius: 0.5rem;
        border: 1px solid $bg-grey;
        padding: 1rem;
        @media screen and (max-width: 800px) {
          width: 50%;
        }
        @media screen and (max-width: 1100px) {
          width: 80%;
        }
      }
      button {
        width: auto;
        padding: 0.5rem 1rem;
        cursor: pointer;
        &:hover {
          background-color: $bg-grey;
          color: $bg-white;
        }
      }
    }
  }
}
</style>
