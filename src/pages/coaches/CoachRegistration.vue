<template>
  <div>
    <base-dialog :show="!!error" title="ep" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <h2>Register as a Coach</h2>
        <coach-form @save-data="saveData"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  components: {
    CoachForm,
  },
  methods: {
    async saveData(formData) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/registerCoach', formData);
        this.$router.replace('/coaches'); //we can not go back to the page we came from
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
