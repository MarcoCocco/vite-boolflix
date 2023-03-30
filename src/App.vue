<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import axios from 'axios';
import { store } from './store.js';

export default {
  data() {
    return {

      store,
    }
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {

    getAPIcallMovieSeries(searchOption, searchByName) {

      axios.get(`${this.store.APIcall}search/${searchOption + this.store.APIkey}&query=${searchByName}`).then((res) => {

        if (searchOption === 'movie') {
          this.store.movies = res.data.results;
        };

        if (searchOption === 'tv') {
          this.store.series = res.data.results;
        };

      });

    }

  },

  created() {
    this.getAPIcallMovieSeries('', '');
    console.log(this.store.series);
    console.log(this.store.movies);
  },


}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
