<template>
    <v-app>
      <v-card>
      <v-img
      :src="image1.src"
      height="100vh"
      >
      </v-img>
      </v-card>
    </v-app>
</template>


<script>
  export default {
    data () {
      return {
        image1: {
          src: require('../assets/obx_sunset.jpeg')
        }
    }
  }
  }
</script>

