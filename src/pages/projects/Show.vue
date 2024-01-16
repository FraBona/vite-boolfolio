<template>
  <div v-if="project"> 
    <div class="container">
    <h1>{{project.title}}</h1>
    <p>{{project.slug}}</p>
  </div>
  <div class="container">
    <p>{{project.content}}</p>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        project: null,
      }
    },
    props: {
      slug: String,
    },
    methods: {
      fetchProject(){
        axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
        .then(res =>{
          this.project = res.data.project
        })
      }
    },
    created(){
      this.fetchProject();
    }
  }
</script>

<style lang="scss" scoped>

</style>