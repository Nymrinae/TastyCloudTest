<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12 sm8 md6>
      <ProductHandler />
    </v-flex>
  </v-layout>
</template>

<script>
import { ProductHandler } from '../components'

export default {
  components: {
    ProductHandler
  },
  data() {
    return {
    }
  }
}
</script>
