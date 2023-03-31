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

    //Creo una funzione che mi permette di costruire una chiamata API di ricerca di film o serieTV in base ai parametri inseriti dall'utente.
    //Il risultato della chiamata verrà trasferita negli array vuoti di movies e series contenuti in store grazie alla select.
    getAPIcallMovieSeries() {
      this.store.movies = [];
      this.store.series = [];

      //Aggiungo una Promise all'interno della funzione per risolvere la chiamata prima di accedere ai dati, così da poterli avere solo quando sono disponibili.
      return new Promise((resolve) => {
        axios.get(`${this.store.APIcall}search/${this.store.searchOption + this.store.APIkey}&query=${this.store.searchByName}`).then((res) => {

          if (this.store.searchOption === 'movie') {
            this.store.movies = res.data.results;
          };

          if (this.store.searchOption === 'tv') {
            this.store.series = res.data.results;
          };

          resolve();

        }).catch((err) => {

          if (err.response.status === 404) {
            this.store.movies = [];
            this.store.series = [];
          }
        });

      });

    },

  },

  created() {
    //Richiamo la funzione di chiamata API.
    this.getAPIcallMovieSeries();

  },

}

</script>

<template>
  <AppHeader @searchMovieTv="getAPIcallMovieSeries()"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
