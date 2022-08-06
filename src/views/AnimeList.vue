<template>
  <div class="container">
    <h1>Anime List</h1>
    <div class="d-flex flex-column">
      <div v-for="(anime, i) in getAnimeList" class="card bg-light my-3">
        <!-- <img class="card-img-top" src="..." alt="Card image cap" /> -->
        <div class="card-body">
          <h5 class="card-title">
            <em>{{ anime.anime_name_russian }}</em>
          </h5>
          <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <b>Описание:</b> {{ anime.anime_description }}
          </li>
          <li class="list-group-item">
            <b>Год выпуска:</b> {{ anime.anime_year }} <br />
            <b>Количество серий:</b> {{ anime.anime_episodes }} <br />
          </li>
          <!-- <li class="list-group-item">Vestibulum at eros</li> -->
        </ul>
        <div class="card-body">
          <a
            :href="`https://shikimori.one/animes/${anime.anime_shikimori}`"
            class="card-link"
            target="_blank"
            >Shikimori</a
          >
          <router-link class="card-link" :to="'/anime/' + anime.anime_id"
            >Details</router-link
          >
        </div>
      </div>
    </div>
    <!-- <table class="table table-sm">
      <thead>
        <tr class="row table-success">
          <th v-for="header in headers" class="col">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(anime, i) in getAnimeList" class="row">
          <td class="col">{{ i + 1 }}</td>
          <td class="col">{{ anime.anime_name }}</td>
          <td class="col">{{ anime.anime_episodes }}</td>
          <td class="col">{{ anime.anime_year }}</td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import { useAnimeListStore } from "../stores/useAnimeListStore";
import { mapState, mapActions } from "pinia";

export default {
  name: "animeList",
  computed: {
    ...mapState(useAnimeListStore, ["getAnimeList"]),
  },
  methods: {
    ...mapActions(useAnimeListStore, ["fetchAnimes"]),
  },
  mounted() {
    this.fetchAnimes();
  },
  data() {
    return {
      headers: ["#", "title", "episodes", "year"],
    };
  },
};
</script>
