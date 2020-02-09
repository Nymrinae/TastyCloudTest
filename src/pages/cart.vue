<template>
  <v-container>
    <h1 class="font-weight-bold display-1 text-center justify-center py-6">
      Panier
    </h1>
    <v-list>
      <CartItem
        v-for="item in items"
        :key="item"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :thumbnail="item.thumbnail"
      />
    </v-list>
  </v-container>
</template>

<script>
import { CartItem } from '../components'

export default {
  components: {
    CartItem
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