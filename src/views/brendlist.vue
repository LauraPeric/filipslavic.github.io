<template>
  <div class="brand-products">
    <h2>Proizvodi za brend: {{ brandName }}</h2>
    <div v-for="product in filteredProducts" :key="product.id">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["brandName"],
  data() {
    return {
      products: [
        { id: 1, name: "Missha Proizvod 1", brand: "Missha" },
        { id: 2, name: "Missha Proizvod 2", brand: "Missha" },
        // dodati ostale proizvode
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(
        (product) => product.brand === this.brandName
      );
    },
  },
};
</script>

<style>
.brand-products {
  padding: 20px;
}
</style>
