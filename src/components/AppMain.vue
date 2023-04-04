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
                <AppCardMovie v-for="movie in store.movies" :movie="movie"></AppCardMovie>
            </div>
            <div class="trending-movies" v-else>
                <h3><em> In tendenza questa settimana</em></h3>
                <div class="trending-movies-list">
                    <AppCardMovie v-for="movie in store.trendingMovies" :movie="movie"></AppCardMovie>
                </div>
            </div>

            <div class="series-list">
                <h2>Serie TV</h2>
                <div v-if="store.series.length > 0" class="serie-card-list">
                    <AppCardSeries v-for="serie in store.series" :serie="serie"></AppCardSeries>
                </div>
                <div class="trending-series" v-else>
                    <h3><em> In tendenza questa settimana</em></h3>
                    <div class="trending-series-list">
                        <AppCardSeries v-for="serie in store.trendingSeries" :serie="serie"></AppCardSeries>
                    </div>
                </div>
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

    .trending-movies {

        h3 {
            padding-left: 10px;
        }

        .trending-movies-list {
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

    .trending-series {

        h3 {
            padding-left: 10px;
        }

        .trending-series-list {
            padding: 10px;
            display: flex;
            flex-flow: row;
            gap: 10px;
            overflow-y: hidden;
            overflow-x: auto;
        }

    }

}
</style>


