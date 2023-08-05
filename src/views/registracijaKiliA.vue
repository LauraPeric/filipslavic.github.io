<template>
  <div class="registration-container">
    <div class="registration-box">
      <div class="sections-container">
        <div class="user-section">
          <p>Korisnik</p>
          <router-link to="/login">Prijavi se</router-link>
          <router-link to="/signup">Registriraj se</router-link>
        </div>
        <div class="admin-section">
          <p>Administrator</p>
          <router-link to="/prijaviA">Prijavi se</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

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
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
}

.sections-container {
  display: flex;
  justify-content: space-between;
}

.user-section,
.admin-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
