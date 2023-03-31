<script>
import { store } from '../store.js';

export default {
  name: 'AppCardMovie',
  data() {
    return {

      store,
    }
  },

  methods: {
    flagMovieIcons() {

      let lang = this.movie.original_language;

      if (lang === "en") {
        lang = "gb";
      } else if (lang === "ja") {
        lang = "jp";
      } else if (lang === "ko") {
        lang = "kr"
      } else if (lang === "zh") {
        lang = "cn"
      }

      return lang;
    },
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
    <div class="movie-image">

    </div>
    <div class="original-title">
      <p><em>({{ movie.original_title }})</em></p>
    </div>
    <div class="language">
      <span :class="`fi fi-${flagMovieIcons()}`"></span>
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid red;

  .title {
    font-weight: bold;
  }

  .original-title {
    font-size: .8em;
  }
}
</style>