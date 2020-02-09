<template>
  <v-container grid-list lg>
    <v-row>
      <ProductCard
        v-for="item in items"
        :key="item"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :thumbnail="item.thumbnail"
        style="margin: 20px;"
      /> <!-- the margin should be applied only on lg -->
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from './ProductCard'
import { getItems, getAllItems } from '../../api/firebase'

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
    const items = await getItems(this.type)

    this.items = items
  }
}
</script>

<style>

</style>