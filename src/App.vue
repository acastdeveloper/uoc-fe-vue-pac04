<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

let interruptor = ref(false);

const toggle = () => {
  interruptor.value = !interruptor.value;

  if (interruptor.value == true) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.removeAttribute("data-theme");
  }
};
</script>

<template>
  <div id="wrapper">
    <header>
      <label for="switcher" id="tracker"
        ><input type="checkbox" id="switcher" @click="toggle" />
        <div id="ball"></div>
      </label>
    </header>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      -
      <RouterLink to="/pokelist">PokeList</RouterLink>
    </nav>

    <main>
      <div id="intrawrapp">
        <RouterView v-slot="{ Component, route }">
          <keep-alive>
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </RouterView>
      </div>
    </main>

    <footer>Lo de sota</footer>
  </div>
</template>

<style lang="css" scoped>
nav a {
  margin: 0 0.2rem;
}

nav a.router-link-exact-active {
  color: black;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
