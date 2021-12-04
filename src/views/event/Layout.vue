<template>
  <div v-if="GStore.event">
    <h1>{{ GStore.event.title }}</h1>
    <div id="nav">
      <!-- Since :id is reuired for each child path:
        if :id isn't sent in, it will look and use the :id param that is present.
      -->
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>

<script>
export default {
  inject: ['GStore']
}
// remove below to implement Per-Router Guards
// import EventService from '@/services/EventService.js'
// export default {
//   props: ['id'],
//   data() {
//     return {
//       event: null
//     }
//   },
//   created() {
//     EventService.getEvent(this.id) //use the 'id' to get the event information from the API.
//       .then(response => {
//         this.event = response.data
//       })
//       .catch(error => {
//         if (error.response && error.response.status == 404) {
//           // if the event doesn't exist, load 404.
//           this.$router.push({
//             name: '404Resource',
//             params: { resource: 'event' }
//           })
//         } else {
//           //Otherwase assume network error
//           this.$router.push({ name: 'NetworkError' })
//         }
//       })
//   }
// }
</script>
