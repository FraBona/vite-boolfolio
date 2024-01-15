<template>
  <div>
    <div class="container">
      <h1>I nostri progetti</h1>
    </div>
    <div class="container">
      <div class="grid">
        <div class="card project-card" v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        projects: [],
        BASE_URL: 'http://127.0.0.1:8000/api'
      }
    },
    methods: {
      fetchProjects() {
        axios.get('http://127.0.0.1:8000/api/projects')
        .then((res) => {
          console.log(res);
          this.projects = res.data.projects.data;
        })
      }
    },
    created(){
      this.fetchProjects();
    }
  }
</script>

<style lang="scss" scoped>

</style>