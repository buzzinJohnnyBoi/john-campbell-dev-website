<script setup lang="ts"></script>

<template>
  <div>
    <nav class="bg-gray-700 text-white text-lg p-4 border-b-2">
      <ul class="flex space-x-4">
        <li>
          <NuxtLink to="/" class="jcampbell-logo"> John Campbell </NuxtLink>
          <NavLink name="About" link="/about" />
          <NavLink name="Projects" link="/projects" />
          <NavLink name="Something" link="/something" />
        </li>
      </ul>
    </nav>
  </div>
</template>
