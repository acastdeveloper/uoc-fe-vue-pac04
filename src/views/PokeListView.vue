<script setup>
import { ref, onMounted, computed } from "vue";

import PokeCard from "@/components/PokeCard.vue";

import { getPokes } from "@/services/main-services";

const bundlePokes = ref([]);
const search = ref("");

onMounted(async () => {
  // bundlePokes = await getPokes();
  // console.log(bundlePokes);

  getPokes().then((response) => {
    bundlePokes.value = response;
    console.log(response);
  });
});

const filteredPokes = computed(() => {
  return bundlePokes.value.filter((poke) => {
    return poke.nom.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <h1>POKELIST</h1>

  <input v-model="search" type="text" id="filtre" />

  <section id="lescards">
    <!-- <PokeCard /> -->
    <PokeCard v-for="poke in filteredPokes" v-bind:key="poke.id" :info="poke" />

    <!-- <PokeCard :info="pokes.value" /> -->
  </section>
</template>

<style lang="css" scoped></style>
