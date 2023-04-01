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
    <div class="movie-image">
      <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="img">
    </div>
    <div class="titles">
      <p><strong>{{ movie.title }}</strong></p>
      <p class="original-title"><em>({{ movie.original_title }})</em></p>
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
  width: 200px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 10px;
  border: 1px solid red;

  .titles {

    .original-title {
      font-size: .8em;
    }
  }

  .movie-image {
    width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>