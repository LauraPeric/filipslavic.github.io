<template>
  <div class="maskezaliceM">
    <h1 class="title">Maske za lice - Masna koža</h1>

    <!-- drugi red proizvoda-->
    <div class="row">
      <div class="col 6">
        <item-card-vue
          v-for="card in filtercards"
          :key="card.url"
          :info="card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemCardVue from "@/components/ItemCard.vue";
import store from "@/store";
let cards = [
  {
    url: "https://picsum.photos/id/1/200/300",
    cardtitle: "nivea",
    cardtext: "niveajekul",
  },
  {
    url: "https://picsum.photos/id/2/200/300",
    cardtitle: "lbd",
    cardtext: "sdkb",
  },
  {
    url: "https://picsum.photos/id/3/200/300",
    cardtitle: "sfs",
    cardtext: "sfspf",
  },
  {
    url: "https://picsum.photos/id/4/200/300",
    cardtitle: "nivea",
    cardtext: "niveajekul",
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
  margin-bottom: 10%;
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
  margin: 70px;
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}
</style>
