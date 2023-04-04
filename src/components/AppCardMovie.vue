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
    <div class="card-side front">
      <div class="movie-image">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="img">
      </div>
    </div>
    <div class="card-side back">
      <div class="titles">
        <p><strong>{{ movie.title }}</strong></p>
        <p class="original-title"><em>({{ movie.original_title }})</em></p>
      </div>
      <div class="language">
        <span :class="`fi fi-${flagMovieIcons()}`"></span>
      </div>
      <div class="vote">
        <p>Voto</p>
        <i v-for=" star in Math.floor(movie.vote_average / 2)" class="fa-solid fa-star"></i>
        <i v-for=" star in 5 - Math.floor(movie.vote_average / 2)" class="far fa-star"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#movie-card {
  height: 300px;
  position: relative;

  .card-side {
    backface-visibility: hidden;
    transition: all 0.8s ease;
  }

  .movie-image {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 200px;
      height: 300px;
      object-fit: cover;
      box-shadow: 0px 8px 7px -3px rgba(0, 0, 0, 0.7);
    }
  }

  &:hover .card-side.front {
    transform: rotateY(180deg);
  }

  .card-side.back {
    width: 100%;
    height: 300px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: rotateY(-180deg);
    top: 0;
    left: 0;
    text-align: center;
    border: 1px solid red;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 8px 7px -3px rgba(0, 0, 0, 0.7);
  }

  .titles {

    .original-title {
      font-size: .8em;
    }
  }

  .fa-solid.fa-star {
    color: rgb(247, 214, 29);
  }

  &:hover .card-side.back {
    transform: rotateY(0deg);
  }

}
</style>