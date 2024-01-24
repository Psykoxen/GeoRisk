<template>
  <div class="bg-white risk w-full">
    <img 
    :src="'/risksIcons/' + title + '.svg'"
      alt="Risk"
      class="icon"
    />
    <div class="text-black flex flex-col items-center">
      <h3 class="text-center text-xl font-semibold">{{ title }}</h3>
      <RisksLabel :level="level" />
    </div>
  </div>
</template>

<style scoped>
.risk {
  position: relative; /* Ajout de la propriété position relative */
  border-radius: 10px;
  padding: 3vw 1vw 1vw 1vw;
  margin-top: 3vw;
}

.icon {
  width: 5vw;
  height: 5vw;
  position: absolute;
  top: 0; /* Positionne l'image au sommet de la div */
  left: 50%; /* Centre l'image horizontalement */
  transform: translate(
    -50%,
    -50%
  ); /* Décale l'image de 50% de sa propre largeur vers la gauche */
}

.content {
  color: black;
}
</style>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
