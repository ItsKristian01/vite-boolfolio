<script>
import axios from 'axios';

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
  }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center mt-2">List of all Projects</h2>
        <div class="row row-cols-3 p-3 g-4">
            <div v-for="project in projects" :key="project.id">
                <div class="card h-100 p-2">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>