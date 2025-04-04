<script setup lang="ts">
useHead({
  title: "John Campbell",
});
</script>

<template>
  <div class="w-full h-full">
    <div class="max-h-screen">
      <video autoplay muted loop playsinline class="mx-auto max-h-screen">
        <source src="/john campbell.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-center font-bold font-['Space_Grotesk']">
        Hi, I'm John Campbell
      </h1>
      <h3 class="text-2xl text-center font-bold">Welcome to my website!</h3>
      <div class="m-4"></div>
    </div>
  </div>
</template>
