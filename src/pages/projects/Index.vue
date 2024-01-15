<template>
  <div>
    <div class="container">
      <h1>I nostri progetti</h1>
    </div>
    <div class="container">
      <div class="grid">
        <ProjectCard class="card project-card" v-for="project in projects" :project="project" :key="project.id"></ProjectCard>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import ProjectCard from '../../components/ProjectCard.vue'
  export default{
    components: {
      ProjectCard
    },    
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
  .grid{
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3,1fr);
  }
</style>