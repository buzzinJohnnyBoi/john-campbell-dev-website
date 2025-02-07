<template>
  <div class="tech-container bg-gray-400 rounded py-1.5">
    <div class="tech-items">
      <p class="p-1">Built with</p>
      <FooterTechnologiesVue />
      <FooterTechnologiesTailwind />
    </div>
    <div class="tech-items">
      <p class="p-1">Tested with</p>
      <FooterTechnologiesPlaywright />
    </div>
    <div class="tech-items">
      <p class="p-1">Deployed With</p>
      <FooterTechnologiesGithubActions />
    </div>
    <div class="tech-items">
      <p class="p-1">
        View website repo on
        <a
          href="https://github.com/buzzinJohnnyBoi/john-campbell-dev-website"
          class="text-blue-300 hover:text-blue-400 p-1 bg-black rounded"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1100px) {
  .tech-container {
    @apply flex justify-center items-center;
  }
}

@media (min-width: 400px) {
  .tech-items {
    @apply flex justify-center items-center;
  }
}
</style>
