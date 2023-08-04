<template>
  <div class="registration-page">
    <div class="registration-form">
      <h2 class="registration-title">Registriraj se</h2>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="Korisnickoime">Korisničko ime</label>
          <input
            v-model="userData.Korisnickoime"
            type="text"
            id="Korisničko ime"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="email">Upišite email</label>
          <input
            v-model="userData.email"
            type="email"
            id="email"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="lozinka">Upišite lozinku</label>
          <input
            v-model="userData.password"
            type="lozinka"
            id="lozinka"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="potvrditelozinku">Potvrdite lozinku</label>
          <input
            v-model="userData.confirmPassword"
            type="lozinka"
            id="potvrditelozinku"
            class="form-control"
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Registriraj se
        </button>
      </form>
      <router-link to="/" class="btn btn-primary">Nazad</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        Korisnickoime: "",
        email: "",
        lozinka: "",
        potvrditelozinku: "",
      },
    };
  },
  methods: {
    registerUser() {
      // logiku za registraciju korisnika
      // Nakon uspješne registracije preusmjerite korisnika na početnu stranicu
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.registration-page {
  background-color: #e1b8b8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.registration-form {
  background-color: #8e8e8e;
  padding: 25px 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.268);
  width: 1000px; /* Promijenjeno na 100% */
  margin: 0 auto; /* Centriranje horizontalno */
}

.registration-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
