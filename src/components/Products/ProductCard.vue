<template>
  <v-card class="mb-6">
    <v-img
      width="400"
      height="250"
      :src="this.thumbnail"
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
      {{ this.price }}€
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
</style>
