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
        <ul class="navbar-nav mr-auto">
          <div class="nav-links">
            <router-link to="/odabirtipak">Tip kože </router-link> |
            <router-link to="/registracijaKiliA">Pridruži se</router-link>|
            <router-link to="/forum">Forum</router-link> |
            <router-link to="/info">Informacije</router-link> |
            <a href="#" @click.prevent="logout()" class="nav-links">Odjava</a>
          </div>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            v-model="store.searchterm"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Pretraga"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4">
            <h5 class="mb-3 text-dark">O nama</h5>
            <p>
              Facial Care Me je vaša destinacija za pravilnu njegu kože.
              Istražite tipove kože, raznolike proizvode i dijelite savjete na
              našem forumu. Kontaktirajte nas za dodatne informacije i obavezno
              ostavite svoje recenzije proizvoda kako bismo zajedno stvorili
              bolju rutinu njege kože.
            </p>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <h5 class="mb-3 text-dark">Linkovi</h5>
            <ul class="list-unstyled mb-0">
              <li class="mb-1">
                <router-link to="/info" href="#!" style="color: #4f4f4f"
                  >Informacije</router-link
                >
              </li>
              <li class="mb-1">
                <router-link to="/odabirtipak" href="#!" style="color: #4f4f4f"
                  >Tipovi kože</router-link
                >
              </li>
              <li class="mb-1">
                <router-link to="forum" href="#!" style="color: #4f4f4f"
                  >Forum</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center p-3" style="background-color: ">
        © 2020 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  console.log("STANJE PRIJAVE");
  if (user) {
    //korisnik je ulogiran
    console.log("korisnik je ulogiran:", user.email);
    store.currentUser = user.email;
    if (currentRoute && currentRoute.meta && !currentRoute.meta.needsUser) {
      router.push({ name: "home" });
    }
  } else {
    //korisnik nije ulogiran
    console.log(store.currentUser);
    console.log("Korisnik je odjavljen");
    store.currentUser = null;

    if (currentRoute && currentRoute.meta && currentRoute.meta.needsUser) {
      router.push({ name: "home" });
    }
  }
});
export default {
  name: "app",
  data() {
    return {
      store,
    };
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.push({ name: "home" }));
    },
  },
};
</script>


<style lang="scss">
.col-lg-3 {
  margin-left: 15%;
}
.footer {
  background-color: #f7d1d1;
  width: 100%;
}
.navbar-nav {
  margin-left: 2%;
}
.form-control {
  border-block-color: #f9dada;
  width: 110%;
}
.form-inline {
  margin-left: 55%;
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

.router-link {
  text-decoration: none;
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