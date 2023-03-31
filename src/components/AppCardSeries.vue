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
    flagSeriesIcons() {

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
    <div class="title">
      <p>{{ serie.name }}</p>
    </div>
    <div class="original-title">
      <p><em>({{ serie.original_name }})</em></p>
    </div>
    <div class="language">
      <span :class="`fi fi-${flagSeriesIcons()}`"></span>
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