import { defineStore } from "pinia";
import { api } from "../helper/api";

export const useAnimeListStore = defineStore({
    id: 'animeListStore',
    state: () => ({
        animeList: null,
        page: 1,
        size: 12
    }),
    getters: {
      getAnimeList: state => state.animeList
    },
    actions: {
      async fetchAnimes() {
        const response = await api.fetchAnimeList(this.page, this.size)
        if (response==null) return
        this.animeList=response.data
        console.log(this.animeList);
      }
    }
  })
  