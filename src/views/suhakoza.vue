<template>
  <div class="suhakoza">
    <h1 class="title">Suha koža</h1>
    <div class="rectangle">
      <p class="text">
        Kako je prepoznati? <br /><br />
        Vidljivo je suha, napeta, peruta se i gruba je na dodir. Češće se ljušti
        i svrbi, sklonija je stvaranju bora. Šminku sa suhe kože uklanjajte i
        čistite mlijekom, uljem i vodom za čišćenje bez alkohola i ostalih
        isušujućih sastojaka. Za intenzivnu hidrataciju dva puta dnevno nanosite
        dnevnu hranjivu kremu, a ispod nje dobar hidratantni serum ili booster s
        hijaluronskom kiselinom. Jednom tjedno nanesite hidratantnu masku za
        lice i uživajte u mladenačkoj i blistavoj koži. <br /><br />
        Nudimo Vam asortiman proizvoda kojih pomažu da Vaša koža bude zdrava!
      </p>
    </div>

    <h2 class="subtitle">Otkrijte proizvode i ostavite recenziju!</h2>
    <div class="options">
      <router-link to="MaskezaliceS" class="menu-item"
        >Maske za lice</router-link
      >
      <router-link to="/kremazaliceS" class="menu-item"
        >Krema za lice</router-link
      >
      <router-link to="/serumigeloviS" class="menu-item"
        >Serumi i gelovi</router-link
      >
    </div>
    <div class="options-center">
      <router-link to="/micelS" class="menu-item">Micelarna voda</router-link>
    </div>
    <router-link to="/odabirtipak" class="btn btn-primary btn-block"
      >Nazad</router-link
    >
  </div>
</template>

<style scoped>
.suhakoza {
  background-color: #e1b8b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* centriranje sadržaja vertikalno */
  height: 100vh;
  width: 100vw;
  padding: 20px;
}

.title {
  font-size: 34px;
  margin-bottom: 18%;
  margin-top: -5%;
}

.rectangle {
  background-color: #f9dada;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  text-align: center;
  margin-bottom: 40px;
  margin-top: -15%;
}

.text {
  color: #2c3e50;
  font-size: 20px;
}

.subtitle {
  font-size: 20px;
  margin-bottom: 10px;
}

.options,
.options-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.menu-item {
  background-color: #8e8e8e;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.btn-primary {
  background-color: purple;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 120px;
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}
</style>
