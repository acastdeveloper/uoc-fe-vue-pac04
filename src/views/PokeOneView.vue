<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { getPokes, getLocalPokeById } from "@/services/main-services";

const route = useRoute();

const { id, nom, frontal, darrera, tipus } = getLocalPokeById(route.params.id);

const tipusML = tipus.length;
const tipusM = [];

for (let i = 0; i < tipusML; i++) {
  tipusM[i] = tipus[i].type.name;
}
const tipusMtoString = tipusM.toString();
</script>

<template>
  <div>
    <h1>{{ nom }}</h1>
    <img :src="frontal" :alt="nom - frontal" /><img
      :src="darrera"
      :alt="darrera"
    />
    <div>Tipus: {{ tipusMtoString }}</div>
  </div>
</template>

<style lang="css" scoped></style>
