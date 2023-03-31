<script>
import { store } from '../store.js';

export default {
  name: 'AppCardMovie',
  data() {
    return {

      store,
    }
  },

  props: {
    movie: Object,
  }
}
</script>

<template>
  <div id="movie-card">
    <div class="title">
      <p>{{ movie.title }}</p>
    </div>
    <div class="original-title">
      <p><em>({{ movie.original_title }})</em></p>
    </div>
    <div class="language">
      <p>{{ movie.original_language }}</p>
    </div>
    <div class="vote">
      <p>{{ movie.vote_average }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#movie-card {
  width: 300px;
  padding: 10px;
  border: 1px solid red;
}
</style>