<script setup lang="ts">
const props = defineProps<{
  link: string;
  name: string;
}>();
</script>

<template>
  <NuxtLink
    :to="props.link"
    class="m-2 p-2 px-3 rounded hover:bg-gray-900 hover:text-green-500"
  >
    {{ props.name }}
  </NuxtLink>
</template>
