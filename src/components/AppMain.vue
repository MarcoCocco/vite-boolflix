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

    props: {
        movie: Object,
    },
}
</script>

<template>
    <div class="container">
        <div class="movies-list">
            <h2>Film</h2>
            <div v-if="store.movies.length > 0" class="movie-card-list">
                <AppCardMovie v-for="movie in store.movies" :movie="movie">
                </AppCardMovie>

            </div>
            <div class="error-message" v-else>
                <p>Nessun risultato</p>
            </div>
        </div>

        <div class="series-list">
            <h2>Serie TV</h2>
            <div v-if="store.series.length > 0" class="serie-card-list">
                <AppCardSeries v-for="serie in store.series" :serie="serie"></AppCardSeries>
            </div>
            <div class="error-message" v-else>
                <p>Nessun risultato</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    padding-top: 80px;
    display: flex;
    flex-direction: column;

    .movies-list {

        h2 {
            padding: 10px;
        }

        .movie-card-list {
            padding: 10px;
            display: flex;
            flex-flow: row;
            gap: 10px;
            overflow-y: hidden;
            overflow-x: auto;
        }
    }

    .series-list {

        h2 {
            padding: 10px;
        }

        .serie-card-list {
            padding: 10px;
            display: flex;
            flex-flow: row;
            gap: 10px;
            overflow-y: hidden;
            overflow-x: auto;
        }
    }

    .error-message {
        margin-bottom: 20px;
        text-align: center;
        font-size: 1.4em;
    }

}


</style>


