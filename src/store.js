import { reactive } from 'vue';

export const store = reactive({
    
    movies: [],
    series: [],

    APIcall: 'https://api.themoviedb.org/3/',
    APIkey: '?api_key=79df9325d7b5c5e08286cf9835c23b59',

    searchByName: '',
    searchOption: '',

});