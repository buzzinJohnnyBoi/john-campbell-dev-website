<template>
  <div class="footer bg-gray-300 p-2 rounded-t-2xl font-sans">
    <div class="sm:flex justify-center items-center m-1">
      <div
        class="p-2 sm:p-4 sm:inline-block text-center font-medium tracking-wide"
      >
        © {{ new Date().getFullYear() }} johncampbell.dev
      </div>
      <div
        class="p-2 sm:pl-4 sm:border-l sm:inline-block text-center font-light"
      >
        Hosted and developed by
        <NuxtLink
          to="/"
          class="text-blue-300 bg-gray-500 m-1 p-2 rounded-2xl hover:p-3 transition-all duration-300 font-semibold"
          transition-all
          duration-300
          ease-in-out
          >John Campbell</NuxtLink
        >
      </div>
    </div>

    <div>
      <FooterTechnologies />
    </div>
  </div>
</template>
