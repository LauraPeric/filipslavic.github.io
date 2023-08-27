<template>
  <div class="login-page">
    <div class="page-title">
      <h1>Prijavi se ovdje!</h1>
    </div>
    <div class="login-container">
      <div class="login-form">
        <form>
          <div class="form-group">
            <label for="loginemail" class="input-email"
              >Upišite email adresu</label
            >
            <input
              type="email"
              v-model="username"
              class="form-control"
              id="loginemail"
              aria-describedby="emailHelp"
              placeholder="email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >Nikada nećemo djeliti vaš email s terćim strankama.</small
            >
          </div>
          <div class="form-group">
            <label for="loginlozinka" class="input-email"
              >Upišite lozinku</label
            >
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="loginlozinka"
              placeholder="upišite lozinku"
            />
          </div>
          <div class="button-container">
            <button type="button" @click="login()" class="btn btn-primary">
              Prijavi se
            </button>
          </div>
          <div class="button-conatiner">
            <router-link to="/registracijaKiliA" class="btn btn-primary"
              >Nazad</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.username);

      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
          console.log("Uspješna prijava", result);
          this.$router.replace({ name: "home" });
        })
        .catch(function (e) {
          console.error("Došlo je do greške", e);
        });
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

.page-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.login-page {
  background-color: #e1b8b8;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.login-container {
  background-color: #8e8e8e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 50%;
  height: 40%;
  margin: 0 auto;
}

.login-form {
  text-align: center;
  margin-bottom: 20px;
}

.form-group label {
  text-align: center;
  color: rgb(7, 7, 7);
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.button-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}

.btn-primary {
  background-color: purple;
  border: black;
  align-items: normal;
  width: 100%;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}
</style>