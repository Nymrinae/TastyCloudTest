<template>
  <v-container grid-list lg>
    <v-row>
      <ProductCard
        v-for="meal in meals"
        :key="meal"
        :name="meal.name"
        :description="meal.description"
        :price="meal.price"
        :thumbnail="meal.thumbnail"
        style="margin: 20px;"
      />
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from './ProductCard'
import { getAllMeals, getAllDesserts, getAllDrinks } from '../../api/firebase'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      meals: [],
      desserts: [],
      drinks: []
    }
  },
  async created() {
    const meals = await getAllMeals()
    const desserts = await getAllDesserts()
    const drinks = await getAllDrinks()

    this.meals = meals
    this.desserts = desserts
    this.drinks = drinks

    console.log(this.meals[0])
  }
}
</script>

<style>

</style>