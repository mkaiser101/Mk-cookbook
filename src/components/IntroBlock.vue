<template>
    <v-app>
      <v-card>
      <v-img
      :src="image1.src"
      height="100vh"
      >
      <div class="bottom-left">Bottom Left</div>
      <div class="top-left">Top Left</div>
      <div class="top-right">Top Right</div>
      <div class="bottom-right">Bottom Right</div>
      <div class="centered">Centered</div>

      <span class="title-span">
                  Welcome to my website, I like to cook, play outside, and write code.  Thank you very much.
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
          src: require('../assets/obx_sunset.jpeg')
        },
        image2: {
          src: require('../assets/yoga_duncans_knob.png')
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
    margin-top: 12%;
    margin-left: 5%;
    float: left;
  }
  .container {
    position: relative;
    text-align: center;
    color: white;
  }

  /* Bottom left text */
  .bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
  }

  /* Top left text */
  .top-left {
    position: absolute;
    top: 8px;
    left: 16px;
  }

  /* Top right text */
  .top-right {
    position: absolute;
    top: 40px;
    right: 16px;
  }

  /* Bottom right text */
  .bottom-right {
    position: absolute;
    bottom: 8px;
    right: 16px;
  }

  /* Centered text */
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

