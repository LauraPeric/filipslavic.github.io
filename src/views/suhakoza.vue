<template>
  <div class="suhakoza">
    <h1 class="title">Suha koža</h1>
    <div class="rectangle">
      <p class="text">
        Kako je prepoznati: Vidljivo je suha, napeta, peruta se i gruba je na
        dodir. Češće se ljušti i svrbi, sklonija je stvaranju bora. Kako je
        njegovati: Šminku sa suhe kože uklanjajte i čistite mlijekom, uljem i
        vodom za čišćenje bez alkohola i ostalih isušujućih sastojaka. Za
        intenzivnu hidrataciju dva puta dnevno nanosite dnevnu hranjivu kremu, a
        ispod nje dobar hidratantni serum ili booster s hijaluronskom kiselinom.
        Jednom tjedno nanesite hidratantnu masku za lice i uživajte u
        mladenačkoj i blistavoj koži.
      </p>
    </div>
    <h2 class="subtitle">Otkrijte proizvode i ostavite recenziju!</h2>
    <div class="options">
      <router-link to="MaskezaliceS" class="menu-item"
        >Maske za lice</router-link
      >
      <div class="menu-item">Krema za lice</div>
      <div class="menu-item">Serumi i gelovi</div>
    </div>
    <div class="options-center">
      <div class="menu-item">Micelarna voda</div>
    </div>
    <router-link to="/odabirtipak" class="btn-back">Nazad</router-link>
  </div>
</template>

<style scoped>
.suhakoza {
  background-color: #e1b8b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* centriranje sadržaja vertikalno */
  min-height: 100vh;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.rectangle {
  background-color: #f9dada;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  text-align: center;
  margin-bottom: 20px;
}

.text {
  color: #2c3e50;
  font-size: 16px;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 10px;
}

.options,
.options-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.menu-item {
  background-color: #8e8e8e;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.btn-back {
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.btn-back:hover {
  background-color: rgb(215, 125, 215);
}
</style>
