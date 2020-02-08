<template>
  <v-card class="mb-3" width="400" height="350">
    <v-img :src="require('../../../assets/thumbnail.png')" />
    <v-card-text class="pt-4" style="position: relative;">
      <v-btn absolute color="orange" class="white--text" fab medium right top>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-card-subtitle class="display-1 font-weight-light orange--text mb-2">{{this.name}}</v-card-subtitle>
      <v-divider />
      <v-card-subtitle class="font-weight-light mb-2">{{this.description}}</v-card-subtitle>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  components: {
  },
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true }
  }
}
</script>

<style>
.italic {
  font-style: italic;
}
.newsTitle {
  font-size: 30px;
}
.price {
  font-size: 22px;
  margin-left: 10px;
}
</style>
