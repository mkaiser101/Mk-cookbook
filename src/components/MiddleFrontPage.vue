<template>
  <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/falafel_platter_manuel_antonio.jpeg')
          },
          {
            src: require('../assets/yoga_mountain.jpeg')
          },
          {
            src: require('../assets/sandwhich.jpeg')
          }
        ]
      }
    }
  }
</script>

