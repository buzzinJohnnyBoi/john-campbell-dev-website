<script setup lang="ts">
const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Something", link: "/something" },
];
</script>

<template>
  <div>
    <nav class="bg-gray-700 text-white text-lg p-4 border-b-2">
      <ul class="flex space-x-4 items-center">
        <li class="small-screen">
          <NavFoldable :links="links" />
        </li>
        <NuxtLink to="/" class="jcampbell-logo"> John Campbell </NuxtLink>
        <li class="large-screen" v-for="(link, index) in links" :key="index">
          <NavLink :name="link.name" :link="link.link" />
        </li>
      </ul>
    </nav>
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
