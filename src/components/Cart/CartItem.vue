<template>
  <v-list-item>
    <v-list-item-avatar height="100" width="100">
      <v-img :src="this.thumbnail" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-text="this.name"/>
      <v-list-item-subtitle v-text="this.description"/>
    </v-list-item-content>
    <v-list-tile
      v-text="this.price + '€'"
      class="title font-weight-light orange--text"
      style="margin-right: 20px"
    />
    <v-list-tile>
      <v-list-item-icon>
        <v-btn
          @click="this.removeItem"
          icon
        >
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
      </v-list-item-icon>
    </v-list-tile>
  </v-list-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    thumbnail: { type: String, required: true }
  },
  methods: {
    ...mapActions({
      removeItemFromCart: 'cart/removeItemFromCart'
    }),
    removeItem() {
      this.removeItemFromCart(this.id)
    }
  }
}
</script>

<style>

</style>