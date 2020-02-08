<template>
  <v-flex xs12 md12>
    <v-tabs grow>
      <v-tab
        v-for="type in types"
        :key="type"
        :href="`#tab-${type}`"
      >
      {{ type }}
      </v-tab>
      <v-tab-item
        v-for="type in types"
        :key="type"
        :value="`tab-${type}`"
      >
        <ProductHandler :type="type" />
      </v-tab-item>
    </v-tabs>
  </v-flex>
</template>

<script>
import ProductHandler from './ProductHandler'

export default {
  components: {
    ProductHandler
  },
  data() {
    return {
      types: ['meals', 'desserts', 'drinks']
    }
  }
}
</script>
