<script>
import { store } from '../store.js';

export default {
  name: 'AppCardSeries',
  data() {
    return {

      store,
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
  },

  props: {
    serie: Object,
  }
}
</script>

<template>
  <div id="serie-card">
    <div class="serie-image">
      <img :src="'https://image.tmdb.org/t/p/w500/' + serie.poster_path" alt="img">
    </div>
    <div class="titles">
      <p><strong>{{ serie.name }}</strong></p>
      <p class="original-title"><em>({{ serie.original_name }})</em></p>
    </div>
    <div class="language">
      <span :class="`fi fi-${flagSerieIcons()}`"></span>
    </div>
    <div class="vote">
      <i v-for=" star in Math.floor(serie.vote_average / 2)" class="fa-solid fa-star"></i>
      <i v-for=" star in 5 - Math.floor(serie.vote_average / 2)" class="far fa-star"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#serie-card {
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

  .serie-image {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .fa-solid.fa-star {
    color: rgb(247, 214, 29);
  }

}
</style>