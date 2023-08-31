<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="media">
            <img class="image" :src="info.url" />
            <div class="media-body">
              <h5 class="cardtitle">{{ info.cardtitle }}</h5>
              <p class="cardtext">{{ info.cardtext }}</p>
              <router-link
                :to="info.route"
                v-if="info.route && info.route !== ''"
                class="btn btn-primary"
                >Pogledaj</router-link
              >
              <button v-else disabled class="btn btn-primary">
                Trenutno nedostupno
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
export default {
  props: ["info"],
  name: "ItemCard",
};
</script>

<style scoped>
.image {
  padding-bottom: 2%;
  width: 60%;
  height: 20%;
}

.cardtitle {
  padding-top: 4%;
}
.cardtext {
  padding-top: 4%;
}
.card {
  width: 200%;
  margin-bottom: 10px;
  margin-left: 9%;
  border-color: #f9dada;
}

.card-body {
  background-color: #f9dada;
  padding: 30px;
}

.clickable {
  cursor: pointer;
}

.btn-primary {
  background-color: purple;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin: 7px;
}

.btn-primary:hover {
  background-color: rgb(215, 125, 215);
}
</style>
