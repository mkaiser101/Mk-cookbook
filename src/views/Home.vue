<template>
  <div class="home">
    <IntroBlock/>
    <MiddleFrontPage/>
    <ObxSunset/>
  </div>
</template>

<script>
// @ is an alias to /src



import IntroBlock from '@/components/IntroBlock.vue'
import MiddleFrontPage from '@/components/MiddleFrontPage.vue'
import ObxSunset from '@/components/ObxSunset.vue'

export default {
  name: 'Home',
  components: {
    IntroBlock,
    MiddleFrontPage,
    ObxSunset
  }
}
</script>
