<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue'


export default {
  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000',
      projects: [],
    }
  },
  created() {
    axios.get(`${this.baseUrl}/api/projects`).then((resp) => {
      // console.log(resp);
      this.projects = resp.data.result;
    })
  },
  components: { ProjectCard, AppHeader}
}
</script>

<template>
  <AppHeader />

  <div class="container">
    <h2 class="text-center mt-2">List of all Projects</h2>
    <div class="row row-cols-3 p-3 g-4">
      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>