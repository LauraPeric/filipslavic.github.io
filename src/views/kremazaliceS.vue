<template>
  <div class="maskezaliceM">
    <h1 class="title">Kreme za lice - Suha koža</h1>

    <div class="row">
      <div class="col 6">
        <item-card-vue
          v-for="card in filtercards"
          :key="card.url"
          :info="card"
        />
      </div>
    </div>
    <router-link to="/suhakoza" class="btn btn-primary">Nazad</router-link>
  </div>
</template>

<script>
import ItemCardVue from "@/components/ItemCard.vue";
import store from "@/store";

let cards = [
  {
    url: require("@/assets/suhakremaPURE.png"),
    cardtitle: " Look Pure",
    cardtext: " LBB pure BB krema za lice",
    route: "/Pure",
  },
  {
    url: require("@/assets/suhakremaCERA.webp"),
    cardtitle: "Cera di cupra",
    cardtext: "Cera di Cupra krema za lice Rosa, 100 ml",
  },
  {
    url: require("@/assets/MasnakremaOLIVAL.png"),
    cardtitle: "Olival",
    cardtext: "Professional Krema za lice SPF 50, 50 ml",
  },
  {
    url: require("@/assets/suhakremaOLI.png"),
    cardtitle: "Olival",
    cardtext: "Regenerativna krema, 50 ml",
  },
];

export default {
  name: "MaskeM",
  data: function () {
    return {
      cards,
      store,
    };
  },
  computed: {
    filtercards() {
      //logika koja filtrira cards
      let termin = this.store.searchterm;
      console.log("search termin:", termin);
      return this.cards.filter((card) => card.cardtitle.includes(termin));
    },
  },
  components: {
    ItemCardVue,
  },
};
</script>

<style scoped>
.maskezaliceM {
  background-color: #e1b8b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

.row {
  width: 50%;
  margin-left: 11.5%;
  margin-bottom: 4%;
}

.title {
  font-size: 34px;
  margin-top: 4%;
  margin-bottom: 3%;
}

.card {
  width: 80%;
  margin-bottom: 10px;
  margin-left: 9%;
  border-color: #f9dada;
}
.card-body {
  background-color: #f9dada;
  padding: 20px;
}

.clickable {
  cursor: pointer;
}

.btn-primary {
  background-color: purple;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: -3%;
  margin-bottom: 2%;
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}
</style>
