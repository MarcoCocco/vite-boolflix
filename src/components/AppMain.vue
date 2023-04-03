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
    <div class="movies-list">
        <h2>Film</h2>
        <div v-if="store.movies.length > 0" class="movie-card-list">
            <AppCardMovie v-for="movie in store.movies" :movie="movie"></AppCardMovie>
        </div>
        <div class="error-message" v-else>
            <p>Nessun risultato</p>
        </div>
    </div>
    <hr>
    <div class="series-list">
        <h2>Serie TV</h2>
        <div v-if="store.series.length > 0" class="serie-card-list">
            <AppCardSeries v-for="serie in store.series" :serie="serie"></AppCardSeries>
        </div>
        <div class="error-message" v-else>
            <p>Nessun risultato</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movies-list {

    h2 {
        text-align: center;
        padding: 10px 0;
    }

    .movie-card-list {
        padding: 20px;
        display: flex;
        flex-flow: row;
        gap: 20px;
        overflow-x: auto;
    }
}

.series-list {

    h2 {
        text-align: center;
        padding: 10px 0;
    }

    .serie-card-list {
        padding: 20px;
        display: flex;
        flex-flow: row;
        gap: 20px;
        overflow-x: auto;
    }
}

.error-message {
    text-align: center;
    margin-top: 50px;
    font-size: 1.4em;
}
</style>


