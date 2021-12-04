<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'], //Makr the GStore object available inside this component.
  methods: {
    register() {
      // Call to API
      // If registered then redirect to event details
      this.GStore.flashMessage =
        'You are successfully registered for ' + this.event.title

      setTimeout(() => {
        //after 3 seconds, clear the flashMessage
        this.GStore.flashMessage = ''
      }, 3000)

      // Navigate the user to this location
      // When you call <router-link>,
      // it's calling this.$router.push from inside the router-link definition.
      // For example:
      // <router-link :to="{ name: 'About' }">About</router-link>
      // when this link is clicked, it calls this.$router.push({name: 'About'})

      this.$router.push({
        name: 'EventDetails',
        // Same object we use with router-link
        // Both EventRegister and EventDetails have an:id parameter,
        // which will be used by default when navigaing, as Nested Routes.
        // hence, below sentense can be removed.
        //params: { id: this.event.id }
      })
    }
  }
}
</script>
