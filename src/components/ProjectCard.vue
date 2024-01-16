<template>
  <div class="card card-project">
    <h3>{{ project.title }}</h3>
    <p v-if="project.type">{{ project.type.name }}</p>
    <p v-if="technologies" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</p>
    <router-link :to="{name: 'projects.show', params: {slug: project.slug}}">Apri il progetto</router-link>
  </div>
</template>

<script>
  export default{
    props: {
      project: {
        type: Object,
        required: true,
      }
    },
    data(){
      return{
        technologies: [],
      }
    }
  }
</script>

<style lang="scss" scoped>

.card.card-project{
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: grey;
}
</style>