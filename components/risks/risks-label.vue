<template>
  <p
    class="bg-green-300 text-green-700 font-semibold rounded-lg w-fit pl-3 pr-3"
    v-if="level == 0"
  >
    FAIBLE
  </p>
  <p
    class="bg-yellow-300 text-yellow-500 font-semibold rounded-lg w-fit pl-3 pr-3"
    v-else-if="level == 1"
  >
    EXISTANT
  </p>
  <p
    class="bg-red-300 text-red-500 font-semibold rounded-lg w-fit pl-3 pr-3"
    v-else-if="level >= 2"
  >
    IMPORTANT
  </p>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>
