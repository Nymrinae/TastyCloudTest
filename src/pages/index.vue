<template>
  <v-container class="container" grid-list lg>
    <h1 class="font-weight-bold display-3 mt-8">
      Bienvenue sur le site de COMPANY_NAME
    </h1>
    <h3 class="font-weight-bold display- mt-8">
      Test technique pour @TastyCloud
    </h3>
    <h1 class="font-weight-bold display-1 mt-8 mt-8"> Nouveautés: </h1>
    <v-row>
      <ProductCard
        v-for="item in items"
        :key="item"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :thumbnail="item.thumbnail"
        class="productCard ml-2"
      />
    </v-row>
  </v-container>
</template>

<script>
import { ProductCard } from '../components'
import { getMeal, getDessert, getNews } from '../api/firebase'

export default {
  data: () => ({
    items: []
  }),
  components: {
    ProductCard
  },
  async created() {
    this.items = await getNews()
  }
}
</script>

<style>
.productCard {
  margin: 20px 20px 0px 25px
}
</style>