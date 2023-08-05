<template>
  <div class="registration-container">
    <div class="registration-box">
      <div class="sections-container">
        <div class="admin-section">
          <form @submit.prevent="loginAdmin" class="login-form">
            <div class="login-header">
              <p>Upišite korisničko ime</p>
            </div>
            <div class="form-group">
              <label for="Korisnickoime">Korisničko ime</label>
              <input
                v-model="adminData.username"
                type="text"
                id="Korisničko ime"
                class="form-control"
              />
            </div>
            <div class="login-header">
              <p>Upišite lozinku</p>
            </div>
            <div class="form-group">
              <label for="lozinka">Lozinka</label>
              <input
                v-model="adminData.password"
                type="password"
                id="lozinka"
                class="form-control"
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
    loginAdmin() {
      // Logika za prijavu administratora
    },
  },
};
</script>

<style scoped>
.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #e1b8b8;
}

.registration-box {
  background-color: #8e8e8e;
  padding: 25px 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.268);
  width: 40%;
  max-width: 400px;
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
  text-align: left;
  color: rgb(7, 7, 7);
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
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
