<script setup lang="ts">
useHead({
  title: "Experience - John Campbell",
});
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-5xl font-bold text-center mb-10 font-['Space_Grotesk']">
      Experience
    </h1>

    <div class="bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div class="flex flex-col md:flex-row md:justify-between mb-4">
        <div>
          <h2 class="text-2xl font-semibold text-indigo-400">
            ROYCE AYR Cutting Tools
          </h2>
          <h3 class="text-xl font-medium text-gray-300">
            Software Developer / DevOps / Systems Administrator
          </h3>
        </div>
        <div class="mt-2">
          <span
            class="inline-block bg-indigo-900 text-indigo-200 px-3 py-1 rounded text-sm font-medium"
          >
            July 2023 - Present
          </span>
        </div>
      </div>

      <div class="text-gray-400 mb-4">
        <p>
          Responsiblities included developing and deploying various
          applications, as well as managing IT systems such as physical servers
          and computers.
        </p>
        <p>
          My boss and I were the only developers at the company, and I was the
          only one who was a full-stack dev, so projects below I wrote all of
          the code for, minus a few complex SQL queries.
        </p>
      </div>
      <div class="mt-6">
        <h4 class="font-semibold text-lg text-gray-200 mb-2">Projects:</h4>

        <ExperienceProject
          name="Product Website"
          :link="{
            href: 'https://products.royceayr.com/',
            text: 'products.royceayr.com',
          }"
          summary="Developed and deployed a website with dynamic user content for Royce's product line."
          :descriptionArray="[
            'Uses a unique data structure with categories, subcategories, series categories, and products, with the series having multiple parent subcategories.',
            'Customers have the ability to sort by product properties, machine type, machine manufacturer, or industry / application.',
            'Dealers have the ability to log in to see their pricing and stock quantities. This data is pulled from Royce\'s ERP system.',
            'Admin Portal is hosted internally, and allows for modifcation of all data on the site. The data can be published to the live site with the click of a button.',
            'SEO with dynamic sitemap generation.',
            'CI / CD pipeline setup with GitHub Actions, using Playwright for e2e testing and Jest for unit testing. Deployed on a Ubuntu VPS with OpenTelemetry for monitoring, Prometheus for metrics, Loki for logs, Tempo for tracing, and Grafana for visualization.',
          ]"
          :techArray="[
            'TypeScript',
            'Node.js',
            'Next.js',
            'React',
            'Bootstrap',
            'Drizzle',
            'PostgreSQL',
            'GitHub Actions',
            'Playwright',
            'Jest',
            'OpenTelemetry',
            'Prometheus',
            'Grafana',
          ]"
        />

        <ExperienceProject
          name="Scanning 007"
          summary="Developed and deployed reporting / management software for production."
          :descriptionArray="[
            'Allows the managers to schedule jobs, set priorites, view job durations, and report pieces completed.',
            'Allows employees on the shop floor to see priorites and easily log setup / run times for single / group jobs and report pieces (scan)',
            'Also has a timecard portion for employees to log their hours, and a reporting section for managers to see the data.',
            'Uses a complicated formula to calculate the projected inventory (as some parts are component parts of other parts)',
            'The 7th iteration of the application, hence the name.',
          ]"
          :techArray="[
            'TypeScript',
            'Node.js',
            'Next.js',
            'React',
            'Bootstrap',
            'Drizzle',
            'MySQL',
            'Playwright',
            'Jest',
          ]"
        />

        <ExperienceProject
          name="Outlook Addin / PDF Generator"
          summary="Developed and deployed a Microsoft Outlook add-in that uses a node.js / express server to generate and attach PDF documents of customer documents."
          :descriptionArray="[
            'Solves a problem with the difficulty of obtaining PDF copies of orders / quotes / invoices for customers.',
            'This former process for obtaining these documents would be one of 2 ways, depending on the document: 1) navigate to the correct page in the ERP, and email it to the employee who would then forward it to the customer. Or 2) going into the filing cabinet, scan it to the employee\'s email, and then forward it to the customer.',
            'Because of the nature of Royce\'s business, ~100 documents were being requested per day.',
            'The new system that I developed is an Outlook add-in that allows the user to select the document type (order, quote, etc), enter in the UID for the document, and the application will pull the data off the system, create the PDF and attach it to the email.',
            'Any employee can now access any document in seconds in their outlook client because of this application.',
          ]"
          :techArray="[
            'TypeScript',
            'JavaScript',
            'Node.js',
            'Express.js',
            'Office.js',
            'React',
          ]"
        />

        <ExperienceProject
          name="US Shipment Master"
          summary="Developed and deployed a web app that automates the process of generating US customs documents for shipments to the US."
          :descriptionArray="[
            'Replaces a manual process that took ~7 hours a week which now takes ~40 min a week with more accurate data',
            'Works by taking BOL data from Royce\'s ERP system and finding the appropriate tariffs / country of origins for the items on the BOL',
            'Generates correct upload files / pdfs for the US customs',
          ]"
          :techArray="['JavaScript', 'Node.js', 'Express.js', 'React']"
        />

        <ExperienceProject
          name="Drawing Finder App"
          summary="Developed a desktop app that connects to my API to find drawings."
          :descriptionArray="[
            'Royce has over 50,000 drawings on their drawing server orginized by customer, so finding specific drawings can be difficult.',
            'The solution: a Node.js application connects to the file server and indexes the files once a day. (using cron)',
            'A rust desktop app connects to the Node.js server and searches the index for the part number.',
            'If the part number file path is found, the rust desktop app opens the file in the default file viewer.',
          ]"
          :techArray="['Rust', 'JavaScript', 'Node.js', 'Express.js']"
        />
      </div>
    </div>

    <div class="bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div class="flex flex-col md:flex-row md:justify-between mb-4">
        <div>
          <h2 class="text-2xl font-semibold text-indigo-400">Other</h2>
          <div>
            <h4 class="font-semibold text-lg text-gray-200 mb-2">Projects:</h4>
            <ExperienceProject
              name="Car Web Scraping System"
              summary="For my family's car dealership. Scrapes the web for the best deals texts them to a user's phone."
              :descriptionArray="[
                'Scrapes Kijiji and facebook marketplace for the best deals on cars.',
                'Uses a cron job to run the application every 15 minutes.',
                'Will search for cars that have a certain price, mileage, and year range.',
                'If a car is found that meets the criteria, it will text the user with the details.',
              ]"
              :techArray="['Node.js', 'Puppeteer']"
            />
            <ExperienceProject
              name="This website"
              :link="{
                href: 'https://johncampbell.dev/',
                text: 'johncampbell.dev',
              }"
              summary="Developed + deployed this website, used CI/CD and self-host it."
              :descriptionArray="[
                'CI / CD was difficult to setup, but the process works like this:',
                '1. a github actions runner runs the building and testing process.',
                '2. if the building and testing succeedes, the runner will authenticate to my pfsense firewall using a client cert, username and password.',
                'note the user is only allowed to access the VM the website is hosted.',
                '3. the runner will then use a ssh key to login to the deployment VM, pull the latest changes, run the build process and restart the web server.',
              ]"
              :techArray="['Nuxt', 'Vue', 'TailwindCSS', 'GitHub Actions']"
            />

            <ExperienceProject
              name="Small Server Farm"
              summary="Servers, switches, and other hardware for different hosting and service applications."
              :descriptionArray="[
                'Where I live, I have multiple servers, layer 3 switches, UPSes, a firewall / router, and a NAS.',
                'My firewall / router is pfsense.',
                'I have 2 cisco catalylst switches, which I have configured along with my router to have multiple VLANs.',
                'I have a TrueNAS, which contains all important data as well as automatically backing up all VMs and containers.',
                'UPS for power outages, so no downtime is experieced in the case of a power failure.',
                'I have 2 servers with hypervisors, 1 is a Quadnode, so in total I have 4 proxmox instances, and 1 XCP-np instance.',
                'A High-Availiblity Proxmox cluster is configured, so even if multiple proxmox nodes fail, all VMs and containers migrate over.',
                'I host many web applications, (including this one), load balencers, password managers, notifcation servers and monitoring services.',
                'How the hosting of websites work is a multi step process:',
                '1) cloudflare is configured to proxy traffic to my public IP for the given domain.',
                '2) A script is run to update the DNS records on cloudflare to the current public IP (as I don\'t pay for static ip)',
                '3) 3 certifcates encrypt the traffic between cloudflare and my load balencer.',
                '3) My pfsense firewall has firewall + nat rules allowing the traffic to the load balencer.',
                '4) The traffic is sent to a Kemp load balencer, (which is a HA VM) which will distribute the traffic based on the domain / subdomain.',
              ]"
              :techArray="[]"
            />

            <ExperienceProject
              name="Crypto mining shed"
              summary="4 Antminer ASIC miners mine crypto while pumping the exuast (over 10,000 BTUs of heat) into a chicken barn."
              :descriptionArray="[
                'With my 4 younger brothers help, bought and re-purposed an old shed.',
                'Main things were to clean it out, install the inlet, fan and exhast pipe',
                'The exhast pipe into the barn is used whenever the barn need heat (which is most of the year)',
                'The fan is for when the barn doesn\'t need heat.',
              ]"
              :techArray="[]"
            />

            <ExperienceProject
              name="Contributing to Open Source"
              summary="Contributed to multiple open source projects."
              :descriptionArray="[
                'most notiable open source projects I contributed to are:',
                'Uptime Kuma - fancy self-hosting monitoring tool',
                'Croner - 0 dependences, npm package.',
              ]"
              :techArray="[]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
