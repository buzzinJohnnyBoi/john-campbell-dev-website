<script lang="ts" setup>
import { type ContactMessage } from "~/types/contact";

const message = ref<ContactMessage>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const error = ref<string | null>(null);
const success = ref<string | null>(null);

const submitForm = async () => {
  const response = await $fetch("/api/contact", {
    method: "POST",
    body: message.value,
  });

  if (response.success === false) {
    success.value = null;
    error.value = response.message;
  } else {
    error.value = null;
    success.value = response.message;
  }
};
</script>

<template>
  <div>
    <form
      class="mx-auto w-[60%] min-w-[min(600px,90%)]"
      @submit.prevent="submitForm"
    >
      <label for="name" class="block font-medium text-gray-900 text-lg my-3"
        >Name</label
      >
      <div
        class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
      >
        <input
          type="text"
          name="name"
          class="block min-w-0 grow py-1.5 pr-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none text-lg"
          placeholder="Your Name"
          v-model="message.name"
          autocomplete="name"
          required
        />
      </div>
      <label for="email" class="block font-medium text-gray-900 text-lg my-3"
        >Email</label
      >
      <div
        class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
      >
        <input
          type="text"
          name="email"
          class="block min-w-0 grow py-1.5 pr-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none text-lg"
          placeholder="Your Email"
          v-model="message.email"
          autocomplete="email"
          required
        />
      </div>
      <label for="subject" class="block font-medium text-gray-900 text-lg my-3"
        >Subject</label
      >
      <div
        class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
      >
        <input
          type="text"
          name="subject"
          class="block min-w-0 grow py-1.5 pr-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none text-lg"
          placeholder="Message Subject"
          v-model="message.subject"
          required
        />
      </div>

      <label for="message" class="block font-medium text-gray-900 text-lg my-3"
        >Message</label
      >
      <div
        class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
      >
        <textarea
          type="text"
          name="message"
          class="block min-h-[130px] min-w-0 grow py-1.5 pr-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none text-lg"
          placeholder="Message....."
          v-model="message.message"
          required
        ></textarea>
      </div>
      <div v-if="success" class="text-green-500 text-lg mt-2">
        {{ success }}
      </div>
      <div v-if="error" class="text-red-500 text-lg mt-2">{{ error }}</div>
      <div class="h-16">
        <button
          class="mt-2 float-right px-4 py-2 bg-blue-800 text-white rounded text-lg hover:cursor-pointer"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>
