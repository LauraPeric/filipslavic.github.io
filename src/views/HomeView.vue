<template>
  <div class="home-page">
    <div class="side-menu">
      <router-link to="/odabirtipak" class="menu-item">Tip kože</router-link>
      <router-link to="/brend" class="menu-item">Brend</router-link>
    </div>
    <div class="slider">
      <img :src="currentSlide" alt="Slide" />
      <div class="prevnextslide"></div>
      <button @click="prevSlide" class="slider-button">Prethodna</button>
      <button @click="nextSlide" class="slider-button">Sljedeća</button>
    </div>
    <div class="text-container">
      <div class="text-box">
        <p class="home-text">
          Dobrodošli na stranicu Facial Care Me! Stranica Facial Care Me vam
          omogućuje pregled proizvoda koji su najpovoljniji za njegu vašeg tipa
          kože. Na stranici možete pretraživati brandove,ostavljati recenzije i
          pisati u forume. Također vam je omogućeni pregled dostupnosti svih
          navedenih proizvoda u najpoznatijim drogerijama DM, Bipa i Muller.
        </p>
      </div>
    </div>
    <router-link to="/info" class="btn btn-primary">Informacije</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        require("@/assets/nivea.png"),
        require("@/assets/loreal.png"),
        require("@/assets/garnier.png"),
        require("@/assets/vichy.png"),
      ],
      currentSlideIndex: 0, // Ažurirano ime varijable
    };
  },
  computed: {
    currentSlide() {
      return this.slides[this.currentSlideIndex];
    },
  },
  methods: {
    prevSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slides.length;
    },
  },
};
</script>

<style scoped>
.side-menu {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #f9dada;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.menu-item {
  margin-bottom: 10px;
  color: #2c3e50;
  font-weight: bold;
}

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e1b8b8;
  height: 100vh;
  width: 100%;
}

.slider {
  width: 80%;
  max-width: 800px;
  overflow: hidden;
}

.slider-button {
  background-color: rgb(203, 47, 192);
}

.slider img {
  width: 40%;
  height: auto;
  object-fit: cover;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}

.text-box {
  background-color: #8e8e8e;
  padding: 25px 50px 75px 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 50%;
  height: 60%;
  margin: 0 auto;
}

.home-text {
  font-size: 16px;
  color: white;
}

.btn-primary {
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}
</style>
