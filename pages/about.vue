<script lang="ts" setup>
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
  <div class="text-center mt-2">
    <h1 class="text-4xl my-2">About</h1>
    <p class="text-lg">
      My Name is John Campbell, and I am a Christian, Software Developer,
      hacker, and bitcoin miner.
    </p>
    <p class="text-lg">
      (people call me other things too, but they are not as nice)
    </p>
    <p class="text-lg">Here are some facts about me:</p>
    <!-- <ul class="text-left w-[60%] min-w-[90%] mx-auto"> -->
    <div class="mx-auto w-[60%] min-w-[90%]">
      <div v-for="fact in facts" :key="fact" class="text-left my-1">
        <div class="flex justify-start">
          <li></li>
          <span>
            <div class="inline">
              {{ fact }}
            </div>
          </span>
        </div>
      </div>
    </div>
    <!-- </ul> -->
  </div>
</template>
