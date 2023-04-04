<script>
import { store } from '../store.js';

export default {
  name: 'AppHeader',
  data() {
    return {

      store,
    }
  },

  emits: ['searchMovieTv'],
}
</script>

<template>
  <div class="header-container">
    <div class="logo">
      <img src="/images/logo.png" alt="">
    </div>
    <div class="search-options">
      <div id="search-input">
        <input v-model="store.searchByName" @keyup.enter="$emit('searchMovieTv')" type="text"
          placeholder="Cerca film o serie TV">
      </div>
      <div id="search-button">
        <button @click="$emit('searchMovieTv')"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .8s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .logo {
    width: 200px;

    img {
      width: 100%;
    }
  }

  .search-options {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    #search-input {

      input {
        width: 300px;
        padding: 8px 10px;
        border: none;
        border-radius: 10px;
        outline: none;

        &:hover {
          border-bottom: 2px solid red;
        }
        
      }
    }

    #search-button {
      button {
        border: none;
        background-color: transparent;
        font-size: 1.4em;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>