<template>
  <div class="home">
    <IntroBlock/>
    <AboutCard/>
  </div>
</template>

<script>
// @ is an alias to /src



import IntroBlock from '@/components/IntroBlock.vue'
import AboutCard from '@/components/AboutCard.vue'

export default {
  name: 'Home',
  components: {
    IntroBlock,
    AboutCard
  }
}
</script>
