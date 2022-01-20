<template>
  <v-app>  <!--  Needed so the carousel nav won't overlap: https://stackoverflow.com/questions/59415526/vuetify-v-carousel-arrows-overlapping-problem  -->
    <v-parallax
    height="700"
    width="100%"
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
    <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
            Vuetify
          </h1>
          <h4 class="subheading">
            Build your application today!
          </h4>
          <v-container fluid>
          <v-carousel
            cycle
            height="400"
            width="100%"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          </v-container>
        </v-col>
      </v-row>
      </v-parallax>
     </v-app> 
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/logo.png')
          },
          {
            src: require('../assets/distortedtree.jpg')
          }
        ]
      }
    }
  }
</script>