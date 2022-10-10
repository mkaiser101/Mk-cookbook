<template>
    <v-app>
      <v-card>
      <v-img
      :src="image1.src"
      height="100vh"
      >
      <div class="text_1">
        Hi, this site holds some recipes and photos, hope you enjoy.
        </div>
      <span class="title-span">
                  Hi, this site holds some recipes and photos, hope you enjoy.
                  </span>
      </v-img>
      </v-card>
    </v-app>
</template>


<script>
  export default {
    data () {
      return {
        image1: {
          src: require('../assets/runway.jpeg')
        },
        image3: {
          src: require('../assets/meditate_duncans_knob.jpeg')
      }
    }
  }
  }
</script>

<style>

  .title-span {
    color: #D1C4E9;
    font-weight: bold;
    margin-top: 26%;
    margin-left: 5%;
    float: left;
  }

  .container {
    position: relative;
    text-align: center;
    color: white;
  }

  .text_1 {
    position: absolute;
    top: 25%;
    right: 25%;
  }
</style>

