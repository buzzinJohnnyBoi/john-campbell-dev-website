<script lang="ts" setup>
import { technoligies } from "./techTypes";

const props = defineProps<{
  tech: keyof typeof technoligies;
}>();

const selectedTech = technoligies[props.tech];
</script>

<template>
  <a
    :href="selectedTech.link"
    target="_blank"
    rel="noopener noreferrer"
    class="hover:opacity-80 transition-opacity"
  >
    <img
      :src="`https://img.shields.io/badge/${props.tech}-${selectedTech.color}?style=for-the-badge&logo=${selectedTech.logo}&logoColor=${selectedTech.logoColor}`"
      :alt="props.tech"
    />
  </a>
</template>
