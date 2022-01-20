<template>
  <div class="home">
    <IntroBlock/>
    <ParalaxIntro/>
    <ThreeSections/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

import ParalaxIntro from '@/components/ParalaxIntro.vue'
import ThreeSections from '@/components/ThreeSections.vue'
import IntroBlock from '@/components/IntroBlock.vue'

export default {
  name: 'Home',
  components: {
    ParalaxIntro,
    ThreeSections,
    IntroBlock
  }
}
</script>
