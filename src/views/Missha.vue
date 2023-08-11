<template>
  <div class="product-details">
    <div class="header">
      <div class="logo-and-availability">
        <div class="availability">Dostupno u DM Hrvatska!</div>
        <a href="https://www.dm.hr/">
          <div class="logo">
            <img src="@/assets/DM.png" alt="Company Logo" />
          </div>
        </a>
      </div>
    </div>
    <div class="product">
      <div class="product-content">
        <div class="image-and-text">
          <img
            src="@/assets/MasnaMaskaCuc.png"
            alt="Proizvod 1"
            class="product-image"
          />
          <div class="text-content">
            <div class="buy-online">
              <a
                href="https://www.dm.hr/missha-airy-fit-maska-za-lice-krastavac-p8809581454712.html"
                class="buy-online"
              >
                KUPITE ONLINE! <i class="material-icons">emoji_symbol</i>
              </a>
            </div>
            <div class="short-text">Osvježavajuća maska za lice krastavac.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="description">
      MISSHA<br />
      Maska za lice AiryFit krastavac donosi iznimno ugodnu brigu vašoj koži. S
      obogaćenom formulom koja sadrži ekstrakt krastavca, pruža intenzivnu
      hidrataciju i doprinosi ljepšem i zdravijem izgledu kože. <br />Ova maska
      se lako nanosi i uklanja, pristajući savršeno na vaše lice. Dodatno, kako
      bi postigla maksimalnu učinkovitost, preporučuje se prethodno hlađenje
      maske u hladnjaku. MISSHA maska za lice AiryFit krastavac je idealan izbor
      za sve koji traže intenzivnu hidrataciju i čisto lice.
    </div>
    <router-link to="/maskezaliceM" class="btn-back"> Nazad </router-link>
  </div>
</template>

<style scoped>
.product-details {
  background-color: #e1b8b8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%; /* sadržaj prekrio cijeli širinu */
  box-sizing: border-box; /* Osigurava da padding ne dodaje dodatnu širinu */
}

.product {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.product-content {
  display: flex;
  align-items: center;
}

.image-and-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.text-content {
  width: calc(100% - 220px); /* Prilagoditi širinu */
}

.product-image {
  width: 200px;
  height: 200px;
  margin-right: 20px;
}

.header {
  display: flex;
  justify-content: flex-end; /* sadržaj u desni dio */
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.logo-and-availability {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
}
.availability {
  font-size: 16px;
  color: #2c3e50;
}

.logo img {
  max-width: 100px;
  height: auto;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.product-image {
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
}

.buy-online {
  background-color: #f082aa;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 10px;
}

.short-text {
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
}

.description {
  background-color: #f9dada;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  text-align: left;
  margin-bottom: 20px;
  font-size: 16px;
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
