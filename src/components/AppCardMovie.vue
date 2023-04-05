<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  name: 'AppCardMovie',
  data() {
    return {

      store,
      movieInfo: false,
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

    movieDetailsClosed() {
      this.movieInfo = false;
    },

    movieDetailsOpen() {
      this.movieInfo = true;
    },

    getGenreMovieNames() {
      let genres = this.store.genreMovieList.filter(genre => this.movie.genre_ids.includes(genre.id));
      let genreNames = genres.map(genre => genre.name);
      return genreNames;
    }

  },

  props: {
    movie: Object,
  },

  created() {

    axios.get(`${this.store.APIcall}/genre/movie/list${this.store.APIkey}`).then((res) => {

      this.store.genreMovieList = res.data.genres;

    });

  }

}
</script>

<template>
  <div @click="movieDetailsOpen()" id="card">
    <div class="card-side front">
      <div class="card-image">
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
      <div class="genre">
        <p>{{ getGenreMovieNames().join(', ') }}</p>
      </div>
      <div class="vote">
        <p>Voto</p>
        <i v-for=" star in Math.floor(movie.vote_average / 2)" class="fa-solid fa-star"></i>
        <i v-for=" star in 5 - Math.floor(movie.vote_average / 2)" class="far fa-star"></i>
      </div>
    </div>
  </div>

  <div v-show="movieInfo" class="card-details">
    <div class="go-back">
      <i @click="movieDetailsClosed()" class="fa-solid fa-xmark"></i>
    </div>
    <div class="info">
      <div class="general-info">
        <h1>{{ movie.title }}</h1>
        <p><em>({{ movie.original_title }})</em></p>
        <small><em>{{ movie.release_date }}</em></small><br>
        <span :class="`fi fi-${flagMovieIcons()}`"></span>
        <div class="genre">
          <p>{{ getGenreMovieNames().join(', ') }}</p>
        </div>
      </div>
      <div class="plot">
        <p><strong>Trama:</strong></p>
        <p>{{ movie.overview }}</p>
      </div>
      <div class="voteRating">
        <p>Voto</p>
        <i v-for=" star in Math.floor(movie.vote_average / 2)" class="fa-solid fa-star"></i>
        <i v-for=" star in 5 - Math.floor(movie.vote_average / 2)" class="far fa-star"></i><br>
        <span><small><em>({{ movie.vote_count }})</em></small></span>
      </div>
    </div>
    <div class="poster">
      <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="img">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../AppCardStyle.scss';
</style>