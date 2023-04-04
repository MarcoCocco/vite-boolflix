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

    search() {

      this.getAPIcallMovies();
      this.getAPIcallSeries();

    },


    getAPIcallMovies() {
      this.store.movies = [];

      return new Promise((resolve) => {
        axios.get(`${this.store.APIcall}search/movie${this.store.APIkey}&query=${this.store.searchByName}`).then((res) => {

          this.store.movies = res.data.results;
          resolve();

        }).catch((err) => {

          if (err.response.status === 404) {
            this.store.movies = [];
          }
        });

      });

    },

    getAPIcallSeries() {
      this.store.series = [];

      return new Promise((resolve) => {
        axios.get(`${this.store.APIcall}search/tv${this.store.APIkey}&query=${this.store.searchByName}`).then((res) => {

          this.store.series = res.data.results;
          resolve();
          
        }).catch((err) => {

          if (err.response.status === 404) {
            this.store.series = [];
          }
        });

      });

    },

  },

  created() {

    this.search();

  }

}

</script>

<template>
  <AppHeader @searchMovieTv="search()"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
