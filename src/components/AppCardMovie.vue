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
  },

}
</script>

<template>
  <div id="movie-card">
    <div class="movie-image">
      <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="img">
    </div>
    <div class="movie-info">
      <div class="titles">
        <p><strong>{{ movie.title }}</strong></p>
        <p class="original-title"><em>({{ movie.original_title }})</em></p>
      </div>
      <div class="language">
        <span :class="`fi fi-${flagMovieIcons()}`"></span>
      </div>
      <div class="vote">
        <i v-for=" star in Math.floor(movie.vote_average / 2)" class="fa-solid fa-star"></i>
        <i v-for=" star in 5 - Math.floor(movie.vote_average / 2)" class="far fa-star"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#movie-card {
  height: 300px;
  padding-bottom: 10px;
  
  .movie-info {
    display: none;
  }

  .titles {

    .original-title {
      font-size: .8em;
    }
  }

  .movie-image {
    width: 100%;

    img {
      height: 300px;
      object-fit: contain;
    }
  }

  .fa-solid.fa-star {
    color: rgb(247, 214, 29);
  }
}
</style>