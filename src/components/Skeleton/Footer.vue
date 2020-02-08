<template>
  <v-footer>
    <v-col class="white--text text-center">
      {{ `${companyName} &copy; ${new Date().getFullYear()}` }}
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      companyName: 'COMPANY_NAME'
    }
  }
}
</script>

<style>

</style>