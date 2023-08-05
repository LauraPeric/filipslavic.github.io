<template>
  <div class="app-container">
    <nav class="nav-container">
      <img src="@/assets/facialcaremelogo.png" alt="Logo" class="logo" />
      <div class="nav-links">
        <router-link to="/">Naslovna stranica</router-link> |
        <router-link to="/registracijaKiliA">Pridruži se</router-link> |
        <router-link to="/info">Informacije</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<style lang="scss">
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

/* Stil za navigaciju, logo i ostali sadržaj */
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
  width: 100px; /* Prilagoditi veličinu logotipa */
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
  color: #42b983;
}

.app-container {
  flex: 1; /* Ispuni preostali prostor */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centriranje sadržaja vertikalno */
  width: 100%; /* Puni ekran u širini */
  box-sizing: border-box;
  padding: 20px; /* Dodatno podešavanje razmaka */
}
</style>