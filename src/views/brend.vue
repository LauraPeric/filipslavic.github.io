<template>
  <div class="brand-list">
    <div class="header">
      <h1>Odaberite brend</h1>
    </div>
    <div class="content">
      <div class="brand-selector">
        <ul>
          <li
            v-for="brand in brands"
            :key="brand.id"
            @click="navigateToBrand(brand.name)"
          >
            {{ brand.name }}
          </li>
        </ul>
      </div>
    </div>
    <router-link to="/" class="btn-back">Nazad</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        { id: 1, name: "Missha" },
        { id: 2, name: "Neki Drugi Brend" },
        // ostali brendove
      ],
    };
  },
  methods: {
    navigateToBrand(brandName) {
      this.$router.push({ name: "BrandProducts", params: { brandName } });
    },
  },
};
</script>

<style>
.brand-list {
  background-color: #e1b8b8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 30px;
}

h1 {
  margin: 0;
  font-size: 24px;
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

.brand-selector {
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  background-color: grey;
  border-radius: 10px;
  padding: 10px;
}

.content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

.brand-selector ul {
  list-style-type: none;
  padding: 0;
}

.brand-selector li {
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
