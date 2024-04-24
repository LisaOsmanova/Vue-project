<template>
  <the-header></the-header>
  <!-- to get the component that router decided to render - v-slot. And get the slotProps that router sets for us.
  mode - first we ll animate the removal of existing page, than the appearance of new page -->
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <!-- bind component with is prop to the component that router decided to load -->
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.router-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
