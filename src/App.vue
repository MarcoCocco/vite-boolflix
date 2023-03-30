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

    //Creo una funzione che mi permette di costruire una chiamata API di ricerca di film o serieTV in base ai parametri inseriti.
    //Il risultato della chiamata verrà trasferita negli array vuoti di movies e series contenuti in store grazie al primo parametro specificato.
    getAPIcallMovieSeries(searchOption, searchByName) {
      //Aggiungo una Promise all'interno della funzione per risolvere la chiamata prima di accedere ai dati, così da poterli avere solo quando sono disponibili.
      return new Promise((resolve) => {
        axios.get(`${this.store.APIcall}search/${searchOption + this.store.APIkey}&query=${searchByName}`).then((res) => {

          if (searchOption === 'movie') {
            this.store.movies = res.data.results;
          };

          if (searchOption === 'tv') {
            this.store.series = res.data.results;
          };

          resolve();

        });
      });
    },

  },

  created() {
    //Richiamo la funzione di chiamata API inserendo i parametri specificati.
    this.getAPIcallMovieSeries('', '').then(() => {
      console.log(this.store.series);
      console.log(this.store.movies);
    });
  },

}
  
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
