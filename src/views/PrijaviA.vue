<template>
  <div class="registration-container">
    <div class="prijavia-naslov">
      <h1>Prijavite se kao administrator</h1>
    </div>
    <div class="registration-box">
      <div class="sections-container">
        <div class="admin-section">
          <form @submit.prevent="loginAdmin" class="login-form">
            <div class="login-header">
              <p class="input-label">Upišite korisničko ime</p>
            </div>
            <div class="form-group">
              <input
                v-model="adminData.username"
                type="text"
                id="Korisničko ime"
                class="form-control"
                placeholder="korisničko ime"
              />
            </div>
            <div class="login-header">
              <p class="input-label">Upišite lozinku</p>
            </div>
            <div class="form-group">
              <input
                v-model="adminData.password"
                type="password"
                id="lozinka"
                class="form-control"
                placeholder="upišite lozinku"
              />
            </div>
            <div class="button-container">
              <button type="submit" class="btn btn-primary btn-block">
                Prijavi se
              </button>
            </div>
          </form>
          <div class="button-container">
            <router-link to="/registracijaKiliA" class="btn btn-primary"
              >Nazad</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adminData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    loginAdmin() {},
  },
};
</script>

<style scoped>
.form-control {
  width: 100%;
}

.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: #e1b8b8;
}

.prijavia-naslov {
  text-align: center;
  font-size: 24px;
  margin-top: -8%;
  margin-bottom: 5%;
  margin-right: 1%;
}

.registration-box {
  background-color: #8e8e8e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 30%;
  height: 40%;
  margin: 0 auto;
}

.sections-container {
  text-align: center;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.login-header {
  text-align: center;
  color: rgb(7, 7, 7);
  font-size: 19px;
  font-weight: bold;
  margin-top: 5px;
}

.form-group label {
  color: white;
}

.form-group input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-container {
  text-align: right;
  margin-top: 15px;
}

.btn-primary {
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}
</style>
