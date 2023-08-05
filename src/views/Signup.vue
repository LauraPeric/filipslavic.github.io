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
            type="password"
            id="lozinka"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="potvrditelozinku">Potvrdite lozinku</label>
          <input
            v-model="userData.confirmPassword"
            type="password"
            id="potvrditeelozinku"
            class="form-control"
          />
        </div>
        <button type="submit" class="btn btn-primary">Registriraj se</button>
      </form>
    </div>
    <div class="button-container">
      <router-link to="/" class="btn btn-primary btn-block">Nazad</router-link>
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
      // logika za registraciju korisnika
      // Nakon uspješne registracije preusmjeriti korisnika na početnu stranicu
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.registration-page {
  background-color: #e1b8b8;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.registration-form {
  background-color: #8e8e8e;
  padding: 25px 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.268);
  width: 1000px;
  margin: 0 auto;
}

.registration-title {
  text-align: center;
  margin-bottom: 20px;
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

.btn-block {
  display: block;
  width: 100%;
}

.button-container {
  margin-top: 15px;
  text-align: center;
}
</style>
