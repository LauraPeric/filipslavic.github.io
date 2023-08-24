<template>
  <div class="app-container">
    <nav id="nav-container" class="navbar navbar-expand-lg">
      <router-link to="/">
        <img src="@/assets/facialcaremelogo.png" alt="Logo" class="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-links"
        aria-controls="nav-links"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav-links">
        <div class="nav-links">
          <router-link to="/odabirtipak">Tip kože</router-link> |
          <router-link to="/registracijaKiliA">Pridruži se</router-link> |
          <router-link to="/forum">Forum</router-link> |
          <router-link to="/info">Informacije</router-link> |
          <a href="#" @click.prevent="logout()" class="nav-links">Odjava</a>
        </div>
        <form
          id="searchbar"
          class="form-inline my-2 my-lg-0 ml-auto"
          @submit.prevent="performSearch"
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Pretraži"
            aria-label="Search"
            v-model="searchQuery"
          />
        </form>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import store from "@/store";
import router from "@/router";

/*
firebase.auth().onAuthStateChanged((user) => {
const currentRoute = router.currentRouter;

  if (user) {
    //korisnik je ulogiran
    console.log("***", user.email);
    store.currentuser = user.email;

    if (!currentRoute.meta.needUser){
    router.push({name: "home"})

  } else {
    //korisnik nije ulogiran
    console.log("***", "no user");
    store.currentuser = null;
    
    if (currentRoute.meta.needUser){
    router.push({name: "login"})
  }
}); -store i router valjaju gore, 
*/ //PROBLEM

export default {
  name: "app",
  data() {
    return {
      store: "",
    };
  }, //PROBLEM
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
    performSearch() {
      // Ovdje implementirati logiku koja se izvršava kada se pritisne Enter
      this.$router.push({ path: "/", query: { search: this.searchQuery } });
    },
  },
};
</script>


<style lang="scss">
#searchbar {
  margin-left: 15%; /* Pomaknite element u desno koristeći automatski margin-left */
}
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
#nav-container {
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
  justify-content: flex-end; /* Poravnanje s desne strane */
  align-items: center; /* Centralno poravnanje vertikalno */
}

.navbar-toggler {
  margin-right: 20%; /* razmak */
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
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: -10px; /* podešavanje razmaka */
}
</style>