<template>
  <div class="skin-type-container">
    <div class="opis">
      <div class="rectangle">
        <h1 class="opistekst">
          Dobrodošli u našu interaktivnu platformu posvećenu njezi kože! <br />
          <br />
          Sada vam pružamo jednostavan način da pronađete proizvode za njegu
          lica koji su prilagođeni vašim potrebama. <br />
          Naša nova značajka vam omogućava da odaberete svoj tip kože među
          opcijama kao što su masna, suha, osjetljiva, mješovita ili normalna
          koža. <br /><br />
          Zašto je odabir pravog tipa kože važan?<br /><br />
          Svaki tip kože ima svoje jedinstvene karakteristike i potrebe.
          Odabirom svog tipa kože omogućavate nam da vam preporučimo preparate
          koji su specifično formulirani za rješavanje izazova s kojima se
          suočavate.
        </h1>
      </div>
    </div>
    <div class="middle-container">
      <div class="instruction-box">
        <p>Odaberite svoj tip kože:</p>
      </div>
      <div class="skin-type-menu">
        <router-link to="/masnakoza" class="skin-type-option"
          >Masna koža</router-link
        >
        <router-link to="/suhakoza" class="skin-type-option"
          >Suha koža</router-link
        >
        <div class="skin-type-option" title="Trenutno nedostupno! :/">
          Osjetljiva koža
        </div>
        <div class="skin-type-option" title="Trenutno nedostupno! :/">
          Mješovita koža
        </div>
        <div class="skin-type-option" title="Trenutno nedostupno! :/">
          Normalna koža
        </div>
      </div>
    </div>
    <div class="button-container">
      <router-link to="/" class="btn btn-primary btn-block">Nazad</router-link>
    </div>
  </div>
</template>


<style lang="scss">
.skin-type-option[title="Trenutno nedostupno! :/"] {
  cursor: not-allowed;
  color: #777;
}

.btn-primary {
  background-color: purple;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin: 70px;
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}

.skin-type-container {
  display: flex;
  flex-direction: column; /* sadržaj u stupacu */
  align-items: center; /*  sadržaj vodoravno */
  background-color: #e1b8b8;
  height: 100vh;
  width: 100vw;
}
a {
  text-decoration: none;
}
.opistekst {
  text-align: start;
  margin: 50px;
  padding: 20px;
  font-size: 20px;
}

.rectangle {
  background-color: #f9dada;
  border-radius: 10px;
  width: 80%;
  margin-left: 10%;
}

.middle-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto; /* centriranje middle containera unutar skin-type-containera */
}

.instruction-box {
  background-color: #8e8e8e;
  border-radius: 10px;
  width: 20%;
  height: 20%;
  padding-top: 13px;
  margin-right: 5%;
  margin-left: 20%;
  font-size: 18px;
}

.skin-type-menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #8e8e8e;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  margin-right: 20%;
}

.skin-type-option {
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.skin-type-option:hover {
  background-color: #f091f4;
}
</style>
