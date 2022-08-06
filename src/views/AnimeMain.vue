<template>
  <div class="img-bg h-100">
    <div v-if="getAnime" class="container">
      <ul class="list-group">
        <li class="list-group-item mt-3">
          <b
            >Название:
            <h2>
              <em
                >{{ getAnime.anime_name }} ||
                {{ getAnime.anime_name_russian }}</em
              >
            </h2></b
          >
        </li>
        <li class="list-group-item">
          <b>Описание:</b> {{ getAnime.anime_description }}
        </li>
        <li class="list-group-item">
          Количество серий: {{ getAnime.anime_episodes }}
        </li>
        <li class="list-group-item">Год выпуска: {{ getAnime.anime_year }}</li>
        <li class="list-group-item">
          Эпизоды:
          <div class="d-flex flex-row flex-wrap">
            <div
              v-for="(ep, i) in Array(getAnime.anime_episodes)"
              role="group"
              aria-label="Basic radio toggle button group"
              class="btn-group"
            >
              <input
                class="btn-check"
                v-model="episode"
                type="radio"
                :value="i + 1"
                :id="i + 1"
              />
              <label class="btn btn-outline-primary" :for="i + 1">{{
                i + 1
              }}</label>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="d-flex justify-content-center">
            <iframe
              :src="`https://sovetromantica.com/embed/episode_${anime_id}_${episode}-subtitles`"
              frameborder="0"
              width="50%"
              height="500px"
              controls
              allowfullscreen
            ></iframe>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useAnimeMainStore } from "@/stores/useAnimeMainStore";
import { mapState, mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(useAnimeMainStore, ["fetchAnimeById"]),
  },
  computed: {
    ...mapState(useAnimeMainStore, ["getAnime"]),
  },
  async mounted() {
    console.log(this.anime_id);
    await this.fetchAnimeById(this.anime_id);
  },
  data() {
    return {
      anime_id: this.$route.params.id,
      episode: 1,
    };
  },
};
</script>

<style scoped>
.img-bg {
  background-image: url("@/assets/anime-bg-2.jpg");
}
</style>
