<script lang="ts" setup>
const props = defineProps<{
  name: string;
  display: string;
  image: string;
}>();
</script>

<template>
  <div>
    <h1 class="text-5xl text-center">{{ props.name }}</h1>
    <div class="pt-3">
      <div>
        <h2 class="text-xl text-center">
          {{ props.display }}
        </h2>
      </div>
    </div>
    <div>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
    </div>
  </div>
</template>
