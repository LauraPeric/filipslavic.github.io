<template>
  <div class="information-page">
    <h1 class="information-title">Informacije</h1>
    <p class="information-text">
      Ukoliko imate ikakva pitanja o stranici ili proizvodima obratite nam se
      sljedećim putem:
    </p>

    <div class="contact-form">
      <h2 class="contact-title">Kontaktirajte nas</h2>
      <form @submit.prevent="sendContactMessage">
        <div class="form-group">
          <label for="ime">Upišite svoje ime</label>
          <input v-model="ime" type="text" id="ime" class="form-control" />
        </div>
        <div class="form-group">
          <label for="email">Upišite svoj email</label>
          <input v-model="email" type="email" id="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="naslovPoruke">Naslov poruke</label>
          <input
            v-model="naslovPoruke"
            type="text"
            id="naslovPoruke"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="poruka">Poruka</label>
          <textarea
            v-model="poruka"
            id="poruka"
            class="form-control"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Pošalji</button>
      </form>
    </div>
    <router-link to="/" class="btn btn-primary">Nazad</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ime: "",
      email: "",
      naslovPoruke: "",
      poruka: "",
    };
  },
  methods: {
    sendContactMessage() {
      // logika za slanje poruke
      // koristiti podatke iz this.ime, this.email, this.naslovPoruke, this.poruka
      console.log(
        "Poruka poslana:",
        this.ime,
        this.email,
        this.naslovPoruke,
        this.poruka
      );
    },
  },
};
</script>

<style scoped>
.information-page {
  background-color: #e1b8b8;
  padding: 50px;
}

.information-title {
  font-size: 30px;
  font-weight: bold;
  margin: 40px;
}

.information-text {
  font-size: 16px;
  margin: 40px;
}

.contact-form {
  background-color: #f9dada;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 60%; /* Ograničena širina */
  margin: 0 auto; /* Centriranje horizontalno */
  margin-top: 50px; /* Margina od vrha */
  margin-bottom: 50px; /* Margina od dna */
}

.contact-title {
  font-size: 20px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
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
</style>


