import { defineStore } from "pinia";
import { api } from "../helper/api";

export const useAnimeMainStore = defineStore({
    id: 'animeMainStore',
    state: () => ({
        anime: null,
    }),
    getters: {
      getAnime: state => state.anime
    },
    actions: {
      async fetchAnimeById(id) {
        const response = await api.fetchAnimeById(id)
        if (response==null) return
        this.anime=response.data[0]
        console.log(this.animeInfo);
      }
    }
  })
  