<template>
  <v-container class="container" grid-list lg >
    <v-row>
      <ProductCard
        v-for="item in items"
        :key="item"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :thumbnail="item.thumbnail"
        class="productCard"
      /> <!-- the margin should be applied only on lg -->
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from './ProductCard'
import { getMeals, getDrinks, getDesserts, getAllItems } from '../../api/firebase'

export default {
  components: {
    ProductCard
  },
  props: {
    type: { type: String, required: true }
  },
  data() {
    return {
      items: []
    }
  },
  async created() {
    let items = null

    switch(this.type) {
      case 'meals':
        items = await getMeals()
        break
      case 'drinks':
        items = await getDrinks()
        break
      case 'desserts':
        items = await getDesserts()
        break
      case 'all':
        items = await getAllItems()
        break
    }

    this.items = items
  }
}
</script>

<style>
.container {
  margin-bottom: 50px;
}
.productCard {
  margin: 20px 20px 0px 25px
}
</style>