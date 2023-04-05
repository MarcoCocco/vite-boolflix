<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  name: 'AppCardSeries',
  data() {
    return {

      store,
      serieInfo: false,
    }
  },

  methods: {
    flagSerieIcons() {
      let lang = this.serie.original_language;

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

    serieDetailsClosed() {
      this.serieInfo = false;
    },

    serieDetailsOpen() {
      this.serieInfo = true;
    },

    getGenreSerieNames() {
      let genres = this.store.genreSerieList.filter(genre => this.serie.genre_ids.includes(genre.id));
      let genreNames = genres.map(genre => genre.name);
      return genreNames;
    }

  },

  props: {
    serie: Object,
  },

  created() {

    axios.get(`${this.store.APIcall}/genre/tv/list${this.store.APIkey}`).then((res) => {

      this.store.genreSerieList = res.data.genres;

    });

  }

}
</script>

<template>
  <div @click="serieDetailsOpen()" id="card">
    <div class="card-side front">
      <div class="card-image">
        <img :src="'https://image.tmdb.org/t/p/w500/' + serie.poster_path" alt="img">
      </div>
    </div>
    <div class="card-side back">
      <div class="titles">
        <p><strong>{{ serie.name }}</strong></p>
        <p class="original-title"><em>({{ serie.original_name }})</em></p>
      </div>
      <div class="language">
        <span :class="`fi fi-${flagSerieIcons()}`"></span>
      </div>
      <div class="genre">
        <p>Genere: {{ getGenreSerieNames().join(', ') }}</p>
      </div>
      <div class="vote">
        <p>Voto</p>
        <i v-for=" star in Math.floor(serie.vote_average / 2)" class="fa-solid fa-star"></i>
        <i v-for=" star in 5 - Math.floor(serie.vote_average / 2)" class="far fa-star"></i>
      </div>
    </div>
  </div>

  <div v-show="serieInfo" class="card-details">
    <div class="go-back">
      <i @click="serieDetailsClosed()" class="fa-solid fa-xmark"></i>
    </div>
    <div class="info">
      <div class="general-info">
        <h1>{{ serie.name }}</h1>
        <p><em>({{ serie.original_name }})</em></p>
        <small><em>{{ serie.release_date }}</em></small><br>
        <span :class="`fi fi-${flagSerieIcons()}`"></span>
        <div class="genre">
          <p>Genere: {{ getGenreSerieNames().join(', ') }}</p>
        </div>
      </div>
      <div class="plot">
        <p><strong>Trama:</strong></p>
        <p>{{ serie.overview }}</p>
      </div>
      <div class="voteRating">
        <p>Voto</p>
        <i v-for=" star in Math.floor(serie.vote_average / 2)" class="fa-solid fa-star"></i>
        <i v-for=" star in 5 - Math.floor(serie.vote_average / 2)" class="far fa-star"></i><br>
        <span><small><em>({{ serie.vote_count }})</em></small></span>
      </div>
    </div>
    <div class="poster">
      <img :src="'https://image.tmdb.org/t/p/original/' + serie.poster_path" alt="img">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../AppCardStyle.scss';
</style>