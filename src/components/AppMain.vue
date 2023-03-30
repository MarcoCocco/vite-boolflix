<script>
import AppCard from './AppCard.vue';
import {store} from '../store.js';

export default {
    name: "AppMain",
    data() {
        return {
            store,
        };
    },

    components: { AppCard }
}
</script>

<template>
  <AppCard></AppCard>
</template>

<style lang="scss" scoped>

</style>