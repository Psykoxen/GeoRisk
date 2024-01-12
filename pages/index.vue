<script>
const toast = useToast();
export default {
  data() {
    return {
      response: null,
      flooding: 0,
      groundMovements: 0,
      earthquakes: 0,
      avalanches: 0,
      volcanicEruptions: 0,
      forestFires: 0,
      weatherTroubles: 0,
      radon: 0,
      industrialRisks: 0,
      nuclearRisks: 0,
      damBreaks: 0,
      dangerTransport: 0,
      warEngines: 0,
      miningRisks: 0,
    };
  },
  methods: {
    async requestDanger() {
      if (document.getElementById("adress").value === "") {
        console.log("empty");
        toast.add({
          title: "Recherche Invalide",
          description: "Veuillez entrer une adresse valide",
          icon: "i-heroicons-x-circle",
          color: "red",
        });
        return;
      } else {
        try {
          const response = await $fetch("/api/risk", {
            method: "post",
            body: { adress: document.getElementById("adress").value },
          });
          this.$data.response = response;
          this.setDefaultValue();
          for (let i = 0; i < response.risques.length; i++) {
            switch (parseInt(response.risques[i].num_risque)) {
              case 140:
              case 180:
              case 183:
              case 130:
              case 286:
                this.$data.flooding++;
                break;
              case 134:
              case 135:
              case 143:
              case 147:
              case 153:
              case 157:
                this.$data.groundMovements++;
                break;
              case 158:
                this.$data.earthquakes++;
                break;
              case 159:
                this.$data.avalanches++;
                break;
              case 160:
                this.$data.volcanicEruptions++;
                break;
              case 166:
                this.$data.forestFires++;
                break;
              case 167:
              case 168:
              case 169:
              case 175:
              case 176:
              case 177:
                this.$data.weatherTroubles++;
                break;
              case 229:
                this.$data.radon++;
                break;
              case 215:
              case 236:
              case 237:
              case 238:
                this.$data.industrialRisks++;
                break;
              case 230:
                this.$data.nuclearRisks++;
                break;
              case 213:
                this.$data.damBreaks++;
                break;
              case 226:
                this.$data.dangerTransport++;
                break;
              case 231:
                this.$data.warEngines++;
                break;
              case 256:
              case 254:
              case 293:
              case 288:
              case 259:
                this.$data.miningRisks++;
                break;
            }
          }
          console.log(response);
        } catch (error) {
          console.error("Error fetching data:", error);
          toast.add({
            title: "Erreur",
            description: "Oups, une erreur est survenue",
            icon: "i-heroicons-question-mark-circle",
            color: "amber",
          });
        }
      }
    },
    setDefaultValue() {
      this.$data.flooding = 0;
      this.$data.groundMovements = 0;
      this.$data.earthquakes = 0;
      this.$data.avalanches = 0;
      this.$data.volcanicEruptions = 0;
      this.$data.forestFires = 0;
      this.$data.weatherTroubles = 0;
      this.$data.radon = 0;
      this.$data.industrialRisks = 0;
      this.$data.nuclearRisks = 0;
      this.$data.damBreaks = 0;
      this.$data.dangerTransport = 0;
      this.$data.warEngines = 0;
      this.$data.miningRisks = 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", function () {
      let value = window.scrollY;

      title.style.marginTop = value * 1.8 + "px";
      layer6.style.top = value * 1.5 + "px";
      layer5.style.top = value * 1.3 + "px";
      layer4.style.top = value * 1.0 + "px";
      layer3.style.top = value * 0.8 + "px";
      layer2.style.top = value * 0.6 + "px";
    });
  },
};
</script>

<template>
  <section>
    <section class="parallax">
      <img src="../assets/img/layer6.png" alt="layer6" id="layer6" />
      <img src="../assets/img/layer5.png" alt="layer5" id="layer5" />
      <img src="../assets/img/layer4.png" alt="layer4" id="layer4" />
      <h2 id="title" class="text-8xl">GeoRisk</h2>
      <img src="../assets/img/layer3.png" alt="layer3" id="layer3" />
      <img src="../assets/img/layer2.png" alt="layer2" id="layer2" />
      <img src="../assets/img/layer1.png" alt="layer1" id="layer1" />
    </section>
    <section
      class="sec relative flex flex-col w-full items-center justify-center pb-20"
    >
      <div class="flex flex-row md:w-2/3 rounded-lg shadow-lg">
        <input
          class="bg-white text-black p-4 mb-4 border-solid border-2 rounded-l-full border-light-gray-main-100 md:w-3/4 2/3"
          type="text"
          id="adress"
          placeholder="Adresse, Commune, Lieu-dit"
          @change="requestDanger()"
        />
        <button
          class="bg-green-main-600 text-white p-4 mb-4 md:w-1/4 1/3 rounded-r-full outline-none focus:outline-none"
          @click="requestDanger()"
        >
          Rechercher
        </button>
      </div>
      <div
        v-if="this.$data.response !== null"
        class="flex flex-col items-center md:grid grid-cols-4 gap-4 w-full lg:w-2/3 md:3/4 p-10"
      >
        <RisksBox
          class="col-span-1"
          :level="flooding"
          :title="'Inondation'"
          :history="response?.catnat"
        />
        <div
          class="col-span-2 hidden md:flex flex-col items-center justify-center h-full"
        >
          <h2 class="text-center font-semibold">{{ response?.city }}</h2>
        </div>
        <RisksBox
          class="col-span-1"
          :level="groundMovements"
          :title="'Glissement de terrain'"
        />
        <RisksBox class="col-span-1" :level="earthquakes" :title="'Seisme'" />
        <RisksBox class="col-span-1" :level="avalanches" :title="'Avalanche'" />
        <RisksBox
          class="col-span-1"
          :level="volcanicEruptions"
          :title="'Volcaniques'"
        />
        <RisksBox
          class="col-span-1"
          :level="forestFires"
          :title="'Feu de Forêt'"
        />
        <RisksBox
          class="col-span-1"
          :level="weatherTroubles"
          :title="'Météorologiques'"
        />
        <RisksBox class="col-span-1" :level="radon" :title="'Radon'" />
        <RisksBox
          class="col-span-1"
          :level="industrialRisks"
          :title="'Industriels'"
        />
        <RisksBox
          class="col-span-1"
          :level="nuclearRisks"
          :title="'Nucléaires'"
        />
        <RisksBox
          class="col-span-1"
          :level="damBreaks"
          :title="'Rupture de Barrages'"
        />
        <RisksBox
          class="col-span-1"
          :level="dangerTransport"
          :title="'Transport Dangereux'"
        />
        <RisksBox
          class="col-span-1"
          :level="warEngines"
          :title="'Engins de guerre'"
        />
        <RisksBox class="col-span-1" :level="miningRisks" :title="'Miniers'" />
      </div>
    </section>
  </section>
</template>

<style>
.parallax {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4ffee;
  overflow: hidden;
  min-width: 100vw;
}

.parallax img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  pointer-events: none;
  object-fit: cover;
  min-width: 100vw;
}

.sec {
  position: relative;
  background-color: #011104;
}

.sec h2 {
  color: #fff;
  font-size: 3rem;
}

#title {
  position: absolute;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
