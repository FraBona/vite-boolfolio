<template> 
  <div class="container">
    <h1>{{title}}</h1>
    <h1>{{subtitle}}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    data(){ 
      return {
        title: 'Francesco Bonafede',
        subtitle: 'Backend Developer',
        content: 'Ciao mi chiamo francesco e questa é la home page'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>