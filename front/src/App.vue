<script setup>
import { RouterLink, RouterView } from 'vue-router'
import nav from './components/nav.vue'
</script>

<template>
  <nav />
  <RouterView />
</template>

<style>
html{
  background-color: rgb(32, 31, 41);
}
*{
  padding: 0;
  margin: 0;
  color: white;
}

</style>
