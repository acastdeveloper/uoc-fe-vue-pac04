<script setup>
import { ref, onMounted } from "vue";

import { randM } from "@/assets/services/random.js";

import myAPI from "@/assets/services/getpokesaxios.js";

console.log(randM(1279));

import PokeCard from "@/components/PokeCard.vue";

const pokes = ref([]);

// myAPI.getPhotos().then((response) => console.log(response.data));

onMounted(() => {
  myAPI.getPokes(643).then((response) => {
    console.log(response.data);
    pokes.value = response.data;
  });
});
</script>

<template>
  <h1>POKELIST (total: {{ pokes.count }})</h1>

  <section id="lescards">
    <PokeCard v-for="poke in pokes.results" v-bind:key="poke.id" :info="poke" />
  </section>
</template>

<style lang="css" scoped></style>
