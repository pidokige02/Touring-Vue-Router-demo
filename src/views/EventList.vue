<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link
      >
      <!-- < Previous -->

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
      <!-- Next > -->
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from 'vue'
// in order to make an API call, whenever page is updated.

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents: 0 // Only show the Next page link when there is a Next page.
    }
  },
  created() {
    watchEffect(() => {
      // When reactive objects that are accessed inside this function change,
      // run this funcion again.
      this.events = null // Clear out the events on the page,
      //so our user knows the API has been called.
      EventService.getEvents(2, this.page)
        // 2 : Events per page, this.page : send in the current page from props
        // this.page is props, which is reactive.
        .then(response => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
          // total count is captured from header
        })
        .catch(() => {
          this.$router.push({ name: 'NetworkError' })
        })
    })
  },
  computed: {
    hasNextPage() {
      // Find the total number of pages
      var totalPages = Math.ceil(this.totalEvents / 2)
      // if this page is nott the last page.
      return this.page < totalPages
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
