<template>
  <div class="maskezaliceM">
    <h1 class="title">Kreme za lice - Masna koža</h1>

    <!-- Prvi red proizvoda -->
    <div class="product-row">
      <router-link to="/DR" class="product-item clickable">
        <img
          src="@/assets/masnakremaDR.png"
          alt="Proizvod 1"
          class="product-image"
        />
        <div class="product-text">
          Dr. Hauschkla <br />
          krema za čišćenje
        </div>
      </router-link>
      <div class="product-item clickable">
        <img
          src="@/assets/MasnaMaskaNiv.png"
          alt="Proizvod 2"
          class="product-image"
        />
        <div class="product-text">
          NIVEA<br />
          Osvježavajuća maska za lice u maramici Good Morning Fresh, 15 ml
        </div>
      </div>
    </div>

    <!-- Drugi red proizvoda -->
    <div class="product-row">
      <div class="product-item clickable">
        <img
          src="@/assets/MasnaMaskaGli.png"
          alt="Proizvod 3"
          class="product-image"
        />
        <div class="product-text">
          biofarm <br />
          100% RAW glina s Mrtvog mora, 70 g
        </div>
      </div>
      <div class="product-item clickable">
        <img
          src="@/assets/MasnaMaskaZuto.png"
          alt="Proizvod 4"
          class="product-image"
        />
        <div class="product-text">
          OLIVAL <br />
          Aktivna maska - smilje, 75 ml
        </div>
      </div>
    </div>

    <router-link to="/masnakoza" class="btn-back">Nazad</router-link>
  </div>
</template>

<style scoped>
.maskezaliceM {
  background-color: #e1b8b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}

.title {
  font-size: 24px;
  margin-bottom: 6%;
  margin-top: 6%;
}

.product-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10%; /* razmak redova proizvoda */
}

.product-item {
  background-color: #f9dada;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 40%; /* pola širine s malim razmakom */
  margin-bottom: 10px; /* razmak između redova proizvoda */
}

.clickable {
  cursor: pointer;
}

.product-image {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.product-text {
  color: #2c3e50;
  font-size: 14px;
  text-align: left;
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
