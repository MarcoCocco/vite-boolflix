<script>
import AppCardMovie from './AppCardMovie.vue';
import { store } from '../store.js';
import AppCardSeries from './AppCardSeries.vue';

export default {
    name: "AppMain",
    data() {
        return {
            store,
        };
    },

    components: { AppCardMovie, AppCardSeries },
}
</script>

<template>
    <div v-if="store.movies.length > 0 || store.series.length > 0" class="movie-card-list">
        <AppCardMovie v-for="movie in store.movies" :movie="movie"></AppCardMovie>
        <AppCardSeries v-for="serie in store.series" :serie="serie"></AppCardSeries>
    </div>
    <div id="error-message" v-else>
        <p>Nessun risultato</p>
    </div>
</template>

<style lang="scss" scoped>
.movie-card-list {
    padding: 20px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
}

#error-message {
    text-align: center;
    margin-top: 50px;
    font-size: 1.4em;
}
</style>