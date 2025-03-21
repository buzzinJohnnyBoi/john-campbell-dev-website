<script lang="ts">
const projects = [
  {
    name: "Project 1",
    display: "Project 1 Display",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Project 2",
    display: "Project 2 Display",
    image: "https://via.placeholder.com/150",
  },
];
</script>

<template>
  <div>Projects</div>

  <div>
    <div v-for="project in projects" :key="project.name">
      <div>
        <h1>{{ project.name }}</h1>
      </div>
      <ProjectsDisplay
        :name="project.name"
        :display="project.display"
        :image="project.image"
      />
    </div>
  </div>
</template>
