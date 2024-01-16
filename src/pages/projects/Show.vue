<template>
  <div v-if="project"> 
    <div class="container">
    <h1>{{project.title}}</h1>
    <p>{{project.slug}}</p>
    <p v-if="project.type" class="type">{{ project.type.name }}</p>
    <ul class="tech">
      <li v-for="technology in project.technologies" :key="technology.id">
         {{ technology.name }} 
      </li>
    </ul>
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
        .catch((error) =>{
          console.log('project non found', error.response);

          if(error.response.status === 404){
            this.$router.push({name: 'not-found'})
          }
        })
      }
    },
    created(){
      this.fetchProject();
    }
  }
</script>

<style lang="scss" scoped>
  .type{
    font-weight: bold;
  }

  .tech{
    display: flex;
    gap: 20px;
    padding: 10px 0;
  }
</style>