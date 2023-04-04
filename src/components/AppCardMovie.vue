<script>
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

  },

  props: {
    movie: Object,
  },

}
</script>

<template>
  <div @click="movieDetailsOpen()" id="movie-card">
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

  <div v-show="movieInfo" class="film-details">
    <div class="go-back">
      <i @click="movieDetailsClosed()" class="fa-solid fa-xmark"></i>
    </div>
    <div class="info">
      <div class="general-info">
        <h1>{{ movie.title }}</h1>
        <p><em>({{ movie.original_title }})</em></p>
        <small><em>{{ movie.release_date }}</em></small><br>
        <span :class="`fi fi-${flagMovieIcons()}`"></span>
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
#movie-card {
  height: 300px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

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

.film-details {
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: rgba(0, 0, 0);

  .go-back {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 2em;
    transition: all .1s;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }

  .info {
    padding: 40px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3em;
    text-align: center;

    .plot {
      text-align: left;
    }

    .fa-solid.fa-star {
      color: rgb(247, 214, 29);
    }
  }

  .poster {

    img {
      height: 100%;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }

}
</style>