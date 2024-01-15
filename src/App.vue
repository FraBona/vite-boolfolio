<script >
  import ProjectIndex from './pages/projects/index.vue'
  export default {
    components: {
      ProjectIndex
    },
    data(){
      return{
        projects: [],
      }
    }
  }
</script>

<template>
  <ProjectIndex></ProjectIndex>
</template>

<style lang="scss">
@use './style/general.scss'
</style>
