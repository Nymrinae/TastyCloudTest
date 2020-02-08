<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-row>
      <v-col cols="2">
      </v-col>
      <v-col cols="10">
        <ProductManager />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import { ProductManager } from '../components'

export default {
  components: {
    ProductManager
  }
}
</script>
