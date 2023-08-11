<template>
  <div class="masnakoza">
    <h1 class="title">Masna koža</h1>
    <div class="rectangle">
      <p class="text">
        Kako je prepoznati: Brzo se masti i dosta se sjaji. Pore su proširene i
        začepljene, puder nije postojan. Kako je njegovati: U usporedbi s
        ostalim tipovima kože, za masnu kožu vrlo je važno dobro čišćenje i
        detaljno uklanjanje šminke. Najbolje je koristiti gelove za uklanjanje
        šminke i pjene koje se ispiru vodom. Birajte kreme koje nisu masne,
        imaju laganu gel teksturu koja ne začepljuje pore. Nekoliko puta
        mjesečno koristite blagi piling i masku za čišćenje lica. Koristite
        lagane proizvode s mat učinkom i recite zbogom neželjenom sjaju Izraz
        "masna" koristi se za opisivanje tipa kože s pojačanom proizvodnjom
        sebuma. Prekomjeno stvaranje sebuma poznato je kao seboreja.
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
      <div class="menu-item">Serumi i gelovi</div>
    </div>
    <div class="options-center">
      <div class="menu-item">Micelarna voda</div>
    </div>
    <router-link to="/odabirtipak" class="btn-back">Nazad</router-link>
  </div>
</template>

<style scoped>
.masnakoza {
  background-color: #e1b8b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* centriranje sadržaja vertikalno */
  min-height: 100vh; /* zauzimanje cijelog ekrana */
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
