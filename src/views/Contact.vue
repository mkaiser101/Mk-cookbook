<template>
  <div class="contact">
    <ContactCard/>
  </div>
</template>

<script>
// @ is an alias to /src


import ContactCard from '@/components/ContactCard.vue'

export default {
  name: 'Contact',
  components: {
    ContactCard
  }
}
</script>
