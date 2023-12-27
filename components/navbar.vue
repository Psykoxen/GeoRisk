<!-- components/Navbar.vue -->
<template>
  <div
    class="flex flex-row gap-5 items-center content-center m-5 bg-white w-fit p-2 pr-10 pl-10 rounded-xl shadow-md"
  >
    <a class="text-red-main-600" href="/"
      ><img src="../assets/svg/ico.svg" class="w-8 h-8 shadow-xl rounded-full"
    /></a>
    <a class="text-red-main-600 font-semibold" href="/">Accueil</a>
    <a class="text-red-main-600 font-semibold" href="/formations/"
      >Formations</a
    >
    <a class="text-red-main-600 font-semibold" href="/legal">Legal</a>
    <!-- <a class="text-red-main-600 font-semibold" href="/contact">Memo</a> -->
    <!-- <a class="text-red-main-600 font-semibold" href="/about">À propos</a> -->
  </div>
</template>

<script setup>
// Pas besoin de déclarer "export default" avec la syntaxe <script setup>
</script>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques à ce composant ici */
</style>
