<template>
  <div class="registration-container">
    <div class="registration-box">
      <h2 class="registration-title">
        Želite li koristiti stranicu kao korisnik ili administrator?
      </h2>
      <div class="sections-container">
        <div class="user-section">
          <p class="koriadmin">Korisnik</p>
          <router-link to="/login" class="prijireg">Prijavi se</router-link>
          <router-link to="/signup" class="prijireg"
            >Registriraj se</router-link
          >
        </div>
        <div class="admin-section">
          <p class="koriadmin">Administrator</p>
          <router-link to="/prijaviA" class="prijireg">Prijavi se</router-link>
        </div>
      </div>
    </div>
    <div class="button-container">
      <router-link to="/" class="btn btn-primary btn-block">Nazad</router-link>
    </div>
  </div>
</template>


<style scoped>
.registration-title {
  font-size: 24px;
  text-align: center;
  margin: 40px;
}

.sections-container {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.user-section,
.admin-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 60%; /* smanjjiti širinu sekcija */
  max-width: 40%; /* postaviti maksimalnu širinu */
}

.prijireg,
.koriadmin {
  font-size: 22px;
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

.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #e1b8b8;
  flex-direction: column;
}

.registration-box {
  background-color: #8e8e8e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 1000px;
  margin: 0 auto;
  height: 40%;
}

.sections-container {
  display: flex;
  justify-content: space-between;
}

p {
  font-size: 18px;
  font-weight: bold;
  color: white;
}

router-link {
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
}

router-link:hover {
  background-color: rgb(215, 125, 215);
}
</style>