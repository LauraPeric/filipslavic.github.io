<template>
  <div class="skin-type-container">
    <div class="opis">
      <h1 class="opistekst">
        Dobrodošli u našu interaktivnu platformu posvećenu njezi kože! <br />
        <br />
        Sada vam pružamo jednostavan način da pronađete proizvode za njegu lica
        koji su prilagođeni vašim potrebama. <br />
        Naša nova značajka vam omogućava da odaberete svoj tip kože među
        opcijama kao što su masna, suha, osjetljiva, mješovita ili normalna
        koža. <br />
        Zašto je odabir pravog tipa kože važan? Svaki tip kože ima svoje
        jedinstvene karakteristike i potrebe. Odabirom svog tipa kože
        omogućavate nam da vam preporučimo preparate koji su specifično
        formulirani za rješavanje izazova s kojima se suočavate. <br />
        Bez obzira jeste li skloni višku masnoće, dehidraciji, osjetljivosti ili
        drugim problemima kože, naša široka paleta proizvoda će vam pomoći
        postići zdrav i blistav ten.
      </h1>
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
        <div class="skin-type-option">Osjetljiva koža</div>
        <div class="skin-type-option">Mješovita koža</div>
        <div class="skin-type-option">Normalna koža</div>
      </div>
    </div>
    <div class="button-container">
      <router-link to="/" class="btn btn-primary btn-block">Nazad</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.btn-primary {
  background-color: purple;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin: 150px;
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

.opistekst {
  text-align: justify;
  margin: 50px; /* razmak ispod teksta */
  padding: 50px;
  font-family: "Franklin Gothic Medium";
  font-size: 20px;
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
  padding: 15px;
  border-radius: 10px;
  width: 20%;
  height: 30%;
  margin-right: 5%;
  margin-left: 20%;
  margin-bottom: 11.3%;
  text-align: left;
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
  background-color: #f0f0f0;
}
</style>
