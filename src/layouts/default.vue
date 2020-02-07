<template>
  <v-app dark>
    <Navbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { Navbar, Footer } from '../components'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
