<!-- components/Navbar.vue -->
<template>
  <div
    class="navbar left-0 flex flex-row gap-5 items-center content-center m-5 bg-white w-fit p-2 pr-10 pl-10 rounded-xl shadow-md"
  >
    <a class="text-green-main-600" href="/"
      ><img src="../assets/svg/ico.svg" class="w-8 h-8 shadow-xl rounded-full"
    /></a>
    <a class="text-green-main-600 font-semibold" href="/">Accueil</a>
    <a class="text-green-main-600 font-semibold" href="/formations/"
      >Formations</a
    >
    <a class="text-green-main-600 font-semibold" href="/legal">Legal</a>
    <!-- <a class="text-green-main-600 font-semibold" href="/contact">Memo</a> -->
    <!-- <a class="text-green-main-600 font-semibold" href="/about">À propos</a> -->
  </div>
</template>

<script setup>
// Pas besoin de déclarer "export default" avec la syntaxe <script setup>
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
