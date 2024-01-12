<template>
  <div class="bg-white risk w-full" @click="isOpen = true">
    <img
      v-if="title === 'Inondation'"
      src="../../assets/svg/risksIcons/Flooding.svg"
      alt="Flooding"
      class="icon"
    />
    <img
      v-if="title === 'Glissement de terrain'"
      src="../../assets/svg/risksIcons/GroundMouvements.svg"
      alt="GroundMovements"
      class="icon"
    />
    <img
      v-if="title === 'Seisme'"
      src="../../assets/svg/risksIcons/EarthQuakes.svg"
      alt="Earthquakes"
      class="icon"
    />
    <img
      v-if="title === 'Avalanche'"
      src="../../assets/svg/risksIcons/Avalanche.svg"
      alt="Avalanche"
      class="icon"
    />
    <img
      v-if="title === 'Feu de Forêt'"
      src="../../assets/svg/risksIcons/ForestFire.svg"
      alt="ForestFire"
      class="icon"
    />
    <img
      v-if="title === 'Volcaniques'"
      src="../../assets/svg/risksIcons/Volcano.svg"
      alt="VolcanicEruptions"
      class="icon"
    />
    <img
      v-if="title === 'Météorologiques'"
      src="../../assets/svg/risksIcons/Weather.svg"
      alt="weatherTroubles"
      class="icon"
    />
    <img
      v-if="title === 'Radon'"
      src="../../assets/svg/risksIcons/Radon.svg"
      alt="Radon"
      class="icon"
    />
    <img
      v-if="title === 'Industriels'"
      src="../../assets/svg/risksIcons/IndustrialRisk.svg"
      alt="IndustrialRisks"
      class="icon"
    />
    <img
      v-if="title === 'Transport Dangereux'"
      src="../../assets/svg/risksIcons/DangerTransport.svg"
      alt="DangerousMaterialsTransport"
      class="icon"
    />
    <img
      v-if="title === 'Rupture de Barrages'"
      src="../../assets/svg/risksIcons/DamBreaks.svg"
      alt="DamBreaks"
      class="icon"
    />
    <img
      v-if="title === 'Engins de guerre'"
      src="../../assets/svg/risksIcons/WarEngine.svg"
      alt="WarEngines"
      class="icon"
    />
    <img
      v-if="title === 'Miniers'"
      src="../../assets/svg/risksIcons/MiningRisk.svg"
      alt="MiningRisks"
      class="icon"
    />
    <img
      v-if="title === 'Nucléaires'"
      src="../../assets/svg/risksIcons/Nuclear.svg"
      alt="NuclearRisks"
      class="icon"
    />

    <div class="text-black flex flex-col items-center">
      <h3 class="text-center text-xl font-semibold">{{ title }}</h3>
      <p>{{ image }}</p>
      <RisksLabel :level="level" />
    </div>
  </div>
  <!-- <UModal v-model="isOpen">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Risque {{ title }}
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>
      <div>Definition du risque</div>
      <UDivider />
      <div class="flex flex-col items-center">
        <UAccordion :items="history" />
      </div>
    </UCard>
  </UModal> -->
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
    history: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
