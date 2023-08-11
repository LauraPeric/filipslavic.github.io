<template>
  <div class="app-container">
    <nav class="nav-container">
      <router-link to="/">
        <img src="@/assets/facialcaremelogo.png" alt="Logo" class="logo" />
      </router-link>
      <div class="nav-links">
        <router-link to="/registracijaKiliA">Pridruži se</router-link> |
        <router-link to="/forum">Forum</router-link> |
        <router-link to="/info">Informacije</router-link>
        <div class="search-container">
          <input
            v-model="searchQuery"
            @input="updateSearch"
            @keyup.enter="performSearch"
            placeholder="Pretraži..."
            class="search-bar"
          />
          <i class="material-icons">search</i>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    updateSearch() {
      // implementirati logiku pretrage
      // na temelju this.searchQuery
    },
    performSearch() {
      // Ovdje implementirati logiku koja se izvršava kada se pritisne Enter
      console.log("Search performed:", this.searchQuery);
    },
  },
};
</script>


<style lang="scss">
.search-container {
  display: flex;
  align-items: center;
  position: relative; /* relativni položaj */
}

.material-icons {
  font-size: 20px;
  margin-left: 10px;
  color: gray;
  position: absolute; /*apsolutni položaj */
  right: 10px;
}

.search-bar {
  padding: 5px;
  padding-right: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  transition: width 0.3s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%; /* Puni ekran */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Stil za navigaciju, logo i ostalo */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9dada;
  padding: 10px 20px;
  width: 100%; /* Puni ekran u širini */
  box-sizing: border-box;
}

.logo {
  width: 90%;
  height: auto;
}

.nav-links {
  display: flex;
  gap: 20px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #b270d1;
}

.app-container {
  flex: 1; /* da ispuni preostali prostor */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* centriranje sadržaja vertikalno */
  width: 100%; /* pun ekran u širini */
  box-sizing: border-box;
  padding: 20px; /* podešavanje razmaka */
}
</style>