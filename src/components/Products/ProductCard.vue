<template>
  <v-card class="mb-3">
    <v-img
      width="400"
      height="150"
      :src="require('../../../assets/thumbnail.png')"
    >
    </v-img>
    <v-card-subtitle class="pb-0 italic" style="font-family: Georgia;">
      A field I don't know if it's going to be useful
    </v-card-subtitle>
    <v-card-title class="newsTitle">
      {{ this.name }}
    </v-card-title>
    <v-card-text class="text--primary" style="position: relative;">
      <div> {{ this.description }} </div>
    </v-card-text>
    <v-card-actions>
      <v-text class="price"> {{ this.price }}€ </v-text>
      <v-spacer />
      <v-btn text>Add to cart</v-btn>
    </v-card-actions>
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
