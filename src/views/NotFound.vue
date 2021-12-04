<template>
  <h1>Oops!</h1>
  <!-- resource could be 'page' or 'event' -->
  <h3>The {{ rerource }} you're looking for is not here.</h3>
  <router-link :to="{ name: 'EventList' }">Back to the home page</router-link>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>
