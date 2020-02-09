<template>
  <p> {{ items }} </p>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    const cartItems = this.$store.getters['cart/getCart']

    this.items = cartItems
  }
}
</script>

<style>

</style>