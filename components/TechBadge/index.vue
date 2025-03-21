<script lang="ts" setup>
const technoligies = {
  TypeScript: {
    color: "007ACC",
    logo: "typescript",
    logoColor: "white",
    link: "https://www.typescriptlang.org/",
  },
  JavaScript: {
    color: "F7DF1E",
    logo: "javascript",
    logoColor: "black",
    link: "https://www.javascript.com/",
  },
  "Node.js": {
    color: "43853D",
    logo: "node.js",
    logoColor: "white",
    link: "https://nodejs.org/",
  },
  "Express.js": {
    color: "404d59",
    logo: "express",
    logoColor: "61DAFB",
    link: "https://expressjs.com/",
  },
  "Office.js": {
    color: "2D8CFF",
    logo: "microsoft-office",
    logoColor: "white",
    link: "https://learn.microsoft.com/en-us/office/dev/add-ins/quickstarts/outlook-quickstart-yo",
  },
  React: {
    color: "20232A",
    logo: "react",
    logoColor: "61DAFB",
    link: "https://reactjs.org/",
  },
};

const props = defineProps<{
  tech: keyof typeof technoligies;
}>();

const selectedTech = technoligies[props.tech];
</script>

<template>
  <a :href="selectedTech.link" class="hover:opacity-80 transition-opacity">
    <img
      :src="`https://img.shields.io/badge/${props.tech}-${selectedTech.color}?style=for-the-badge&logo=${selectedTech.logo}&logoColor=white`"
      :alt="props.tech"
    />
  </a>
</template>
