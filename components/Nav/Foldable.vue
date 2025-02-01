<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const props = defineProps<{
  links: { link: string; name: string }[];
}>();

const open = ref(false);
const target = ref(null);

onClickOutside(target, () => (open.value = false));
</script>

<template>
  <div ref="target">
    <div
      class="p-1 hover:bg-black hover:rounded cursor-pointer"
      v-on:click="open = !open"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </div>
    <transition name="slide">
      <div
        v-if="open"
        class="bg-gray-800 m-0 p-2 absolute top-[70px] left-0 flex flex-col w-[300px] max-w-full h-[calc(100vh-70px)]"
      >
        <NavLink
          v-for="(link, index) in props.links"
          :key="index"
          :name="link.name"
          :link="link.link"
          :onclick="() => (open = false)"
        />
      </div>
    </transition>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
