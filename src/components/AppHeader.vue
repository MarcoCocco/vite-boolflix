<script>
import { store } from '../store.js';

export default {
  name: 'AppHeader',
  data() {
    return {

      store,
    }
  },

  emits: ['searchMovieTv'],
}
</script>

<template>
  <div class="search-options">
    <div id="search-input">
      <input v-model="store.searchByName" @keyup.enter="$emit('searchMovieTv')" type="text" placeholder="Cerca film o serie TV">
    </div>
    <div id="search-button">
      <button @click="$emit('searchMovieTv')">Cerca</button>
    </div>
  </div>
  <hr>
</template>

<style lang="scss" scoped>
.search-options {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>