<template>
  <v-list-item>
    <v-spacer />
    <v-list-tile
      class="title font-weight-light orange--text"
      style="margin-right: 45px"
    >
      Total: {{ this.total }}€
    </v-list-tile>
  </v-list-item>
</template>

<script>
export default {
  computed: {
    total() {
      const cart =this.$store.getters['cart/getCart']

      return Math.round(cart.map(item => item.price).reduce((acc, next) => acc + next) * 100) / 100
    }
  }
}
</script>

<style>

</style>