<template>
  <div class="recipes">
    <IntroBlock/>
    <ThreeSections/>
  </div>
</template>

<script>
// @ is an alias to /src


import ThreeSections from '@/components/ThreeSections.vue'
import IntroBlock from '@/components/IntroBlock.vue'

export default {
  name: 'recipes',
  components: {
    ThreeSections,
    IntroBlock
  }
}
</script>