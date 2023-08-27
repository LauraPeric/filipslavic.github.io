<template>
  <div class="maskezaliceM">
    <h1 class="title">Maske za lice - Masna koža</h1>

    <!-- Prvi red proizvoda -->
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/MasnaMaskaCuc.png"
                class="mr-3"
                alt="Slika 1"
                width="117"
              />
              <div class="media-body">
                <h5 class="card-title">MISSHA</h5>
                <p class="card-text">
                  Airy Fit maska za lice krastavac
                  alkdnvpvdnsdčovisdnvčoisdhvnosdčivhnsdon vsivsodvij sdvjs
                  vsiodjvmoč
                </p>
                <router-link to="/missha" class="btn btn-primary">
                  Go somewhere</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/MasnaMaskaNiv.png"
                class="mr-3"
                alt="Slika 2"
                width="100"
              />
              <div class="media-body">
                <h5 class="card-title">Nivea</h5>
                <p class="card-text">
                  Osvježavajuća maska za lice u maramici Good Morning Fresh, 15
                  ml
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- drugi red proizvoda-->

    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/MasnaMaskaGli.png"
                class="mr-3"
                alt="Slika 1"
                width="160"
              />
              <div class="media-body">
                <h5 class="card-title">Biofarm</h5>
                <p class="card-text">
                  100% RAW glina s Mrtvog mora, 70 g
                  alkdnvpvdnsdčovisdnvčoisdhvnosdčivhnsdon vsivsodvij sdvjs
                  vsimoč
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <img
                src="@/assets/MasnaMaskaZuto.png"
                class="mr-3"
                alt="Slika 2"
                width="84"
              />
              <div class="media-body">
                <h5 class="card-title">Olival</h5>
                <p class="card-text">
                  Aktivna maska - smilje, 75 ml cčkus cscscscsccscsčkscnačck
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Drugi red proizvoda
    <div class="product-row">
      <router-link to="/missha" class="product-item clickable">
        <img
          src="@/assets/MasnaMaskaCuc.png"
          alt="Proizvod 1"
          class="product-image"
        />
        <div class="product-text">
          MISSHA <br />
          Airy Fit maska za lice krastavac
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

    

    <div class="product-row">
      <router-link to="/missha" class="product-item clickable">
        <img
          src="@/assets/MasnaMaskaCuc.png"
          alt="Proizvod 1"
          class="product-image"
        />
        <div class="product-text">
          MISSHA <br />
          Airy Fit maska za lice krastavac
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

    <router-link to="/masnakoza" class="btn btn-primary btn-block"
      >Nazad</router-link
    >-->
  </div>
</template>

<style scoped>
.maskezaliceM {
  background-color: #e1b8b8;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
}

.title {
  font-size: 34px;
  margin-top: 4%;
  margin-bottom: 3%;
}

.product-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 7%; /* razmak između redova proizvoda */
}

.product-item {
  background-color: #f9dada;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 40%;
  margin-bottom: 5px; /* razmak između redova proizvoda */
}
.card {
  width: 80%;
  margin-bottom: 10px;
  margin-left: 9%;
  border-color: #f9dada;
}
.card-body {
  background-color: #f9dada;
  padding: 20px;
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
</style>
