<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="wrapper" id="home">
    <div class="container">
      <h1>HOME</h1>
      <p>
        Benvenuti nel mondo della raffinatezza artigianale da oltre 50 anni! Da
        oltre quattro decenni, siamo i pionieri nel settore degli accessori per
        il mobile, specializzati nella produzione di pomoli, maniglie, chiavi,
        bocchette e molto altro, il tutto realizzato con la nostra passione e
        maestria in ottone.
      </p>
      <p>
        Immersi nel mercato del mobile in stile e moderno, la nostra esperienza
        di 40 anni è un testimone della nostra dedizione all'eccellenza
        artigianale. Ogni dettaglio dei nostri prodotti è plasmato con cura e
        attenzione, riflettendo il nostro impegno per offrire accessori
        distintivi e di alta qualità.
      </p>
      <p>
        Se siete alla ricerca di soluzioni uniche che si distinguano per
        eleganza e durabilità, siete nel posto giusto. Non esitate a contattarci
        per ulteriori informazioni o per soddisfare le vostre esigenze
        personalizzate. Siamo pronti a trasformare la vostra visione in realtà.
      </p>
      <p>
        Unisciti alla nostra famiglia di clienti soddisfatti e scopri il tocco
        distintivo dei nostri prodotti artigianali. Ci auguriamo di darvi il
        benvenuto nel mondo dell'eleganza senza tempo.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
.wrapper {
  background-color: $bg-white;
  padding: 3rem 0;
  .container {
    width: 80%;
    margin: 0 auto;
    h1 {
      color: $title;
      margin-bottom: 4rem;
      font-family: "Lora", serif;
      font-weight: 400;
      font-size: 4rem;
      text-align: center;
    }
    p {
      color: $text;
      font-size: 1.3rem;
      text-align: center;
      margin: 1rem 0 0;
    }
  }
}
</style>
