<script setup lang="ts">
useHead({
  title: "About - John Campbell Software Developer",
});

const currentDate = new Date();
const dateStartCoding = new Date("2018-02-15");
const dateStartProCoding = new Date("2023-07-11");

const yearsCoding = currentDate.getFullYear() - dateStartCoding.getFullYear();
const yearsProCoding =
  Math.round(
    ((currentDate.getTime() - dateStartProCoding.getTime()) /
      (1000 * 60 * 60 * 24 * 365)) *
      2
  ) / 2;

const facts: string[] = [
  `I have been a software developer for the last ${yearsCoding} years, the last ${yearsProCoding} professionally.`,
  "I was raised on a farm and was taught hard work and discipline from a young age.",
  "I have my own small server farm, which includes a custom firewall / router, layer 3 switches, a NAS, and a few servers with hypervisors.",
  "I LOVE DevOps, and have over 20 containers and VMs running various applications such as websites (including this one) password managers, load balancers, web scrapers, monitors, and more.",
  "I have 14 bitcoin miners, and use the exhaust to heat the shop and chicken barns.",
  "I know how to use security tools such as burp suite and kali linux to test web applications for vulnerabilities and am working toward my PortSwigger Burp Suite Certified Practitioner certification.",
  "I have 6 younger siblings (5 brothers)",
  "I have my Canadian Ham Radio licence",
  "I have my OMVIC certification (licence to sell cars in Ontario)",
];
</script>

<template>
  <div class="text-center mb-4 py-8">
    <h1 class="text-5xl font-bold text-center mb-10 font-['Space_Grotesk']">
      About
    </h1>
    <p class="text-lg font-bold font-['Space_Grotesk']">
      My Name is John Campbell, and I am a Christian, Software Developer,
      hacker, and bitcoin miner.
    </p>
    <p class="text-lg mb-4 font-['Inter']">
      Here are some other facts about me:
    </p>
    <div class="mx-auto w-full max-w-5xl">
      <ul class="list-disc list-inside space-y-2">
        <li
          v-for="fact in facts"
          :key="fact"
          class="bg-gray-100 p-4 rounded shadow font-['Inter'] leading-relaxed"
        >
          {{ fact }}
        </li>
      </ul>
    </div>
  </div>
</template>
