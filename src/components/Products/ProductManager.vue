<template>
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-1">Nos Produits</h1>
    </v-card-title>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item.name }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <ProductHandler
          style="margin-left: 100px; margin-top: 10px;"
          :type="item.id"
        /> <!-- margin should be applied only on lg -->
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import ProductHandler from './ProductHandler'

export default {
  components: {
    ProductHandler
  },
  data() {
    return {
      tab: null,
      items: [
        { id: 'all', name: 'all' },
        { id: 'meals', name: 'plats' }, 
        { id: 'desserts', name: 'desserts' },
        { id: 'drinks', name: 'boissons' }
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  }
}
</script>

