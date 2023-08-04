<template>
  <div class="home-page">
    <div class="slider">
      <img :src="currentSlide" alt="Slide" />
      <button @click="prevSlide" class="slider-button">Prethodna</button>
      <button @click="nextSlide" class="slider-button">Sljedeća</button>
    </div>
    <div class="text-container">
      <div class="text-box">
        <p class="home-text">{{ homeText }}</p>
      </div>
      <router-link to="/info" class="btn btn-primary">Informacije</router-link>
    </div>
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
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e1b8b8;
  height: 100vh;
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
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
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
