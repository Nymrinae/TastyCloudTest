<template>
  <h1 class="font-weight-bold display-1">Bienvenue sur le site de COMPANY_NAME</h1>
</template>

<script>
import { getMealOfTheDay } from '../api/firebase'

export default {
  data: () => ({
    items: null
  }),
  async created() {
    const res = await getMealOfTheDay()

    this.items = res
  }
}
</script>

<style>

</style>