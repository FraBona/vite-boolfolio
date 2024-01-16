<template>
  <div class="container">
    <h1>{{  }}</h1>
    <p>{{slug}}</p>
  </div>
  <div class="container">
    <p>contenuto del post</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    props: {
      slug: String,
    },
    created(){
      const slug = this.$route.params.slug
    }
  }
</script>

<style lang="scss" scoped>

</style>