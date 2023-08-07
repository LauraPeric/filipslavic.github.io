<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-form">
        <form>
          <div class="form-group">
            <label for="loginemail">Upišite email adresu</label>
            <input
              type="email"
              class="form-control"
              id="loginemail"
              aria-describedby="emailHelp"
              placeholder="email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="loginlozinka">Upišite lozinku</label>
            <input
              type="password"
              class="form-control"
              id="loginlozinka"
              placeholder="Lozinka"
            />
          </div>
          <div class="button-container">
            <button type="submit" class="btn btn-primary">Prijavi se</button>
          </div>
          <div class="button-conatiner">
            <router-link to="/" class="btn btn-primary">Nazad</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // ...
};
</script>

<style scoped>
.login-page {
  background-color: #e1b8b8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.login-container {
  background-color: #8e8e8e;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
}

.login-form {
  margin-top: 20px;
}

.form-group label {
  color: white;
  font-weight: bold;
}

.form-group input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
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
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}
</style>
