<template>
  <div>
    <!-- Header -->
    <app-header />
    <div>Welcome to Your Vue.js App</div>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";

export default {
  name: "app",
  components: {
    AppHeader,
  },
};
</script>
