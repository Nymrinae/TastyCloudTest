<template>
  <v-card class="mb-3" width="400" height="350">
    <v-img height="150" width="400" :src="this.thumbnail"/>
    <v-card-text class="pt-4" style="position: relative;">
      <v-btn
        v-on:click="addItem"
        absolute
        class="white--text"
        color="orange"
        fab
        medium
        right
        top
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-row>
        <v-col cols="8">
          <v-card-subtitle class="title font-weight-light amber--text">{{this.name}}</v-card-subtitle>
        </v-col>
        <v-col cols="4">
          <v-card-subtitle class="title font-weight-bold orange--text">{{this.price}} €</v-card-subtitle>
        </v-col>
      </v-row>
      <v-divider />
      <v-card-subtitle class="font-weight-light mb-2">{{this.description}}</v-card-subtitle>
    </v-card-text>
    <v-snackbar
      v-model="show"
      color="green"
      timeout="5000"
      top
    >
      {{ this.name }} ajouté au panier !
      <v-btn dark text @click="show = false"> Fermer </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    show: false
  }),
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true }
  },
  methods: {
    ...mapActions({ 
      addItemToCart: 'cart/addItemToCart'
    }),
    async addItem() {
      this.show = await this.addItemToCart(this.id)
    }
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
