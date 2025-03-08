<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
const { y } = useWindowScroll(window);

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Experience", link: "/experience" },
  { name: "Contact", link: "/contact" },
];
</script>

<template>
  <div>
    <nav
      class="bg-gray-700 text-white text-lg px-4 border-b-2 fixed w-full transition-all duration-750"
      :class="{ 'py-6': y === 0, 'py-3': y > 0 }"
    >
      <ul class="flex space-x-4 items-center">
        <li class="small-screen">
          <NavFoldable :links="links" :shrunkNav="y > 0" />
        </li>
        <NuxtLink to="/" class="jcampbell-logo"> John Campbell </NuxtLink>
        <li class="large-screen" v-for="(link, index) in links" :key="index">
          <NavLink :name="link.name" :link="link.link" />
        </li>
      </ul>
    </nav>
    <div class="h-[84px]"></div>
  </div>
</template>

<style scoped>
.small-screen {
  display: none;
}

.large-screen {
  display: block;
}

@media (max-width: 725px) {
  .small-screen {
    display: block;
  }

  .large-screen {
    display: none;
  }
}
</style>
