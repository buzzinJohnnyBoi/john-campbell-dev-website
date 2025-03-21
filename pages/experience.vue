<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-5xl font-bold text-center mb-10">Experience</h1>

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
            class="inline-block bg-indigo-900 text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
          >
            July 2023 - Present
          </span>
        </div>
      </div>

      <div class="text-gray-400 mb-4">
        Responsiblities included developing and deploying various applications,
        as well as managing IT systems such as physical servers and computers.
      </div>

      <div class="mt-6">
        <h4 class="font-semibold text-lg text-gray-200 mb-2">Projects:</h4>

        <div class="bg-gray-700 rounded-md p-4 mb-4">
          <h5 class="font-medium text-gray-100 mb-2">
            Outlook Addin / PDF Generator
          </h5>
          <p class="text-gray-400 mb-1">
            Developed a Microsoft Outlook add-in that uses a node.js / express
            server to generate and attach PDF documents of customer documents.
          </p>

          <ul class="p-2">
            <li class="text-gray-400 mb-1">
              Solves a problem with the difficulty of obtaining PDF copies of
              orders / quotes / invoices for customers.
            </li>
            <li class="text-gray-400 mb-1">
              This former process for obtaining these documents would either be
              having the ERP email it to the employee who would then forward it
              to the customer or going into the filing cabinet and scanning it
              to the customer.
            </li>
            <li class="text-gray-400 mb-1">
              Because of the nature of Royce's business, ~100 documents were
              being requested per day.
            </li>
            <li class="text-gray-400 mb-1">
              The new system that I developed is an Outlook add-in that allows
              the user to select the document type (order, quote, etc), enter in
              the UID for the document, and the application will pull the data
              off the system, create the PDF and attach it to the email.
            </li>
            <li class="text-gray-400 mb-1">
              Any employee can now access any document in seconds because of
              this.
            </li>
          </ul>

          <div class="flex flex-wrap gap-2">
            <TechBadge tech="TypeScript" />
            <TechBadge tech="JavaScript" />
            <TechBadge tech="Node.js" />
            <TechBadge tech="Express.js" />
            <TechBadge tech="Office.js" />
            <TechBadge tech="React" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
