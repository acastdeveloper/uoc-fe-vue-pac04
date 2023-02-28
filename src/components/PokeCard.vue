<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps(["info"]);

let tipM = "";

let tipusL = props.info.tipus.length; //nº de tipus del poke
let tipusM = []; //submatriu de tipus del poke
for (let i = 0; i < tipusL; i++) {
  tipusM.push(props.info.tipus[i].type.name);
}
tipM = tipusM.toString();

const { nom, identitat, frontal, darrera, tipus } = props.info;

const goId = () => {
  router.push({ name: "pokemon-id", params: { id: props.info.id } });
};
</script>

<template>
  <article class="card" @click="goId()">
    <h2>{{ info.nom }}</h2>
    <img :src="props.info.frontal" alt="" />
    <div>Tipus: {{ tipM }}</div>
  </article>
</template>

<style lang="css" scoped>
.card {
  background-color: #eeee;
  color: #333;
  width: fit-content;
  /* height: 100px; */
  border: 2px solid #333;
  border-radius: 0.2rem;
  padding: 0.5rem;
  cursor: pointer;
}
</style>
