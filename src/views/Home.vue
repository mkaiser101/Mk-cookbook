<template>
  <div class="home">
    <IntroBlock/>
    <AboutCard/>
    <ObxSunset/>
  </div>
</template>

<script>
// @ is an alias to /src



import IntroBlock from '@/components/IntroBlock.vue'
import AboutCard from '@/components/AboutCard.vue'
import ObxSunset from '@/components/ObxSunset.vue'

export default {
  name: 'Home',
  components: {
    IntroBlock,
    AboutCard,
    ObxSunset
  }
}
</script>
