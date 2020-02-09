<template>
  <v-container>
    <h1 class="font-weight-bold display-1 text-center justify-center py-6">
      Panier
    </h1>
    <v-list v-if="items.length">
      <CartItem
        v-for="item in items"
        :key="item"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :thumbnail="item.thumbnail"
      />
      <Checkout />
    </v-list>
    <p v-else class="text-center justify-center">
      Votre panier est vide!
    </p>
  </v-container>
</template>

<script>
import { CartItem, Checkout } from '../components'

export default {
  components: {
    CartItem,
    Checkout
  },
  computed: {
    items() {
      return this.$store.getters['cart/getCart']
    }
  }
}
</script>

<style>

</style>