<template>
  <v-app-bar fixed app>
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="item in links"
        :key="item"
        :to="item.path"
        style="toolbarItem"
      >
        {{ item.name }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      title: 'Company Name',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Nos produits', path: '/products'},
        { name: 'Panier', path: '/cart' }
      ]
    }
  }
}
</script>

<style>
.toolbarItem {
  margin-left: 10px;
}
</style>