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
            src="@/assets/masnavodaZ.jpeg"
            alt="Proizvod 1"
            class="product-image"
          />
          <div class="text-content">
            <div class="buy-online">
              <a
                href="https://www.dm.hr/ziaja-med-anti-imperfections-tonik-za-lice-za-masnu-kozu-p5901887030386.html"
                class="buy-online"
              >
                KUPITE ONLINE! <i class="material-icons">emoji_symbol</i>
              </a>
            </div>
            <div class="short-text">Med tonik.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="rating">
      <span
        class="star"
        v-for="(star, index) in stars"
        :key="index"
        @click="updateStars(index + 1)"
      >
        {{ star }}
      </span>
    </div>
    <div class="description">
      Ziaja <br />
      <br />MED tonik za čišćenje lica prikladan je protiv nepravilnosti i akni
      za njegu masne kože. Dermatološka formula namijenjena je za odrasle i
      tinejdžere. Nježno čisti kožu, smanjuje lučenje sebuma i umiruje upaljene
      akne. Ziaja MED tonik za čišćenje lica obnavlja prirodni pH kože i
      smanjuje osjećaj zatezanja epiderme. <br />
      <br />Sadži alantoin koji izvrsno umiruje nadraženu kožu, kompleks cinka i
      proteina koji smanjuju prekomjerno lučenje sebuma i učinkovito rješavaju
      probleme masne kože te provitamin B5. 99 % sastojaka je prirodnog
      podrijetla, veganski je proizvod, ne sadrži silikon, gluten, SLES sulfate,
      mineralna ulja i mikroplastiku.
    </div>

    <router-link to="/micelM" class="btn btn-primary btn-block">
      Nazad
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stars: ["☆", "☆", "☆", "☆", "☆"], // inicijalizacija praznih zvijezdica
    };
  },
  methods: {
    updateStars(num) {
      this.stars = this.stars.map((star, index) => (index < num ? "★" : "☆"));
    },
  },
};
</script>

<style scoped>
.star {
  cursor: pointer;
  font-size: 30px;
}
.product-details {
  background-color: #e1b8b8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw; /* sadržaj prekrio cijeli širinu */
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
