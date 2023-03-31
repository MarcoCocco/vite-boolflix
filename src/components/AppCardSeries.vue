<script>
import { store } from '../store.js';

export default {
  name: 'AppCardSeries',
  data() {
    return {

      store,
    }
  },

  props: {
    serie: Object,
  }
}
</script>

<template>
  <div id="serie-card">
    <div class="title">
      <p>{{ serie.name }}</p>
    </div>
    <div class="original-title">
      <p><em>({{ serie.original_name }})</em></p>
    </div>
    <div class="language">
      <p>{{ serie.original_language }}</p>
    </div>
    <div class="vote">
      <p>{{ serie.vote_average }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#serie-card {
  width: 300px;
  padding: 10px;
  border: 1px solid red;
}
</style>