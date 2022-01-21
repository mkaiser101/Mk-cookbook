<template>
  <div class="recipes">
    <ThreeSections/>
  </div>
</template>

<script>
// @ is an alias to /src


import ThreeSections from '@/components/ThreeSections.vue'

export default {
  name: 'recipes',
  components: {
    ThreeSections
  }
}
</script>