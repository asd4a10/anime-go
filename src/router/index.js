import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AnimeList from '@/views/AnimeList.vue';
import AnimeMain from "@/views/AnimeMain.vue";
import AnimeEpisode from "@/views/AnimeEpisode.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/anime-list',
      name: 'anime-list',
      component: AnimeList
    },
    {
      path: '/anime/:id', 
      name: 'show-anime', 
      component: AnimeMain
    },
    {
      path: '/anime/:id/episode/:ep', 
      name: 'show-anime-episode', 
      component: AnimeEpisode
    },
  ]
})

export default router
