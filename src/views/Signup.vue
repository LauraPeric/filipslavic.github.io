
<template>
  <div class="registration-page">
    <h1 class="register-naslov">Registrirajte se ovdje!</h1>
    <div class="registration-form">
      <h2 class="registration-title">Registriraj se</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="email<">Upišite email</label>
          <input
            v-model="username"
            type="email"
            id="email"
            class="form-control"
            aria-describedby="emailhelp"
            placeholder="upišite email"
          />
        </div>
        <small id="emailhelp" class="form-text text-muted">
          Nikada nećemo dijeliti vaš email s trećim strankama
        </small>
        <div class="form-group">
          <label for="password">Upišite lozinku</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="form-control"
            placeholder="upišite lozinku"
          />
        </div>
        <div class="form-group">
          <label for="passwordrepeat">Potvrdite lozinku</label>
          <input
            v-model="passwordrepeat"
            type="password"
            id="passwordrepeat"
            class="form-control"
            placeholder="ponovite lozinku"
          />
        </div>
        <button type="button" @click="signup" class="btn btn-primary">
          Registriraj se
        </button>
      </form>
    </div>
    <div class="button-container">
      <router-link to="/registracijaKiliA" class="btn btn-primary btn-block"
        >Nazad</router-link
      >
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase";

export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      passwordrepeat: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(() => {
          console.log("Uspješna registracija");
        })
        .catch((error) => {
          console.error("Došlo je do greške", error);
        });
      console.log("nastavak");
    },
  },
};
</script>

<style scoped>
.registration-page {
  background-color: #e1b8b8;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.register-naslov {
  margin-bottom: 20px;
}

.registration-form {
  background-color: #8e8e8e;
  padding: 25px 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.268);
  width: 1000px;
  margin: 0 auto;
  margin-top: 10px;
}

.registration-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 29px;
}

.btn-primary {
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
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
