<script setup lang="ts">
useHead({
  title: "John Campbell Software Developer",
});
</script>

<template>
  <div class="w-full h-full">
    <div>
      <img
        src="/media/video-placeholder.png"
        alt="Description of image"
        class="w-full"
      />
    </div>
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-center font-bold">My name is John Campbell</h1>
      <div>
        <img
          src="/media/john-campbell.png"
          alt="Description of image"
          class="mt-4 w-[100px] rounded-full"
        />
        <HomeResume />
      </div>
    </div>
  </div>
</template>
