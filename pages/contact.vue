<script setup lang="ts">
useHead({
  title: "Contact - John Campbell",
});
</script>

<template>
  <h1 class="text-5xl text-center">Contact</h1>

  <div class="pt-3">
    <div>
      <h2 class="text-xl text-center">
        If you have a business opportunity for me, or just want to tell me how
        great my website looks, I'd love to hear from you!
      </h2>
    </div>
    <p class="text-lg text-center mt-3">
      Github:
      <a
        href="https://github.com/buzzinJohnnyBoi/"
        class="underline text-blue-500 hover:text-blue-700"
        >buzzinJohnnyBoi
      </a>
    </p>
    <p class="text-lg text-center">
      LinkedIn:
      <a
        href="https://www.linkedin.com/in/john-campbell-48b816304/"
        class="underline text-blue-500 hover:text-blue-700"
        >john-campbell
      </a>
    </p>
    <p class="text-lg text-center">
      Email:
      <a
        href="mailto:john@mrcampbell.ca"
        class="underline text-blue-500 hover:text-blue-700"
        >john@mrcampbell.ca
      </a>
    </p>
  </div>
  <ContactForm />
</template>
