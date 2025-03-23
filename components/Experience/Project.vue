<script lang="ts" setup>
import { technoligies } from "../TechBadge/techTypes";

const props = defineProps<{
  name: string;
  link?: {
    href: string;
    text: string;
  };
  summary: string;
  descriptionArray: string[];
  techArray: (keyof typeof technoligies)[];
}>();

import { useToggle } from "@vueuse/core";

const [showDescription, toggle] = useToggle(false);
</script>

<template>
  <div class="bg-gray-700 rounded-md p-4 mb-4">
    <h5 class="text-xl text-gray-100 mb-1">{{ props.name }}</h5>
    <a
      v-if="props.link"
      :href="props.link.href"
      class="text-indigo-400 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ props.link.text }}
    </a>
    <p class="text-gray-400 my-1">
      {{ props.summary }}
    </p>

    <ul
      class="p-1 overflow-hidden transition-all duration-300"
      :class="
        showDescription
          ? 'max-h-[500px] text-gray-400'
          : 'max-h-[0px] text-gray-700'
      "
    >
      <li
        class="mb-1"
        v-for="description in props.descriptionArray"
        :key="description"
      >
        {{ description }}
      </li>
    </ul>

    <button
      class="text-indigo-400 mb-3 py-1 px-3 bg-gray-800 rounded focus:outline-none ring-2 ring-indigo-400"
      @click="toggle()"
    >
      {{ showDescription ? "Hide" : "Show" }} Description
    </button>

    <div class="flex flex-wrap gap-2">
      <TechBadge v-for="tech in props.techArray" :key="tech" :tech="tech" />
    </div>
  </div>
</template>
