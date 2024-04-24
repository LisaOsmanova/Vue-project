<template>
  <div>
    <base-dialog :show="!!error" title="ey" @close="handleError"> </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRequests && !isLoading">
          <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.message"
          >
          </request-item>
        </ul>
        <h3 v-else-if="!hasRequests">You have not received any requests yet</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import requestItem from '../../components/requests/requestItem.vue';

export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  components: {
    requestItem,
  },
  created() {
    this.loadRequests();
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/loadRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
