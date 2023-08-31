<template>
  <div class="masnakoza">
    <h1 class="title">Masna koža</h1>
    <div class="rectangle">
      <p class="text">
        Kako je prepoznati? <br />
        <br />
        Brzo se masti i dosta se sjaji. Pore su proširene i začepljene, puder
        nije postojan. U usporedbi s ostalim tipovima kože, za masnu kožu vrlo
        je važno dobro čišćenje i detaljno uklanjanje šminke. Najbolje je
        koristiti gelove za uklanjanje šminke i pjene koje se ispiru vodom.
        Potrebno je birati kreme koje nisu masne, imaju laganu gel teksturu koja
        ne začepljuje pore. Nekoliko puta mjesečno koristiti blagi piling i
        masku za čišćenje lica. Koristite lagane proizvode s mat učinkom i
        recite zbogom neželjenom sjaju Izraz "masna" koristi se za opisivanje
        tipa kože s pojačanom proizvodnjom sebuma.
        <br /><br />
        Nudimo Vam asortiman proizvoda kojih pomažu da Vaša koža bude zdrava!
      </p>
    </div>
    <h2 class="subtitle">Otkrijte proizvode i ostavite recenziju!</h2>
    <div class="options">
      <router-link to="/maskezaliceM" class="menu-item"
        >Maske za lice</router-link
      >
      <router-link to="KremazaliceM" class="menu-item"
        >Krema za lice</router-link
      >
      <router-link to="/serumigeloviM" class="menu-item"
        >Serumi i gelovi</router-link
      >
    </div>
    <div class="options-center">
      <router-link to="/micelM" class="menu-item">Micelarna voda</router-link>
    </div>
    <router-link to="/odabirtipak" class="btn btn-primary btn-block"
      >Nazad</router-link
    >
  </div>
</template>

<style scoped>
.masnakoza {
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
  margin-top: 100px;
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}
</style>
